import React from "react";
import PropTypes from "prop-types";
import { HStack, Text } from "native-base";

const symbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  AUD: "$",
  CAD: "$",
};

const CurrencyText = ({ currency, amount, size = "md", ...props }) => {
  const fontSizes = {
    md: {
      symbol: "14px",
      amount: "24px",
    },
    lg: {
      symbol: "16px",
      amount: "26px",
    },
  };
  const heights = {
    md: "31px",
    lg: "35px",
  };
  const fontSize = fontSizes[size];
  const height = heights[size];
  const symbol = symbols[currency];

  return (
    <HStack space={1} alignItems={"flex-end"} {...props}>
      <Text fontSize={fontSize.symbol}>{symbol}</Text>
      <Text fontSize={fontSize.amount} h={height}>
        {amount}
      </Text>
    </HStack>
  );
};

CurrencyText.propTypes = {
  ...HStack.propTypes,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["md", "lg"]),
};

export default CurrencyText;
