import { createContext, useEffect } from "react";
import { useApi } from "../../../core/services/api";
import { mutate } from "swr";
import {
  deleteNotification,
  updateNotification,
} from "../services/notifications";

export const NotificationsContext = createContext({
  notifications: null,
  updateNotification: () => {},
  deleteNotification: () => {},
});

export const NotificationsProvider = ({ children }) => {
  const [notificationsLoading, notifications] = useApi("notifications");

  useEffect(() => {
    const timer = setInterval(() => {
      mutate("notifications");
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleUpdateNotification = async (updatedNotification) => {
    return updateNotification(updatedNotification);
  };

  const handleDeleteNotification = async (id) => {
    return deleteNotification(id);
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications: notifications || [],
        updateNotification: handleUpdateNotification,
        deleteNotification: handleDeleteNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
