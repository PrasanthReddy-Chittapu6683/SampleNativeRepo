import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Pressable,
  Text,
  useTheme,
} from "native-base";
import { getFundTeaseStats } from "../services/funds";
import FundIcon from "../../../core/images/FundIcon";
import { FundPropType } from "../constants/funds";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { TOUCHABLE_OPACITY_VALUE } from "../../../core/components/Touchable";
import OpportunityTitle from "./OpportunityTitle";

const FundTease = ({
  fund,
  beforeFund,
  afterFund,
  fundContainerProps,
  hasModal,
  onPress,
  ...props
}) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const textColor = fund.style.primaryColor?.main;
  const textColor2 = fund.style.primaryColor?.main;
  const dividerColor = fund.style.primaryColor?.main;
  const stats = getFundTeaseStats(fund);

  const renderWrapper = (content) => {
    if (hasModal || onPress) {
      return (
        <TouchableOpacity
          activeOpacity={TOUCHABLE_OPACITY_VALUE}
          onPress={() => {
            if (hasModal) {
              navigation.push("FundModal", {
                fundId: fund.id,
                fundStyle: fund.style,
              });
            } else if (onPress) {
              onPress();
            }
          }}
        >
          {content}
        </TouchableOpacity>
      );
    }

    return <>{content}</>;
  };

  return renderWrapper(
    <Box
      bg={fund.style.backgroundColor}
      rounded={"lg"}
      style={{
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,

        elevation: 10,
      }}
      maxW={"780px"}
      {...props}
    >
      {beforeFund?.()}
      <Box p={4} py={6} {...(fundContainerProps || {})}>
        <Flex
          mb={5}
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"flex-start"}
        >
          <Box>
            <OpportunityTitle
              fundStyle={fund.style}
              fundName={fund.fund.name}
              opportunityName={fund.name}
            />
          </Box>
          <FundIcon fill={colors.accent[200]} />
        </Flex>
        <Text mb={10} numberOfLines={2} color={textColor2}>
          {fund?.fund?.data?.product_tagline || fund.description}
        </Text>
        <HStack justifyContent={"space-between"} w={"100%"}>
          {stats.map((stat, i) => {
            return (
              <HStack alignItems={"center"} key={stat.label}>
                {i !== 0 && (
                  <Divider
                    opacity={0.2}
                    orientation={"vertical"}
                    mx={2}
                    h={"150%"}
                    backgroundColor={dividerColor}
                  />
                )}
                <Box key={stat.label}>
                  <Heading
                    fontSize={"10px"}
                    letterSpacing={"1px"}
                    opacity={0.7}
                    color={textColor2}
                    mb={2}
                  >
                    {stat.label}
                  </Heading>
                  <Heading size={"sm"} color={textColor}>
                    {stat.value}
                  </Heading>
                </Box>
              </HStack>
            );
          })}
        </HStack>
      </Box>
      {afterFund?.()}
    </Box>
  );
};

FundTease.propTypes = {
  ...Pressable.propTypes,
  fund: PropTypes.shape(FundPropType),
  beforeFund: PropTypes.func,
  afterFund: PropTypes.func,
  fundContainerProps: PropTypes.object,
  hasModal: PropTypes.bool,
};

export default FundTease;
