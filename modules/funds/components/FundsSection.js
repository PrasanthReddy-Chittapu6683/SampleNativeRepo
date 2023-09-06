import React from "react";
import PropTypes from "prop-types";
import { FundPropType } from "../constants/funds";
import { Box, Spinner, Text } from "native-base";
import Section from "../../../core/components/Section";
import FundsList from "./FundsList";

const FundsSection = ({ title, subTitle, isLoading, funds, ...props }) => {
  return (
    <Section
      title={title}
      cta={"See all"}
      headingProps={{
        px: "page",
        mb: subTitle ? 3 : 5,
      }}
      {...props}
    >
      {isLoading && !funds && <Spinner size={"lg"} my={5} />}
      {!isLoading && funds && subTitle && (
        <Text variant={"subTitle"} mb={5} px={"page"}>
          {subTitle}
        </Text>
      )}
      <FundsList funds={funds} />
    </Section>
  );
};

FundsSection.propTypes = {
  ...Box.propTypes,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isLoading: PropTypes.bool,
  funds: PropTypes.arrayOf(PropTypes.shape(FundPropType)),
};

export default FundsSection;
