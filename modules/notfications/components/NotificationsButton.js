import React from "react";
import { Box, Text } from "native-base";
import Touchable from "../../../core/components/Touchable";
import { useNavigation } from "@react-navigation/native";
import {
  NotificationsContext,
  NotificationsProvider,
} from "../contexts/NotificationsContext";
import CircleBox from "../../../core/components/CircleBox";
import NotificationIcon from "../../../core/images/NotificationIcon";

const NotificationsButton = () => {
  const navigation = useNavigation();
  return (
    <NotificationsProvider>
      <NotificationsContext.Consumer>
        {({ notifications }) => {
          const unreadCount = notifications.filter((n) => !n.read).length;
          return (
            <Box position={"relative"}>
              <Touchable onPress={() => navigation.navigate("Notifications")}>
                <NotificationIcon color={"white"} />
              </Touchable>
              {unreadCount > 0 && (
                <CircleBox
                  size={"10px"}
                  position={"absolute"}
                  top={0}
                  right={0}
                  bg={"accent.325"}
                >
                  <Text color={"white"} fontSize={"6px"}>
                    {unreadCount}
                  </Text>
                </CircleBox>
              )}
            </Box>
          );
        }}
      </NotificationsContext.Consumer>
    </NotificationsProvider>
  );
};

export default NotificationsButton;
