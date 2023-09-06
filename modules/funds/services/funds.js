import { api } from "../../../core/services/api";
import { formatCurrency } from "../../../core/services/numbers";
import { InvestCashStep, InvestPaymentMethod } from "../constants/invest";
import { stringOrNull } from "../../../core/services/strings";
import { mutate } from "swr";
import { API_URL } from "@env";
import { SubscriptionStatus } from "../constants/funds";
import { Alert } from "react-native";

export const getMinimumInvestment = (opportunity) => {
  if (!opportunity) {
    return 0;
  }

  return (
    opportunity.minimum_investment_amount &&
    Number(opportunity.minimum_investment_amount)
  );
};

export const getMaximumInvestment = (opportunity) => {
  if (!opportunity) {
    return 0;
  }

  return (
    opportunity.maximum_investment_amount &&
    Number(opportunity.maximum_investment_amount)
  );
};

export const getLeverageFields = async (fund, subscription) => {
  const url = `opportunity/${fund.id}/subscription/${subscription.id}/leverage/field`;
  const { payload } = await api.get({
    url: url,
  });

  return payload;
};

export const getLeverageOffers = async ({ fund, values, amount }) => {
  const { address, ...otherValues } = values;
  const args = {
    url: "leverage/accounts/apply",
    data: {
      provider: "luna",
      address_line_1: address.address_line_1,
      address_line_2: address.address_line_2,
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
      ...otherValues,
      amount_required: amount,
      currency: "usd",
      organisation_id: fund.fund.organisation_id,
    },
  };
  const { payload } = await api.post(args);

  return payload;
};

export const confirmLeverageOffer = async (offer) => {
  const { payload } = await api.post({
    url: `leverage/accounts/${offer.id}/confirm`,
  });

  return payload;
};

export const subscribeToFund = async (fund, amount, paymentMethod) => {
  // currently this endpoint only supports cash with passthrough. Need to add support for other payment methods
  const data = {
    cash_amount: 0.0,
    leverage_amount: 0.0,
  };

  if (paymentMethod === InvestPaymentMethod.Cash) {
    data.cash_amount = amount;
  }

  if (paymentMethod === InvestPaymentMethod.Leverage) {
    data.leverage_amount = amount;
  }

  const { payload } = await api.post({
    url: `opportunity/${fund.id}/subscription`,
    data,
  });

  return payload;
};

export const getSubscription = async (subscriptionId) => {
  const { payload } = await api.get({
    url: `subscription/${subscriptionId}`,
  });

  return payload;
};

export const getSubscriptionDocumentation = async (fund, subscription) => {
  const { payload } = await api.post({
    url: `opportunity/${fund.id}/subscription/${subscription.id}/documentation`,
  });

  return payload;
};

export const continueSubscription = async ({
  subscription,
  navigation,
  setAppState,
  onBeforeNavigate,
}) => {
  if (!canContinueSubscription(subscription)) {
    return Alert.alert("Subscription not actionable", "", [
      {
        text: "OK",
        onPress: () => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Main" }],
          });
        },
      },
    ]);
  }

  const investAmount =
    subscription.cash_amount && Number(subscription.cash_amount) > 0
      ? Number(subscription.cash_amount)
      : Number(subscription.leverage_amount);
  const paymentMethod =
    subscription.cash_amount && Number(subscription.cash_amount) > 0
      ? InvestPaymentMethod.Cash
      : InvestPaymentMethod.Leverage;
  const newAppState = {
    "invest.subscription": subscription,
  };
  const documentation = await getSubscriptionDocumentation(
    subscription.opportunity,
    subscription
  );

  if (!documentation) {
    alert(
      "No documentation found for subscription. Please contact support for more information"
    );
    return;
  }

  const newPaymentUrl = `${API_URL}/provider/passthrough/embed?token=${documentation.token}&organisation_id=${subscription.fund.organisation_id}&colorMode=dark}`;
  const fullFundResult = await api.get({
    url: `opportunity/${subscription.opportunity.id}`,
  });
  onBeforeNavigate?.();
  await mutate(
    `opportunity/${subscription.opportunity.id}`,
    () => fullFundResult,
    {
      revalidate: false,
    }
  );
  newAppState["invest.paymentUrl"] = newPaymentUrl;
  setAppState(newAppState);
  navigation.navigate("Invest", {
    step: InvestCashStep.Delegate,
    fundId: subscription.opportunity.id,
    paymentMethod,
    investAmount,
  });
};

export const cancelSubscription = async (subscription) => {
  const { payload } = await api.delete({
    url: `subscription/${subscription.id}`,
  });

  await mutate("subscription");
  await mutate(`subscription/${subscription.id}`);
  await mutate("opportunity");
  await mutate(`opportunity/${subscription.opportunity_id}`);

  return payload;
};

export const sendLeverageForSubscription = async (offer, subscription) => {
  return api.post({
    url: `leverage/accounts/${offer.id}/use`,
    data: {
      fund_subscription_id: subscription.id,
    },
  });
};

export const refreshSubscriptionStatus = async (subscription) => {
  return api.post({
    url: `subscription/${subscription.id}/refresh`,
  });
};

export const getFundTeaseStats = (fund) => {
  if (!fund) {
    return [];
  }

  return [
    {
      label: "Minimum",
      value: formatCurrency("USD", getMinimumInvestment(fund), true, 0),
    },
    {
      label: "Target Gross MOIC",
      value: stringOrNull(fund.fund?.data?.target_m_o_i_c?.gross_max, "%sX"),
    },
    {
      label: "Target Gross IRR",
      value: stringOrNull(fund.fund?.data?.target_i_r_r?.gross_max, "%s%"),
    },
  ];
};

export const getFundColors = (fundStyle) => {
  return {
    text: fundStyle?.primaryColor?.main,
    bg: fundStyle?.backgroundColor,
  };
};

export const canContinueSubscription = (subscription) => {
  return ![
    SubscriptionStatus.Signed,
    SubscriptionStatus.Approved,
    SubscriptionStatus.AwaitingLeverageApproval,
    SubscriptionStatus.SentToCountersigner,
    SubscriptionStatus.FullyExecuted,
  ].includes(subscription.status);
};

export const canCancelSubscription = (subscription) => {
  return ![
    SubscriptionStatus.SentToCountersigner,
    SubscriptionStatus.FullyExecuted,
  ].includes(subscription.status);
};
