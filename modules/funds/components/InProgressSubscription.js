import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  subscriptionDescriptionOverrides,
  SubscriptionPropType,
  subscriptionStatusToStep,
  subscriptionSteps,
} from "../constants/funds";
import { Box, Button, Divider, Text, VStack } from "native-base";
import StepsBar from "../../../core/components/StepsBar";
import {
  canCancelSubscription,
  cancelSubscription,
  continueSubscription,
} from "../services/funds";
import { AppContext } from "../../../core/contexts/AppContext";
import { useNavigation } from "@react-navigation/native";
import FundTease from "./FundTease";
import { catchify } from "../../../core/services/promises";
import { onError } from "../../../core/services/errors";
import { ModalsContext } from "../../../core/contexts/ModalsContext";

const InProgressSubscription = ({ subscription, ...props }) => {
  const navigation = useNavigation();
  const { setState: setAppState } = useContext(AppContext);
  const [continueLoading, setContinueLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const currentStepKey =
    subscriptionStatusToStep[subscription.status] || "started";
  const currentStep = subscriptionSteps[currentStepKey];
  const canCancel = canCancelSubscription(subscription);
  const { alert } = useContext(ModalsContext);

  const handleContinue = async () => {
    setContinueLoading(true);
    const [err] = await catchify(
      continueSubscription({
        subscription,
        navigation,
        setAppState,
      })
    );

    if (err) {
      onError(err);
    }

    setContinueLoading(false);
  };

  const handleCancel = async () => {
    setCancelLoading(true);
    alert("Cancel Subscription", "Are you sure you want to cancel?", [
      {
        text: "OK",
        onPress: async () => {
          await cancelSubscription(subscription);
          setCancelLoading(false);
        },
        style: "cancel",
      },
      {
        text: "No, don't cancel",
        onPress: () => {
          setCancelLoading(false);
        },
        style: "cancel",
      },
    ]);
  };

  return (
    <Box>
      <Box px={"page"}>
        <Text variant={"subTitle"} mb={4}>
          {subscriptionDescriptionOverrides[subscription.status] ||
            currentStep.description}
        </Text>
      </Box>
      <Box maxW={"800px"}>
        <StepsBar
          mb={4}
          orientation={"horizontal"}
          steps={Object.entries(subscriptionSteps).map(([step, s]) => {
            return {
              ...s,
              active: step === currentStepKey,
            };
          })}
        />
      </Box>
      <Box px={"page"}>
        <FundTease
          hasModal
          fund={{
            ...subscription.opportunity,
            style: subscription.organisation.style,
            fund: subscription.fund,
          }}
          beforeFund={() => {
            return (
              <Box>
                <Text
                  py={3}
                  fontSize={"title2"}
                  textAlign={"center"}
                  color={"accent.325"}
                >
                  {currentStep.name}
                </Text>
                <Divider bg={"accent.325"} opacity={1} />
              </Box>
            );
          }}
          afterFund={() => {
            if (currentStep?.showContinue || canCancel) {
              return (
                <VStack space={2} p={4}>
                  {currentStep?.showContinue && (
                    <Button
                      onPress={handleContinue}
                      isLoading={continueLoading}
                      isLoadingText={"Continue Subscription"}
                      _light={{
                        bg: "transparent",
                      }}
                    >
                      Continue Subscription
                    </Button>
                  )}
                  {canCancel && (
                    <Button
                      isLoading={cancelLoading}
                      isLoadingText={"Cancel"}
                      onPress={handleCancel}
                      _light={{
                        bg: "transparent",
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </VStack>
              );
            }
          }}
        />
      </Box>
      <Divider my={6} />
    </Box>
  );
};

InProgressSubscription.propTypes = {
  subscription: PropTypes.shape(SubscriptionPropType),
};

export default InProgressSubscription;
