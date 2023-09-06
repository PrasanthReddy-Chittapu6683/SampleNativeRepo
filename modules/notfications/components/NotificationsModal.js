import React, { useContext, useState } from "react";
import AppModalScreen from "../../../core/components/AppModalScreen";
import { NotificationsContext } from "../contexts/NotificationsContext";
import { FlatList, Text } from "native-base";
import { useNotificationHandler } from "../services/notifications";
import { ScrollView } from "react-native-gesture-handler";
import Notification from "./Notification";
import { goBack } from "../../../core/services/navigation";

const NotificationsModal = () => {
  const { notifications, updateNotification, deleteNotification } =
    useContext(NotificationsContext);
  const onNotificationPress = useNotificationHandler({
    onStart: ({ navigation }) => {
      goBack();
    },
  });
  const [canDelete, setCanDelete] = useState(true);

  return (
    <AppModalScreen title={"Notifications"}>
      {!notifications?.length && (
        <Text fontSize={"section"} textAlign={"center"}>
          No notifications
        </Text>
      )}
      <FlatList
        data={notifications || []}
        renderScrollComponent={(props) => <ScrollView {...props} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item: notification }) => {
          return (
            <Notification
              notification={notification}
              onPress={onNotificationPress}
            />
          );
        }}
      ></FlatList>
    </AppModalScreen>
  );
};

export default NotificationsModal;
