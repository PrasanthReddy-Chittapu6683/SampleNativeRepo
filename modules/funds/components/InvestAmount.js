import React, { useContext, useState } from "react";
import Layout from "../../../core/components/Layout";
import { FundContext } from "../contexts/FundContext";
import { Box, Heading, Text } from "native-base";
import { getMaximumInvestment, getMinimumInvestment } from "../services/funds";
import { useNavigation } from "@react-navigation/native";
import { InvestPaymentMethod } from "../constants/invest";
import PageButton from "../../../core/components/PageButton";
import { is, isNil } from "ramda";
import FormItem from "../../../core/components/FormItem";

const InvestAmount = () => {
  const navigation = useNavigation();
  const { fund } = useContext(FundContext);
  const [amountError, setAmountError] = useState("");
  const minimumInvestment = getMinimumInvestment(fund);
  const maximumInvestment = getMaximumInvestment(fund);
  const [amount, setAmount] = useState(minimumInvestment);

  const amountIsCorrect =
    amount >= minimumInvestment && amount <= maximumInvestment;
  const canNext = amountIsCorrect;
  const fundStyle = fund?.style || {};
  const textColor = fundStyle?.primaryColor?.main;

  return (
    <Layout
      showBackButton
      avoidKeyboard
      bg={fundStyle.backgroundColor}
      _dark={{
        bg: fundStyle.backgroundColor,
      }}
    >
      <Box>
        <Heading size={"title3"} mb={2} color={textColor}>
          {fund?.name}
        </Heading>
        <Text variant={"subTitle"} color={textColor}>
          How much do you want to invest?
        </Text>
        <FormItem
          w={"100%"}
          mb={6}
          defaultValue={
            is(Number, amount) ? String(amount) : String(minimumInvestment)
          }
          keyboardType={"numeric"}
          onChangeText={(val) => {
            if (isNil(val)) {
              setAmount(null);
            } else {
              const newAmount = Number(val);
              const newAmountIsCorrect =
                newAmount >= minimumInvestment &&
                newAmount <= maximumInvestment;
              setAmount(newAmount);
              if (newAmountIsCorrect) {
                if (amountError) {
                  setAmountError("");
                }
              } else {
                setAmountError(
                  `Amount must be between $${minimumInvestment} and $${maximumInvestment}`
                );
              }
            }
          }}
          inputProps={{
            color: textColor,
            fontSize: "30px",
            leftElement: (
              <Text color={textColor} fontSize={"30px"}>
                $
              </Text>
            ),
            onBlur: () => {
              if (!amountIsCorrect) {
                setAmountError(
                  `Amount must be between $${minimumInvestment} and $${maximumInvestment}`
                );
              } else if (amountError) {
                setAmountError("");
              }
            },
          }}
          errorMessage={amountError}
        />
      </Box>
      <PageButton
        buttonProps={{
          isDisabled: !canNext,
          onPress: () => {
            if (fund.leverage_provider_id) {
              navigation.push("InvestChooseLeverage", {
                fundId: fund.id,
                investAmount: amount || minimumInvestment,
              });
            } else {
              navigation.push("Invest", {
                fundId: fund.id,
                investAmount: amount || minimumInvestment,
                paymentMethod: InvestPaymentMethod.Cash,
              });
            }
          },
          _text: {
            color: textColor,
            _light: {
              color: textColor,
            },
          },
        }}
      >
        Next
      </PageButton>
    </Layout>
  );
};

export default InvestAmount;
