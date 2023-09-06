import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { AppContext } from "../../../core/contexts/AppContext";
import {
  canContinueSubscription,
  continueSubscription,
  getSubscription,
} from "../../funds/services/funds";
import { SubscriptionStatus } from "../../funds/constants/funds";
import { api } from "../../../core/services/api";
import { mutate } from "swr";
import { Alert } from "react-native";
import { errorHandler } from "../../../core/services/errors";

export const updateNotification = async (notification) => {
  await api.patch({
    url: `notifications/${notification.id}`,
    data: {
      notification: notification,
    },
  });
  await mutate("notifications");
};

export const deleteNotification = async (id) => {
  await api.delete({
    url: `notifications/${id}`,
  });
  await mutate("notifications");
};

export const useNotificationHandler = ({ onStart, onBeforeNavigate } = {}) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { setState: setAppState } = useContext(AppContext);

  return async (notification) => {
    return errorHandler(async () => {
      updateNotification({
        ...notification,
        read: true,
      });
      if (
        notification.object_type === "subscription" &&
        route?.name !== "Invest"
      ) {
        onStart?.({ navigation });
        navigation.push("Loading", {
          loadingText: "",
          noRedirect: true,
        });
        const subscription = await getSubscription(notification.object_id);

        if (subscription.status === SubscriptionStatus.FullyExecuted) {
          return navigation.push("Main", {
            currentTab: "Investments",
          });
        }

        if (subscription.status === SubscriptionStatus.Approved) {
          return navigation.push("Main", {
            currentTab: "Dashboard",
          });
        }

        if (canContinueSubscription(subscription)) {
          await continueSubscription({
            subscription,
            navigation,
            setAppState,
            onBeforeNavigate: () => {
              onBeforeNavigate?.({ navigation });
            },
          });
        } else {
          Alert.alert("This has already been actioned", "", [
            {
              text: "OK",
              onPress: () => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Main" }],
                });
              },
            },
          ]);
        }
      }
    });
  };
};
