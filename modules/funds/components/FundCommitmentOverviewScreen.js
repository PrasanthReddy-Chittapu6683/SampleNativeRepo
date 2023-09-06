import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { useNavigation } from "@react-navigation/native";
import { FundContext } from "../contexts/FundContext";
import { Box, Heading } from "native-base";
import { goBack } from "../../../core/services/navigation";

const FundCommitmentOverviewScreen = () => {
  const navigation = useNavigation();
  const { fund } = useContext(FundContext);
  return (
    <Layout
      showBackButton
      scroll
      onBackPress={() => {
        goBack();
        navigation.push("FundModal", {
          fundId: fund.id,
          fundStyle: fund.style,
        });
      }}
    >
      <Box pb={12}>
        <Heading size={"title3"} mb={6}>
          Commitment Overview
        </Heading>
      </Box>
    </Layout>
  );
};

export default FundCommitmentOverviewScreen;
