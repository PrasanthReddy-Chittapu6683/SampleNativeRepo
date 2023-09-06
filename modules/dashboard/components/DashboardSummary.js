import React from "react";
import { HStack, Stack, Text } from "native-base";

const DashboardSummary = (props) => {
  const indicators = [
    {
      title: "NET MOIC",
      value: "2.2X",
    },
    {
      title: "NET IRR",
      value: "34.2%",
    },
  ];
  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"page"}
      {...props}
    >
      <Stack>
        <Text variant={"subTitle"}>Total portfolio</Text>
        <Text fontSize={"26px"}>102,324</Text>
      </Stack>
      <Stack>
        {indicators.map((indicator) => {
          return (
            <HStack key={indicator.title} space={1}>
              <Text fontSize={"15px"} color={"success.400"}>
                {indicator.value}
              </Text>
              <Text variant={"subTitle"} fontSize={"15px"}>
                {indicator.title}
              </Text>
            </HStack>
          );
        })}
      </Stack>
    </HStack>
  );
};

export default DashboardSummary;
