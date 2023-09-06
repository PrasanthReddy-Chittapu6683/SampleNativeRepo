import React from "react";
import {
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useTheme,
  VStack,
} from "native-base";
import DistributionIcon from "../../../core/images/DistributionIcon";

const DashboardDistributions = () => {
  const { colors } = useTheme();
  const distributions = [
    {
      description:
        "A distribution from Fund X has been deposited to your account (********4375) on 05/05/2023",
      amount: "$5,000",
    },
  ];
  return (
    <Stack px={"page"}>
      {distributions.map((distribution) => (
        <VStack
          px={4}
          py={8}
          key={distribution.description}
          space={4}
          bg={colors.gradients[800]}
          rounded={"md"}
        >
          <Heading size={"section"} color={"accent.100"}>
            Distribution Issued
          </Heading>
          <Text variant={"subTitle"} color={"accent.200"}>
            {distribution.description}
          </Text>
          <Divider backgroundColor={"white"} />
          <HStack alignItems={"center"} space={4}>
            <DistributionIcon width={15} />
            <Stack>
              <Text variant={"subTitle"} color={"accent.200"}>
                Net distribution amount
              </Text>
              <Text fontSize={"title"} color={"white"}>
                {distribution.amount}
              </Text>
            </Stack>
          </HStack>
        </VStack>
      ))}
    </Stack>
  );
};

export default DashboardDistributions;
