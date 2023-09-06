import React from "react";
import PropTypes from "prop-types";
import { Box, Center, Heading, HStack, Stack, Text } from "native-base";
import { localizedCurrency } from "../../../core/services/numbers";
import { PieChart } from "react-native-chart-kit";
import { colors } from "../../../core/theme/colors";
import Section from "../../../core/components/Section";
import { getFundColors } from "../../funds/services/funds";

const InvestmentCommitmentChart = ({ fundStyle, ...props }) => {
  const total = 100000;
  const drawn = 50000;
  const undrawn = 40000;
  const data = [
    {
      name: "Drawn",
      value: drawn,
      color: "#4945B1",
    },
    {
      name: "Undrawn",
      value: undrawn,
      color: colors.accent[325],
    },
    {
      name: "Remaining",
      value: total - drawn - undrawn,
      color: colors.gray[200],
    },
  ];
  const { text } = getFundColors(fundStyle);
  return (
    <Box {...props}>
      <Stack space={1}>
        <Text variant={"subTitle"} mb={"-5px"} color={text}>
          Total commitment
        </Text>
        <HStack alignItems={"flex-end"}>
          <Text pb={"5.5px"} fontSize={"15px"} color={text}>
            $
          </Text>
          <Text fontSize={"28px"} color={text}>
            {localizedCurrency({
              currency: "USD",
              amount: total,
              hideSymbol: true,
            })}
          </Text>
        </HStack>
      </Stack>
      <Center>
        <PieChart
          data={data}
          width={168}
          height={168}
          chartConfig={{
            backgroundColor: "#1cc910",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="30"
          absolute //for the absolute number remove if you want percentage
          hasLegend={false}
        />
      </Center>
      <Section
        title={"Breakdown"}
        titleProps={{
          color: text,
        }}
      >
        <Stack space={2}>
          {data.map((stat, i) => {
            return (
              <HStack justifyContent={"space-between"} key={stat.name}>
                <HStack space={4} alignItems={"center"}>
                  <Box size={"14px"} bg={stat.color} />
                  <Text color={text} fontSize={"subTitle"}>
                    {stat.name}
                  </Text>
                </HStack>
                <Heading size={"section"} color={text}>
                  {localizedCurrency({ currency: "USD", amount: stat.value })}
                </Heading>
              </HStack>
            );
          })}
        </Stack>
      </Section>
    </Box>
  );
};

InvestmentCommitmentChart.propTypes = {
  fundStyle: PropTypes.object,
};

export default InvestmentCommitmentChart;
