import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Divider } from "native-base";
import FundsSection from "./FundsSection";
import { FundsContext } from "../contexts/FundsContext";
import { ApiState } from "../../../core/services/api";

const FundsScreen = () => {
  const { availableFunds, availableFundsLoading } = useContext(FundsContext);
  return (
    <Layout title={"Funds"} offsetSides={0} offsetBottom={8}>
      <Box>
        <FundsSection
          title={"Available Funds"}
          funds={availableFunds}
          isLoading={availableFundsLoading !== ApiState.Success}
          cta={""}
        />
        <Divider orientation={"horizontal"} my={6} />
        <FundsSection
          title={"Upcoming Funds"}
          funds={availableFunds}
          isLoading={availableFundsLoading !== ApiState.Success}
          cta={""}
        />
      </Box>
    </Layout>
  );
};

export default FundsScreen;
