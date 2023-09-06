import React from "react";
import PropTypes from "prop-types";
import { Heading, VStack } from "native-base";
import { getFundColors } from "../services/funds";

const OpportunityTitle = ({
  fundName,
  opportunityName,
  fundStyle,
  ...props
}) => {
  const { text: textColor } = getFundColors(fundStyle);
  return (
    <VStack space={1} {...props}>
      <Heading
        size={"title"}
        color={textColor}
        textTransform={"none"}
        letterSpacing={"0"}
      >
        {fundName}
      </Heading>
      <Heading size={"sm"} color={textColor}>
        {opportunityName}
      </Heading>
    </VStack>
  );
};

OpportunityTitle.propTypes = {
  fundName: PropTypes.string,
  opportunityName: PropTypes.string,
  fundStyle: PropTypes.object,
};

export default OpportunityTitle;
