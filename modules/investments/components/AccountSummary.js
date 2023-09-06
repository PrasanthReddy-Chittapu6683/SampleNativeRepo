import React from "react";
import { HStack, Stack, Text } from "native-base";
import Section from "../../../core/components/Section";
import PlusIcon from "../../../core/images/PlusIcon";
import CurrencyText from "../../../core/components/CurrencyText";

const AccountSummary = (props) => {
  const data = [
    {
      label: "Checking account",
      value: "20,000.00",
    },
    {
      label: "FRB account balance",
      value: "41,000.00",
    },
  ];

  return (
    <Section
      title={"Account Summary"}
      cta={
        <HStack alignItems={"center"} space={2}>
          <PlusIcon />
          <Text variant={"subTitle"}>New facility</Text>
        </HStack>
      }
      {...props}
    >
      <HStack space={8}>
        {data.map((item) => {
          return (
            <Stack space={1} key={item.label}>
              <Text variant={"subTitle"} fontSize={"12px"}>
                {item.label}
              </Text>
              <CurrencyText amount={item.value} currency={"USD"} size={"lg"} />
            </Stack>
          );
        })}
      </HStack>
    </Section>
  );
};

export default AccountSummary;
