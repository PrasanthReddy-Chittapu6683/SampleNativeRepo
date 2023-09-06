export const InvestPaymentMethod = {
  Cash: "cash",
  Leverage: "leverage",
};
export const InvestLeverageStep = {
  Landing: "leverage-landing",
  Details: "leverage-details",
  Documents: "leverage-documents",
  Offers: "leverage-offers",
  Summary: "leverage-summary",
};
export const InvestCashStep = {
  Landing: "cash-landing",
  Delegate: "delegate",
  Terms: "cash-terms",
  Pay: "cash-pay",
  Summary: "cash-summary",
};
export const investSteps = {
  [InvestPaymentMethod.Leverage]: [
    {
      name: InvestLeverageStep.Landing,
    },
    {
      name: InvestLeverageStep.Details,
    },
    {
      name: InvestLeverageStep.Documents,
    },
    {
      name: InvestLeverageStep.Offers,
    },
    {
      name: InvestLeverageStep.Summary,
    },
  ],
  [InvestPaymentMethod.Cash]: [
    {
      name: InvestCashStep.Landing,
    },
    {
      name: InvestCashStep.Delegate,
    },
    {
      name: InvestCashStep.Pay,
    },
    {
      name: InvestCashStep.Summary,
    },
  ],
};

export const EmploymentStatus = {
  FullTime: "FULL_TIME",
  PartTime: "PART_TIME",
};
