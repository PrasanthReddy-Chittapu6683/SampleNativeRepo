import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Flex, Heading, Pressable, Text } from "native-base";
import { InvestPaymentMethod } from "../constants/invest";
import { FundContext } from "../contexts/FundContext";
import DollarIcon from "../../../core/images/DollarIcon";
import TrendIcon from "../../../core/images/TrendIcon";

const images = {
  [InvestPaymentMethod.Cash]: DollarIcon,
  [InvestPaymentMethod.Leverage]: TrendIcon,
};

const titles = {
  [InvestPaymentMethod.Cash]: "Cash",
  [InvestPaymentMethod.Leverage]: "Leveraged",
};

const descriptions = {
  [InvestPaymentMethod.Cash]: "Pay with bank or card transfer",
  [InvestPaymentMethod.Leverage]: "Pay with a leveraged loan",
};

const InvestPaymentOption = ({ isActive, method, ...props }) => {
  const { fund } = useContext(FundContext);
  const fundStyle = fund?.style;
  const textColor = fundStyle?.primaryColor?.main;
  const Img = images[method];
  return (
    <Pressable
      px={2}
      pt={6}
      pb={6}
      borderWidth={"1px"}
      borderColor={isActive ? "accent.325" : "accent.500"}
      rounded={"md"}
      opacity={isActive ? 1 : 0.5}
      _light={{
        borderColor: "accent.300",
      }}
      {...props}
    >
      <Flex
        alignItems={"center"}
        minH={"50px"}
        flexDirection={"column"}
        justifyContent={"center"}
        mb={2}
      >
        <Img fillColor={textColor} />
      </Flex>
      <Heading
        mb={2}
        textAlign={"center"}
        fontSize={"title3"}
        color={textColor}
      >
        {titles[method]}
      </Heading>
      <Text textAlign={"center"} color={textColor}>
        {descriptions[method]}
      </Text>
    </Pressable>
  );
};

InvestPaymentOption.propTypes = {
  ...Pressable.propTypes,
  isActive: PropTypes.bool,
  method: PropTypes.oneOf(Object.values(InvestPaymentMethod)),
};

export default InvestPaymentOption;
