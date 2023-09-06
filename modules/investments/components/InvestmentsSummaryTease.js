import React, { useContext } from "react";
import { Box, Center, Divider, HStack, Text, VStack } from "native-base";
import { colors } from "../../../core/theme/colors";
import { InvestmentsContext } from "../contexts/InvestmentsContext";
import { localizedCurrency } from "../../../core/services/numbers";
import TapIcon from "../../../core/images/TapIcon";

const InvestmentsSummaryTease = (props) => {
  const { investments } = useContext(InvestmentsContext);
  const [totalAmount, totalMoic, totalDpi] = investments.reduce(
    (acc, { amount, moic, dpi }) => [
      acc[0] + amount,
      acc[1] + moic,
      acc[2] + dpi,
    ],
    [0, 0, 0]
  );
  const stats = [
    {
      title: "Net MOIC",
      value: Number(totalMoic?.toFixed?.(1)),
      affix: "x",
    },
    {
      title: "DPI",
      value: Number(totalDpi?.toFixed?.(1)),
    },
  ];
  return (
    <VStack space={4} px={"page"} {...props}>
      <Box
        borderWidth={"1px"}
        borderColor={"accent.525"}
        bg={"accent.350"}
        borderRadius={"sm"}
        py={1}
      >
        <HStack divider={<Divider />}>
          <VStack space={2} w={"65%"} py={3} px={4}>
            <Text variant={"subTitle"} mb={"-5px"} color={"white"}>
              Aggregated Investments NAV
            </Text>
            <Text color={"accent.200"}>Quarterly as of 07/06/23</Text>
            <Text fontSize={"38px"} color={"white"}>
              {localizedCurrency({ currency: "USD", amount: totalAmount })}
            </Text>
          </VStack>
          <Center w={"35%"}>
            <VStack space={2}>
              {stats.map(({ title, value, affix }) => (
                <VStack key={title}>
                  <Text fontSize={"title2"} color={"accentSecondary.300"}>
                    {value ? value + `${affix || ""}` : "-"}
                  </Text>
                  <Text
                    textTransform={"uppercase"}
                    color={"accent.200"}
                    fontSize={"subTitle"}
                  >
                    {title}
                  </Text>
                </VStack>
              ))}
            </VStack>
          </Center>
        </HStack>
      </Box>
      {investments?.map?.((investment) => {
        const investmentStats = [
          {
            title: "Net MOIC",
            value: investment.moic,
            affix: "x",
          },
          {
            title: "DPI",
            value: investment.dpi,
          },
        ];
        return (
          <Box
            key={investment.id}
            borderWidth={"1px"}
            borderColor={"rgba(89, 62, 168, 0.7)"}
            py={1}
            rounded={"sm"}
            bg={colors.gradients[850]}
          >
            <HStack divider={<Divider />}>
              <VStack space={2} w={"65%"} py={3} px={4}>
                <Text variant={"subTitle"}>{investment.fund.name}</Text>
                <Text fontSize={"title"}>
                  {localizedCurrency({
                    currency: "USD",
                    amount: investment.amount,
                  })}
                </Text>
                <HStack space={2}>
                  <TapIcon width={11} height={11} />
                  <Text
                    fontSize={"xs"}
                    textTransform={"uppercase"}
                    letterSpacing={"1px"}
                  >
                    Tap for details
                  </Text>
                </HStack>
              </VStack>
              <Center w={"35%"}>
                <VStack space={1}>
                  {investmentStats.map(({ title, value, affix }) => (
                    <VStack key={title}>
                      <Text
                        fontSize={"title3"}
                        color={value ? "accentSecondary.300" : ""}
                      >
                        {value + `${affix || ""}`}
                      </Text>
                      <Text
                        textTransform={"uppercase"}
                        color={"accent.200"}
                        fontSize={"sm"}
                      >
                        {title}
                      </Text>
                    </VStack>
                  ))}
                </VStack>
              </Center>
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};

export default InvestmentsSummaryTease;
