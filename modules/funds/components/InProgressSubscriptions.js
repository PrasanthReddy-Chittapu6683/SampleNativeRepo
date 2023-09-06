import React, { useContext } from "react";
import InProgressSubscription from "./InProgressSubscription";
import { SubscriptionsContext } from "../contexts/SubscriptionsContext";
import Section from "../../../core/components/Section";
import { SubscriptionStatus } from "../constants/funds";
import { ApiState } from "../../../core/services/api";

const InProgressSubscriptions = (props) => {
  const { subscriptions, subscriptionsLoading } =
    useContext(SubscriptionsContext);
  const inProgressSubscriptions =
    subscriptions?.filter(
      // todo: need a better set of functions to determine if fund is in "completed" state
      (s) => ![SubscriptionStatus.FullyExecuted].includes(s.status)
      // !s.leverage_amount
    ) || [];
  const subscriptionsLoaded = subscriptionsLoading === ApiState.Success;

  if (subscriptionsLoaded && !inProgressSubscriptions.length) {
    return <></>;
  }

  return (
    <Section
      title={"Pending Subscriptions"}
      headingProps={{
        px: "page",
        mb: 3,
      }}
      {...props}
    >
      {inProgressSubscriptions.map((item) => {
        return <InProgressSubscription key={item.id} subscription={item} />;
      })}
    </Section>
  );
};

InProgressSubscriptions.propTypes = {};

export default InProgressSubscriptions;
