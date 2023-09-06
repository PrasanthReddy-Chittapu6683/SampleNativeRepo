import React from "react";
import StatsSection from "../../../core/components/StatsSection";
import { localizedCurrency } from "../../../core/services/numbers";
import PropTypes from "prop-types";
import { getFundColors } from "../../funds/services/funds";
import { Box } from "native-base";

const InvestmentMetrics = ({ fundStyle, ...props }) => {
  const stats1 = [
    {
      label: "New NAV",
      value: localizedCurrency({ currency: "USD", amount: 107581 }),
    },
    {
      label: "NET MOIC",
      value: "2X",
    },
    {
      label: "NET IRR",
      value: "25%",
    },
  ];
  const stats2 = [
    {
      label: "DPI",
      value: 0.551,
    },
    {
      label: "Distributions Received",
      value: localizedCurrency({ currency: "USD", amount: 27581 }),
    },
  ];

  const { text: textColor } = getFundColors(fundStyle);

  return (
    <Box {...props}>
      <StatsSection
        title={"Quarterly Metrics"}
        stats={stats1}
        statTextColor={textColor}
        date={new Date("2023-01-02")}
        mb={1}
      ></StatsSection>
      <StatsSection
        stats={stats2}
        statTextColor={textColor}
        date={new Date("2023-06-07")}
      />
    </Box>
  );
};

InvestmentMetrics.propTypes = {
  fundStyle: PropTypes.object,
};

export default InvestmentMetrics;
