import React from "react";
import InvestLayout from "./InvestLayout";
import InvestHeading from "./InvestHeading";
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";

const InvestDelegateComplete = () => {
  const navigation = useNavigation();
  return (
    <InvestLayout
      title={"Subscription"}
      buttonText={"Done"}
      onNextPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }],
        });
      }}
    >
      <Box px={"page"}>
        <InvestHeading>Email Sent</InvestHeading>
      </Box>
    </InvestLayout>
  );
};

export default InvestDelegateComplete;
