import * as Notifications from "expo-notifications";
import { api } from "./api";
import { Platform } from "react-native";
import { useEffect, useRef } from "react";
import { useNotificationHandler } from "../../modules/notfications/services/notifications";

export const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === "web") {
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync({})).data;
  await api.post({
    url: `push-notifications/token`,
    data: {
      token,
      os: Platform.OS,
    },
  });

  return token;
};

export const useRegisterNotificationListeners = () => {
  const notificationListener = useRef();
  const responseListener = useRef();
  const onNotification = useNotificationHandler();

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(
        async (response) => {
          const notification = response?.notification?.request?.content?.data;

          if (notification) {
            await onNotification(notification);
          }
        }
      );

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [onNotification]);
};
