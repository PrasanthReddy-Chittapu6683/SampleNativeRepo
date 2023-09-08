import React from "react";
import { createRouteComponent } from "../services/router";
import AppMenu from "./AppMenu";
import { Box } from "native-base";
import DashboardScreen from "../../modules/dashboard/components/DashboardScreen";
import { FundsProvider } from "../../modules/funds/contexts/FundsContext";
import { SubscriptionsProvider } from "../../modules/funds/contexts/SubscriptionsContext";
import { InvestmentsProvider } from "../../modules/investments/contexts/InvestmentsContext";

/**
 * Probably not needed but for 100% eliminating possibility main screen shows blank and as a fallback
 */
const defaultRoute = {
  component: DashboardScreen,
  providers: [FundsProvider, SubscriptionsProvider, InvestmentsProvider],
};

const MainScreen = ({ routes, ...props }) => {

  const currentTab = props?.route?.params?.currentTab || "Dashboard";
  const route =
    routes.tabs?.find?.((tab) => tab.name === currentTab) || defaultRoute;
  const CurrentTabComponent = createRouteComponent(
    route.component,
    route?.providers || []
  );

  const handleSelectTab = (tab) => {
    props.navigation.setParams({ currentTab: tab });
  };

  return (
    <Box flex={1} justifyContent={"space-between"}>
      {CurrentTabComponent && <CurrentTabComponent />}
      <AppMenu currentTab={currentTab} setCurrentTab={handleSelectTab} />
    </Box>
  );
};

export default MainScreen;
