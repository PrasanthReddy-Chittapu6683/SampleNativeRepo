import React from "react";
import { Modal } from "native-base";
import TabsView from "../../../core/components/TabsView";
import DashboardPortfolioOverview from "./DashboardPortfolioOverview";
import DashboardPortfolioActivity from "./DashboardPortfolioActivity";
import AppModalScreen from "../../../core/components/AppModalScreen";

const DashboardPortfolioModal = (props) => {
  return (
    <AppModalScreen title={"Portfolio Breakdown"} {...props}>
      <TabsView
        tabs={[
          {
            title: "Overview",
            content: () => <DashboardPortfolioOverview />,
          },
          {
            title: "Activity",
            content: () => <DashboardPortfolioActivity />,
          },
        ]}
        tabsHeadingProps={{
          px: 4,
          mb: 8,
        }}
      />
    </AppModalScreen>
  );
};

DashboardPortfolioModal.propTypes = {
  ...Modal.propTypes,
};

export default DashboardPortfolioModal;
