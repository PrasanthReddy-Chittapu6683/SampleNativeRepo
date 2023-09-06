import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, HStack, Text } from "native-base";
import { getFundColors } from "../../funds/services/funds";
import OpportunityTitle from "../../funds/components/OpportunityTitle";
import FundIcon from "../../../core/images/FundIcon";
import { colors } from "../../../core/theme/colors";
import { localizedCurrency } from "../../../core/services/numbers";
import StatBox from "../../../core/components/StatBox";
import Touchable from "../../../core/components/Touchable";
import { useNavigation } from "@react-navigation/native";

const InvestmentCard = ({ investment, ...props }) => {
  const navigation = useNavigation();
  const fundStyle = {
    primaryColor: {
      main: "#ffffff",
    },
    backgroundColor: "#000000",
  };
  const { text, bg } = getFundColors(fundStyle);
  const stats = [
    {
      label: "Drawn Commitment",
      value: localizedCurrency({ currency: "USD", amount: 60000 }),
      tooltip: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
    {
      label: "DPI",
      value: 0.551,
      tooltip: {
        content:
          "Distributions to Paid-in Capital (“DPI”) represents total distributions to Limited Partners divided by total capital contributed for investments, management fees, “carried interest,” taxes, transaction costs in connection with the disposition of unrealized investments and other expenses borne by investors in the applicable fund.",
      },
    },
    {
      label: "Distributions Received",
      value: localizedCurrency({ currency: "USD", amount: 27581 }),
      tooltip: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
    {
      label: "Net nav",
      value: localizedCurrency({ currency: "USD", amount: 67581 }),
      tooltip: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
    {
      label: "Net moic",
      value: "2X",
      tooltip: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
    {
      label: "Net Irr",
      value: "25%",
      tooltip: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
  ];
  return (
    <Touchable
      onPress={() => {
        navigation.push("InvestmentDetails", {
          investmentId: investment.id,
        });
      }}
    >
      <Box
        rounded={"lg"}
        bg={bg}
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
      >
        <Box p={4} py={6}>
          <Flex
            mb={5}
            justifyContent={"space-between"}
            flexDirection={"row"}
            alignItems={"flex-start"}
          >
            <Box>
              <OpportunityTitle
                fundStyle={fundStyle}
                fundName={investment.fund.name}
                opportunityName={investment.opportunity.name}
              />
            </Box>
            <FundIcon fill={colors.accent[200]} />
          </Flex>
          <Text mb={10} numberOfLines={3} color={text} fontSize={"section"}>
            {investment?.fund?.data?.product_tagline ||
              investment?.opportunity?.description}
          </Text>
          <HStack space={2} flexWrap={"wrap"} mb={3}>
            {[stats[0], stats[1], stats[2]].map((stat) => {
              return (
                <StatBox
                  {...stat}
                  textColor={text}
                  key={stat.label}
                  w={"31.5%"}
                />
              );
            })}
          </HStack>
          <HStack space={2}>
            {[stats[3], stats[4], stats[5]].map((stat) => {
              return (
                <StatBox
                  {...stat}
                  textColor={text}
                  key={stat.label}
                  w={"31.5%"}
                />
              );
            })}
          </HStack>
        </Box>
      </Box>
    </Touchable>
  );
};

InvestmentCard.propTypes = {
  investment: PropTypes.object,
};

export default InvestmentCard;
