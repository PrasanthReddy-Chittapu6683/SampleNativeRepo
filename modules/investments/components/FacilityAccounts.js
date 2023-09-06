import React, { useContext } from "react";
import Section from "../../../core/components/Section";
import { Heading, HStack, Square, Stack, Text } from "native-base";
import PlusIcon from "../../../core/images/PlusIcon";
import { UserContext } from "../../../core/contexts/UserContext";

const FacilityAccounts = (props) => {
  const { user } = useContext(UserContext);
  return (
    <Section
      title={"Facility Accounts"}
      cta={
        <HStack alignItems={"center"} space={2}>
          <PlusIcon />
          <Text variant={"subTitle"}>Top up account</Text>
        </HStack>
      }
      {...props}
    >
      <HStack space={4}>
        <Square
          size={"60px"}
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
          <Text variant={"subTitle"} fontSize={"sm"}>
            Tap for more information
          </Text>
        </Stack>
      </HStack>
    </Section>
  );
};

export default FacilityAccounts;
