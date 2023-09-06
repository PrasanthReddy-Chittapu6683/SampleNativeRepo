import React, { useContext } from "react";
import { Heading } from "native-base";
import { FundContext } from "../contexts/FundContext";
import PropTypes from "prop-types";

const InvestHeading = ({ variant = "default", ...props }) => {
  const { fund } = useContext(FundContext);
  const color = fund?.style?.primaryColor?.main;
  const variantProps = {
    default: {},
    long: {
      letterSpacing: "0.5px",
      textTransform: "none",
    },
  };

  return (
    <Heading
      size={"title3"}
      color={color}
      {...variantProps[variant]}
      {...props}
    />
  );
};

InvestHeading.propTypes = {
  ...Heading.propTypes,
  variant: PropTypes.oneOf(["default", "long"]),
};

export default InvestHeading;
