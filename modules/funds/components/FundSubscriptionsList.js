import React, { useContext } from "react";
import { FundContext } from "../contexts/FundContext";
import { Divider, VStack } from "native-base";
import { useRoute } from "@react-navigation/native";
import FundSubscriptionListItem from "./FundSubscriptionListItem";
import { omit } from "ramda";

const FundSubscriptionsList = () => {
  const route = useRoute();
  const { fund } = useContext(FundContext);
  const { fundStyle } = route.params;

  return (
    <VStack space={2} divider={<Divider />}>
      {fund?.subscriptions?.map((subscription) => (
        <FundSubscriptionListItem
          key={subscription.id}
          subscription={{
            ...subscription,
            opportunity: omit(["subscriptions"], fund),
            fund: fund.fund,
          }}
          fundStyle={fundStyle}
        />
      ))}
    </VStack>
  );
};

export default FundSubscriptionsList;
