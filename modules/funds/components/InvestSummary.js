import React, { useContext, useState } from "react";
import { Box, Divider, Text } from "native-base";
import { FundContext } from "../contexts/FundContext";
import InvestLayout from "./InvestLayout";
import InvestHeading from "./InvestHeading";
import { useNavigation } from "@react-navigation/native";
import { InvestContext } from "../contexts/InvestContext";
import { InvestPaymentMethod } from "../constants/invest";
import InvestLeverageOffer from "./InvestLeverageOffer";
import { mutate } from "swr";
import { refreshSubscriptionStatus } from "../services/funds";
import { timeout } from "../../../core/services/promises";

const InvestSummary = () => {
  const [loading, setLoading] = useState(false);
  const { fund } = useContext(FundContext);
  const { paymentMethod, selectedLeverageOffer, subscription } =
    useContext(InvestContext);
  const navigation = useNavigation();
  const fundStyle = fund?.style;
  const textColor = fundStyle?.primaryColor?.main;

  const beforeLeave = async () => {
    setLoading(true);
    await timeout(2000);
    await refreshSubscriptionStatus(subscription);
    await mutate("subscription");
    setLoading(false);
  };

  const subTitles = {
    [InvestPaymentMethod.Cash]: `You have subscribed to ${fund.name}`,
    [InvestPaymentMethod.Leverage]: `Your leverage offer has been confirmed`,
  };

  const renderContent = () => {
    if (paymentMethod === InvestPaymentMethod.Cash) {
      return <Box></Box>;
    }

    if (paymentMethod === InvestPaymentMethod.Leverage) {
      return (
        <Box px={"page"}>
          <InvestLeverageOffer
            offer={selectedLeverageOffer}
            hideButton
            isSelected={false}
            mb={8}
          />
          <Text variant={"subTitle"} color={textColor}>
            Please note that if you decide to proceed with leverage you can lose
            more money than you have invested. You may have to deposit
            additional cash or securities in your account on short notice to
            cover market losses.
          </Text>
        </Box>
      );
    }
  };

  return (
    <InvestLayout
      title={"Subscription"}
      buttonText={"Done"}
      buttonProps={{
        isLoading: loading,
      }}
      onClosePress={async (onClose) => {
        await beforeLeave();
        onClose();
      }}
      onNextPress={async () => {
        await beforeLeave();
        return navigation.push("Main");
      }}
    >
      <Box px={"page"}>
        <InvestHeading mb={2}>Congratulations!</InvestHeading>
        <Text variant={"subTitle"} color={textColor}>
          {subTitles[paymentMethod]}
        </Text>
      </Box>
      <Divider backgroundColor={textColor} mt={5} mb={8} />
      {renderContent()}
    </InvestLayout>
  );
};

export default InvestSummary;
