import React, { useContext } from "react";
import Section from "../../../core/components/Section";
import PlusIcon from "../../../core/images/PlusIcon";
import {
  Divider,
  Heading,
  HStack,
  Square,
  Stack,
  Text,
  VStack,
} from "native-base";
import { UserContext } from "../../../core/contexts/UserContext";
import CurrencyText from "../../../core/components/CurrencyText";

const CheckingAccounts = (props) => {
  const { user } = useContext(UserContext);
  const accounts = [
    {
      id: 1,
      amount: "10,000.00",
    },
    {
      id: 2,
      amount: "12,000.00",
    },
  ];

  return (
    <Section
      title={"Checking Accounts"}
      cta={
        <HStack alignItems={"center"} space={2}>
          <PlusIcon />
          <Text variant={"subTitle"}>Connect new</Text>
        </HStack>
      }
      {...props}
    >
      <VStack divider={<Divider />} space={4}>
        {accounts.map((account) => (
          <HStack
            justifyContent={"space-between"}
            alignItems={"center"}
            key={account.id}
          >
            <HStack space={4}>
              <Square
                size={"40px"}
                bg={"white"}
                _light={{
                  bg: "accent.500",
                }}
              />
              <Stack space={1}>
                <Heading size={"sm"}>
                  {user.last_name}, {user.first_name}
                </Heading>
                <Text variant={"subTitle"}>********4375 - 40-14-15</Text>
              </Stack>
            </HStack>
            <Stack>
              <CurrencyText amount={account.amount} currency={"USD"} />
              <Text variant={"subTitle"}>Updated an hour ago</Text>
            </Stack>
          </HStack>
        ))}
      </VStack>
    </Section>
  );
};

export default CheckingAccounts;
