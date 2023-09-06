import PropTypes from "prop-types";

export const FundPropType = {
  name: PropTypes.string,
  short_description: PropTypes.string,
  description: PropTypes.string,
  close_date: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    primaryColor: PropTypes.shape({
      dark: PropTypes.string,
      main: PropTypes.string,
      light: PropTypes.string,
    }),
  }),
};

export const SubscriptionStatus = {
  Unsent: "unsent",
  Pending: "pending",
  Setup: "setup",
  InProgress: "in_progress",
  Sent: "sent",
  AwaitingSigning: "awaiting_signing",
  PartiallySigned: "partially_signed",
  InvestorClosingSignable: "investor-closing-signable",
  Signed: "signed",
  RequestedChanges: "requested_changes",
  AwaitingLeverageApproval: "awaiting_leverage_approval",
  Approved: "approved",
  SentToCountersigner: "sent_to_countersigner",
  FullyExecuted: "fully_executed",
};

export const SubscriptionPropType = {
  id: PropTypes.string,
  status: PropTypes.oneOf(Object.values(SubscriptionStatus)),
  opportunity: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  fund: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
};

export const subscriptionSteps = {
  started: {
    name: "In Progress",
    description:
      "Your subscription is incomplete. Press continue to complete and submit your subscription.",
    showContinue: true,
  },
  sign: {
    name: "Ready to Sign",
    description:
      "Your subscription requires a signature. Press continue to review and sign",
    showContinue: true,
  },
  review: {
    name: "In Review",
    description:
      "Your subscription is being reviewed. We'll let you know if you need to make any changes or once you're approved",
  },
  changes: {
    name: "Changes Required",
    description:
      "Your subscription needs to be updated. Press continue to respond to the comments",
    showContinue: true,
  },
  approved: {
    name: "Approved",
    description:
      "Your subscription has been approved and will be complete once it is signed by the GP",
  },
};

export const subscriptionDescriptionOverrides = {
  [SubscriptionStatus.PartiallySigned]: subscriptionSteps.sign.description,
};
export const subscriptionStatusToStep = {
  [SubscriptionStatus.Unsent]: "started",
  [SubscriptionStatus.Pending]: "started",
  [SubscriptionStatus.Setup]: "started",
  [SubscriptionStatus.InProgress]: "started",
  [SubscriptionStatus.Sent]: "started",
  [SubscriptionStatus.AwaitingSigning]: "sign",
  [SubscriptionStatus.PartiallySigned]: "started",
  [SubscriptionStatus.InvestorClosingSignable]: "sign",
  [SubscriptionStatus.Signed]: "review",
  [SubscriptionStatus.RequestedChanges]: "changes",
  [SubscriptionStatus.AwaitingLeverageApproval]: "review",
  [SubscriptionStatus.Approved]: "approved",
  [SubscriptionStatus.SentToCountersigner]: "review",
  [SubscriptionStatus.SentToCountersigner]: "approved",
};
