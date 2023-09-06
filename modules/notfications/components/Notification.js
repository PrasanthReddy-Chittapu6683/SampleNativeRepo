import React, { useContext, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Spinner,
  Text,
} from "native-base";
import { format } from "date-fns";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { NotificationsContext } from "../contexts/NotificationsContext";
import { timeout } from "../../../core/services/promises";
import { Animated, Easing } from "react-native";

const DeleteAnimationSpeed = 500;

const Notification = ({
  notification,
  onPress,
  onDeleteStart,
  onDeleteEnd,
  ...props
}) => {
  const { deleteNotification } = useContext(NotificationsContext);
  const [{ open, deleted }, set] = useState({ open: false, deleted: false });
  const height = useRef(new Animated.Value(108)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.parallel([
      Animated.timing(height, {
        toValue: 0,
        duration: DeleteAnimationSpeed,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: DeleteAnimationSpeed,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Animated.View
        style={{
          height,
          overflow: "hidden",
        }}
      >
        <Swipeable
          friction={2}
          rightThreshold={50}
          onSwipeableOpen={async () => {
            set({
              open: true,
              deleted: false,
            });
            if (onDeleteStart) {
              await onDeleteStart(notification);
            }
            await timeout(500);
            animate();
            await timeout(DeleteAnimationSpeed);
            await deleteNotification(notification.id);
            onDeleteEnd?.();
          }}
          renderRightActions={() => {
            return (
              <Center flex={1}>
                {open && (
                  <Animated.View style={{ opacity }}>
                    <Spinner />
                  </Animated.View>
                )}
              </Center>
            );
          }}
        >
          <RectButton
            onPress={() => {
              onPress(notification);
            }}
          >
            <HStack
              px={"modal"}
              opacity={notification.read ? 0.5 : 1}
              alignItems={"center"}
              justifyContent={"space-between"}
              space={4}
              py={4}
            >
              <Box maxW={"95%"}>
                <Text variant={"xs"} opacity={0.6}>
                  {format(
                    new Date(notification.date || notification.created_at),
                    "dd/MM/yyyy HH:mm"
                  )}
                </Text>
                <Heading size={"title3"}>{notification.title}</Heading>
                <Text variant={"subTitle"}>{notification.description}</Text>
              </Box>
            </HStack>
          </RectButton>
        </Swipeable>
      </Animated.View>
      <Animated.View style={{ opacity }}>
        <Divider />
      </Animated.View>
    </>
  );
};

Notification.propTypes = {
  notification: PropTypes.object,
  onPress: PropTypes.func,
  onDeleteStart: PropTypes.func,
  onDeleteEnd: PropTypes.func,
};

export default Notification;
