import React, { useContext, useState } from "react";
import InvestLayout from "./InvestLayout";
import InvestHeading from "./InvestHeading";
import FormItem from "../../../core/components/FormItem";
import { isEmailValid } from "../../../core/services/forms";
import { api } from "../../../core/services/api";
import { InvestContext } from "../contexts/InvestContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box } from "native-base";

const InvestDelegateInput = () => {
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const { subscription } = useContext(InvestContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const isEmail = isEmailValid(email);

  const handleSend = async () => {
    await api.post({
      url: `subscription/${subscription.id}/delegate`,
      data: {
        email,
      },
    });
    navigation.push("InvestDelegateComplete", route.params);
  };

  return (
    <InvestLayout
      showBackButton
      avoidKeyboard
      title={"Subscription"}
      buttonText={"Send"}
      canNext={!!isEmail}
      onNextPress={() => {
        setLoading(true);
        handleSend();
      }}
      buttonProps={{
        isLoading: loading,
      }}
    >
      <Box px={"page"}>
        <InvestHeading mb={5} variant={"long"}>
          Enter the email of the person you want to complete the subscription
          documents
        </InvestHeading>
        <FormItem
          value={email}
          onChangeText={setEmail}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          autoComplete={"off"}
          placeholder={"Enter email address"}
        />
      </Box>
    </InvestLayout>
  );
};

export default InvestDelegateInput;
