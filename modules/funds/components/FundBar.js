import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, VStack } from "native-base";

const FundBar = ({
  name,
  originalAmount,
  gainedAmount,
  barHeight,
  ...props
}) => {
  const gainedPercent = (gainedAmount / originalAmount) * 100;

  return (
    <Box w={70} {...props}>
      <VStack alignItems={"center"}>
        <VStack
          h={barHeight}
          space={0}
          w={35}
          mb={2}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box bg={"accent.200"} h={`${gainedPercent}%`}></Box>
          <Box bg={"accent.500"} h={`${100 - gainedPercent}%`}></Box>
        </VStack>
        <Heading>{name}</Heading>
      </VStack>
    </Box>
  );
};

FundBar.propTypes = {
  name: PropTypes.string,
  originalAmount: PropTypes.number,
  gainedAmount: PropTypes.number,
  barHeight: PropTypes.number,
  ...Box.propTypes,
};

export default FundBar;
