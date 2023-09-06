import React, { useContext } from "react";
import { Box, Button, Divider, Spinner, Text } from "native-base";
import Layout from "../../../core/components/Layout";
import { FundContext } from "../contexts/FundContext";
import FundTease from "./FundTease";
import { useNavigation } from "@react-navigation/native";
import { ApiState } from "../../../core/services/api";

const FundScreen = () => {
  const { fund, fundLoading } = useContext(FundContext);
  const navigation = useNavigation();
  return (
    <Layout
      showBackButton
      _light={{
        bg: "black",
      }}
      _dark={{
        bg: "black",
      }}
    >
      {(fundLoading !== ApiState.Success && !fund?.id && (
        <Spinner size={"lg"} testID={"loading-spinner"} color={"white"} />
      )) || (
        <>
          <Box mb={8}>
            <FundTease fund={fund} />
            <Divider my={"50px"} opacity={0.2} />
            <Text>{fund.description}</Text>
          </Box>
          <Box pb={8}>
            <Button
              size={"page"}
              bg={"white"}
              _text={{
                color: "black",
              }}
              onPress={() =>
                navigation.push("InvestAmount", {
                  fundId: fund.id,
                })
              }
            >
              Invest
            </Button>
          </Box>
        </>
      )}
    </Layout>
  );
};

export default FundScreen;
