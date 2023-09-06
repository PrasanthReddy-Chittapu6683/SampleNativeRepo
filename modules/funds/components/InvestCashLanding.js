import React, { useContext, useState } from "react";
import InvestLayout from "./InvestLayout";
import { Box, Heading, Text, useToast, VStack } from "native-base";
import UnorderedList from "../../../core/components/UnorderedList";
import { useColor } from "../../../core/theme/colors";
import InvestHeading from "./InvestHeading";
import { useRoute } from "@react-navigation/native";
import { localizedCurrency } from "../../../core/services/numbers";
import { FundContext } from "../contexts/FundContext";
import { InvestContext } from "../contexts/InvestContext";
import { catchify } from "../../../core/services/promises";
import { baseToastProps } from "../../../core/constants/errors";

const InvestCashLanding = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { fund } = useContext(FundContext);
  const { subscribe } = useContext(InvestContext);
  const route = useRoute();
  const { investAmount } = route.params;
  const lineColor = useColor("borders.muted");
  const textColor = fund?.style?.primaryColor?.main;

  return (
    <InvestLayout
      title={"Subscription"}
      buttonText={"Begin"}
      buttonProps={{
        isLoading: loading,
      }}
      onNextPress={async () => {
        setLoading(true);
        const [err] = await catchify(subscribe());

        if (err) {
          toast.show({
            ...baseToastProps,
            title: "Network error, please try again",
          });
          setLoading(false);
        }
      }}
    >
      <Box px={"page"}>
        <VStack space={5} mb={5}>
          <InvestHeading>Let's Begin</InvestHeading>
          <Text variant={"subTitle"} color={textColor}>
            You are committing{" "}
            {localizedCurrency({ currency: "USD", amount: investAmount })}
          </Text>
        </VStack>
        <Box
          borderRadius={"lg"}
          py={5}
          px={3}
          borderColor={lineColor}
          borderWidth={"1px"}
          mb={4}
        >
          <Heading size={"section"} mb={5} color={textColor}>
            What's Next?
          </Heading>
          <UnorderedList
            textProps={{
              color: textColor,
            }}
            space={2}
            items={[
              "Choose who will complete the subscription",
              "Read and agree to the terms and conditions",
              "Complete your subscription documentation",
            ]}
          />
        </Box>
      </Box>
    </InvestLayout>
  );
};

export default InvestCashLanding;
