import { createContext } from "react";
import { ApiState, useApi } from "../../../core/services/api";

export const SubscriptionsContext = createContext({
  subscriptionsLoading: ApiState.Idle,
  subscriptions: null,
});

export const SubscriptionsProvider = ({ children }) => {
  debugger;

  const [subscriptionsLoading, subscriptions] =
  {
    subscriptionsLoading: "success",
    subscriptions: []
  }
  // useApi("subscription");

  return (
    <SubscriptionsContext.Provider
      value={{
        subscriptionsLoading,
        subscriptions: subscriptions?.slice?.(0, 3),
      }}
    >
      {children}
    </SubscriptionsContext.Provider>
  );
};
