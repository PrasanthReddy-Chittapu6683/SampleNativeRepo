import React from "react";
import LinksSection from "../../../core/components/LinksSection";
import PaperIcon2 from "../../../core/images/PaperIcon2";
import PaperIcon1 from "../../../core/images/PaperIcon1";
import PropTypes from "prop-types";
import { getFundColors } from "../../funds/services/funds";

const InvestmentExtras = ({ fundStyle, ...props }) => {
  const links = [
    {
      title: "MOIC tracker",
      url: "InvestmentMoicTracker",
      icon: <PaperIcon2 />,
    },
    {
      title: "Investor reporting",
      url: "InvestmentInvestorReporting",
      icon: <PaperIcon1 />,
    },
  ];
  const { text: textColor } = getFundColors(fundStyle);

  return (
    <LinksSection
      title={"Fund Extras"}
      links={links}
      titleColor={textColor}
      {...props}
    />
  );
};

InvestmentExtras.propTypes = {
  fundStyle: PropTypes.object,
};

export default InvestmentExtras;
