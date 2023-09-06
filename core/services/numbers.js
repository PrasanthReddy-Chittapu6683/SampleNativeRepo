import { isAndroid } from "./platform";
import { isNil } from "ramda";

const CURRENCIES = {
  USD: "$",
  GBP: "£",
  EUR: "€",
};

export const thousandsMillionsFormatter = (num, decimals = 2) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(decimals) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + "B"; // convert to B for number from > 1 billion
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(decimals) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const formatCurrency = (currency, amount, textual, decimals = 2) => {
  const currencySymbol = CURRENCIES[currency] || "$";

  if (textual) {
    return `${currencySymbol}${thousandsMillionsFormatter(amount, decimals)}`;
  }

  return `${Number(amount).toFixed(decimals)}`;
};

export const localizedCurrency = ({
  currency,
  amount,
  hideSymbol,
  decimalPlaces,
}) => {
  const options = {
    currency,
  };

  if (!isAndroid) {
    options.maximumFractionDigits = decimalPlaces || 0;
  }

  if (!hideSymbol) {
    options.style = "currency";
  }

  const value = new Intl.NumberFormat("en-US", options).format(amount || 0);

  if (isAndroid) {
    const parts = value.split(".");

    if (!isNil(decimalPlaces) && parts.length > 1) {
      return `${parts[0]}.${parts[1].slice(0, decimalPlaces)}`;
    }

    return parts[0];
  }

  return value;
};
