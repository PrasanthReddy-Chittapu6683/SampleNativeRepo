import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import FundTease from "../../funds/components/FundTease";
import { CoInvestmentContext } from "../contexts/CoInvestmentContext";
import { Box, Button, Text } from "native-base";
import { CoInvestContext } from "../contexts/CoInvestContext";

const CoInvestmentLanding = () => {
  const { investment } = useContext(CoInvestmentContext);
  const { nextStep } = useContext(CoInvestContext);

  return (
    <Layout showBackButton>
      <FundTease
        fund={investment}
        afterFund={() => {
          return <Text mt={8}>{investment.description}</Text>;
        }}
      />
      <Box pb={8}>
        <Button
          size={"page"}
          onPress={() => {
            nextStep();
          }}
        >
          Unlock
        </Button>
      </Box>
    </Layout>
  );
};

export default CoInvestmentLanding;
