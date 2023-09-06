import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, HStack, Text } from "native-base";
import { format } from "date-fns";
import { localizedCurrency } from "../../../core/services/numbers";
import {
  canContinueSubscription,
  continueSubscription,
  getFundColors,
} from "../services/funds";
import { SubscriptionStatus, subscriptionSteps } from "../constants/funds";
import { AppContext } from "../../../core/contexts/AppContext";
import { useNavigation } from "@react-navigation/native";
import { goBack } from "../../../core/services/navigation";

const FundSubscriptionListItem = ({ subscription, fundStyle, ...props }) => {
  const { text: textColor } = getFundColors(fundStyle);
  const [loading, setLoading] = useState(false);
  const { setState: setAppState } = useContext(AppContext);
  const navigation = useNavigation();
  const subscriptionStep = subscriptionSteps[subscription.status];

  const handleResume = async () => {
    setLoading(true);
    await continueSubscription({
      subscription,
      navigation,
      setAppState,
      onBeforeNavigate: () => {
        goBack();
      },
    });
    setLoading(false);
  };

  return (
    <HStack
      key={subscription.id}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...props}
    >
      <HStack alignItems={"center"} space={4}>
        <Text>
          {format(new Date(subscription.created_at), "dd/MM/yyyy HH:mm")}
        </Text>
        <Text>
          {localizedCurrency({
            currency: "USD",
            amount: Number(
              subscription.cash_amount || subscription.leverage_amount
            ),
          })}
        </Text>
      </HStack>
      <Box minW={"85px"}>
        {canContinueSubscription(subscription) ? (
          <Button
            isLoading={loading}
            minW={"85px"}
            size={"cta"}
            _text={{
              color: textColor,
              _light: {
                color: textColor,
              },
            }}
            onPress={() => {
              handleResume();
            }}
          >
            {subscriptionStep?.name || "Resume"}
          </Button>
        ) : (
          <Text textAlign={"center"} color={textColor}>
            {subscription?.status === SubscriptionStatus.FullyExecuted
              ? "Fully Executed"
              : subscriptionStep?.name}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

FundSubscriptionListItem.propTypes = {
  ...HStack.propTypes,
  subscription: PropTypes.object,
  fundStyle: PropTypes.object,
};

export default FundSubscriptionListItem;
