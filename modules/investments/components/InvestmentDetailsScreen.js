import React from "react";
import Layout from "../../../core/components/Layout";
import OpportunityTitle from "../../funds/components/OpportunityTitle";
import { Box, Button, Text } from "native-base";
import InvestmentCommitmentChart from "./InvestmentCommitmentChart";
import InvestmentMetrics from "./InvestmentMetrics";
import InvestmentExtras from "./InvestmentExtras";
import { getFundColors } from "../../funds/services/funds";
import Section from "../../../core/components/Section";
import InvestmentActivity from "./InvestmentActivity";
import InvestmentTimeline from "./InvestmentTimeline";

const InvestmentDetailsScreen = () => {
  const fundStyle = {
    primaryColor: {
      main: "#ffffff",
    },
    backgroundColor: "#000000",
  };
  const { text, bg } = getFundColors(fundStyle);

  return (
    <Layout
      title={"Investment Details"}
      titleProps={{
        color: text,
      }}
      bg={bg}
      _dark={{
        bg,
      }}
      scroll
      offsetSides={0}
      showBackButton
    >
      <Box px={"page"} pb={10}>
        <OpportunityTitle
          opportunityName={"Investment 1"}
          fundName={"Motive Capital Fund II"}
          fundStyle={fundStyle}
          mb={6}
        />
        <InvestmentCommitmentChart fundStyle={fundStyle} mb={10} />
        <InvestmentMetrics fundStyle={fundStyle} mb={10} />
        <InvestmentActivity mb={10} fundStyle={fundStyle} />
        <InvestmentTimeline mb={8} fundStyle={fundStyle} />
        <InvestmentExtras mb={8} px={0} fundStyle={fundStyle} />
        <Section title={"Fund objective"} titleProps={{ color: text }} mb={10}>
          <Text color={text}>
            To make buyout and growth equity investments in technology-enabled
            financial and business services companies serving the financial and
            business services sectors in respect of which it can exercise
            control and/or significant influence, generally headquartered in
            North America and Europe
          </Text>
        </Section>
        <Button>See Fund Details</Button>
      </Box>
    </Layout>
  );
};

export default InvestmentDetailsScreen;
