import React, { useContext } from "react";
import { Box, Button, Text } from "native-base";
import Layout from "../../../core/components/Layout";
import { CoInvestmentContext } from "../contexts/CoInvestmentContext";

const CoInvestmentInvest = () => {
  const { investment } = useContext(CoInvestmentContext);
  return (
    <Layout showBackButton>
      <Box>
        <Text>
          Here are some details on the {investment.name} that you have unlocked.
        </Text>
      </Box>
      <Box pb={8}>
        <Button size={"page"}>Invest</Button>
      </Box>
    </Layout>
  );
};

export default CoInvestmentInvest;
