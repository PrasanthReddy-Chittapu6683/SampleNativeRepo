import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Modal,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { FundPropType } from "../constants/funds";
import { getFundColors, getFundTeaseStats } from "../services/funds";
import { format } from "date-fns";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppModalScreen from "../../../core/components/AppModalScreen";
import { FundContext } from "../contexts/FundContext";
import { ApiState } from "../../../core/services/api";
import FundSubscriptionsList from "./FundSubscriptionsList";
import FundHelp from "./FundHelp";
import Section from "../../../core/components/Section";
import OpportunityTitle from "./OpportunityTitle";
import StatBox from "../../../core/components/StatBox";
import FundDeadlineCountdown from "./FundDeadlineCountdown";
import Grid from "./Grid";
import FundMaterials from "./FundMaterials";
import { goBack } from "../../../core/services/navigation";
import FundDetailSections from "./FundDetailSections";

const FundModal = () => {
  const route = useRoute();
  const { fund, fundLoading } = useContext(FundContext);
  const fundStyle = route.params.fundStyle || fund.style;
  const navigation = useNavigation();
  const stats = getFundTeaseStats(fund);
  const { text: textColor, bg: bgColor } = getFundColors(fundStyle);
  const hasSubscriptions = fund?.subscriptions?.length > 0;

  const titleProps = {
    color: textColor,
  };

  const headingProps = {
    mb: 2,
  };

  return (
    <AppModalScreen
      position={"relative"}
      bg={bgColor}
      _light={{
        bg: bgColor,
      }}
      closeButtonProps={{
        fillColor: fundStyle?.primaryColor?.main,
      }}
    >
      <ScrollView
        flex={1}
        contentContainerStyle={{ flexGrow: 1 }}
        showVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        {!fund && fundLoading !== ApiState.Success && <Spinner />}
        {fund && (
          <Box pb={8} pt={4}>
            <VStack px={"modal"} space={6}>
              <Box>
                <VStack
                  px={5}
                  pb={4}
                  borderWidth={"1px"}
                  borderColor={"rgba(63, 68, 109, 0.7)"}
                  borderRadius={"sm"}
                  space={8}
                >
                  <VStack space={4}>
                    <OpportunityTitle
                      mt={6}
                      opportunityName={fund.name}
                      fundName={fund.fund.name}
                      fundStyle={fundStyle}
                    />
                    {hasSubscriptions && <FundSubscriptionsList />}
                    <Text color={textColor} opacity={0.7}>
                      {fund.fund.data.product_tagline}
                    </Text>
                  </VStack>
                  <Grid
                    columns={2}
                    gap={3}
                    items={stats.map((stat, i) => {
                      return (
                        <StatBox
                          key={stat.label}
                          label={stat.label}
                          labelProps={{
                            fontSize: "11px",
                          }}
                          value={stat.value}
                          textColor={textColor}
                          valueProps={{
                            fontSize: "22px",
                          }}
                          w={"100%"}
                        />
                      );
                    })}
                  ></Grid>

                  <Section
                    title={"Subscription Deadline"}
                    titleProps={titleProps}
                    headingProps={headingProps}
                  >
                    <Text color={textColor}>
                      {format(
                        new Date(fund.close_date || new Date()),
                        "MMMM dd, yyyy"
                      )}
                    </Text>
                  </Section>
                  <Section
                    title={"Deadline Countdown"}
                    titleProps={titleProps}
                    headingProps={headingProps}
                  >
                    {fund?.close_date && <FundDeadlineCountdown />}
                  </Section>
                </VStack>
              </Box>
              <FundDetailSections />
              <Box>
                <Section
                  title={"Additional Materials"}
                  titleProps={titleProps}
                  headingProps={headingProps}
                >
                  <FundMaterials />
                </Section>
              </Box>
            </VStack>
            {!hasSubscriptions && (
              <Box px={"modal"} mt={8}>
                <Button
                  onPress={() => {
                    goBack();
                    navigation.push("InvestAmount", {
                      fundId: fund.id,
                    });
                  }}
                  _text={{
                    color: textColor,
                    _light: {
                      color: textColor,
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            )}
          </Box>
        )}
      </ScrollView>
      <FundHelp position={"absolute"} bottom={30} right={30} />
    </AppModalScreen>
  );
};

FundModal.propTypes = {
  ...Modal.propTypes,
  fund: PropTypes.shape(FundPropType),
};

export default FundModal;
