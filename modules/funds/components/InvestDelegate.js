import React, { useContext, useState } from "react";
import InvestLayout from "./InvestLayout";
import { Box } from "native-base";
import InvestHeading from "./InvestHeading";
import RadioFormItem from "../../../core/components/RadioFormItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InvestContext } from "../contexts/InvestContext";
import { useApiRequest } from "../../../core/services/api";

const InvestDelegate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { subscription } = useContext(InvestContext);
  const [choice, setChoice] = useState("self");
  const [loading, setLoading] = useState(false);
  const post = useApiRequest("post");

  const choices = [
    {
      label: "I will complete it myself in the app",
      value: "self",
    },
    {
      label: "Send me an email to complete it somewhere else",
      value: "self-email",
    },
    {
      label: "I want someone else to complete it",
      value: "external",
    },
  ];
  return (
    <InvestLayout
      title={"Subscription"}
      buttonProps={{
        isLoading: loading,
      }}
      onNextPress={async (nextStep) => {
        if (choice === "self") {
          nextStep();
        }

        if (choice === "external") {
          navigation.push("InvestDelegateInput", route.params);
        }

        if (choice === "self-email") {
          setLoading(true);
          await post({
            url: `subscription/${subscription.id}/complete/web`,
          });
          navigation.push("InvestDelegateComplete", route.params);
        }
      }}
    >
      <Box px={"page"}>
        <InvestHeading mb={5} variant={"long"}>
          How would you like to complete the subscription documents?
        </InvestHeading>
        <RadioFormItem options={choices} value={choice} onSelect={setChoice} />
      </Box>
    </InvestLayout>
  );
};

export default InvestDelegate;
