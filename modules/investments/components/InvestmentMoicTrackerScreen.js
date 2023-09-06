import React from "react";
import { formatCurrency } from "../../../core/services/numbers";
import Layout from "../../../core/components/Layout";
import OpportunityTitle from "../../funds/components/OpportunityTitle";
import Section from "../../../core/components/Section";
import { Box, Divider, Heading, HStack, Text, VStack } from "native-base";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { colors } from "../../../core/theme/colors";
import { getFundColors } from "../../funds/services/funds";

const InvestmentMoicTrackerScreen = () => {
  const investment = {
    opportunity: {
      name: "Investment 1",
    },
    fund: {
      name: "Motive Capital Fund II",
      style: {
        primaryColor: {
          main: "#ffffff",
        },
        backgroundColor: "#000000",
      },
    },
  };
  const stats = [
    {
      label: "Initial Commitment",
      value: formatCurrency("USD", 50000, true, 0),
    },
    {
      label: "Fund Tenure",
      value: "10 years",
    },
    {
      label: "Target gross MOIC",
      value: "2.5x",
    },
  ];
  const chartData = {
    labels: ["3Q 21", "4Q 21", "1Q 22", "2Q 22", "3Q 22", "4Q 22"],
    datasets: [
      {
        data: [1, 1.1, 1.4, 1.6, 1.8, 2.1, 2.4],
        color: (opacity = 1) => colors.accent[325],
        strokeWidth: 1,
      },
    ],
    legend: [],
  };
  const { text, bg } = getFundColors(investment.fund.style);

  return (
    <Layout
      titleProps={{
        color: text,
      }}
      bg={bg}
      _dark={{
        bg,
      }}
      showBackButton
      title={"Gross MOIC Tracker"}
      offsetSides={0}
    >
      <Box pb={12}>
        <Box px={"page"}>
          <OpportunityTitle
            fundStyle={investment.fund.style}
            fundName={investment.fund.name}
            opportunityName={investment.opportunity.name}
            mb={6}
          />
          <Section title={"Investment Details"} titleProps={{ color: text }}>
            <HStack space={3} divider={<Divider />} alignItems={"flex-start"}>
              {stats.map(({ label, value }) => (
                <VStack
                  key={label}
                  w={"29%"}
                  justifyContent={"space-between"}
                  py={2}
                  h={"80px"}
                >
                  <Heading
                    size={"section"}
                    letterSpacing={1}
                    opacity={0.7}
                    color={text}
                  >
                    {label}
                  </Heading>
                  <Text fontSize={"title2"} color={text}>
                    {value}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </Section>
        </Box>
        <Divider my={6} />
        <Section
          title={"MOIC Tracker"}
          titleProps={{
            color: text,
          }}
          headingProps={{
            px: "page",
          }}
          mb={6}
        >
          <Text px={"page"} mb={"-20px"} opacity={0.5}>
            MOIC
          </Text>
          <LineChart
            data={chartData}
            width={Dimensions.get("window").width - 20}
            height={180}
            yAxisSuffix={"x"}
            renderDotContent={({ x, y, indexData }) => {
              return (
                <Box
                  position={"absolute"}
                  top={`${y}px`}
                  left={`${x - 12.5}px`}
                  w={"25px"}
                  key={x + y + indexData}
                >
                  <Text textAlign={"center"} color={text}>
                    {indexData}x
                  </Text>
                </Box>
              );
            }}
            chartConfig={{
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientFromOpacity: 0,
              backgroundGradientTo: "#efefef",
              backgroundGradientToOpacity: 0,
              fillShadowGradientFrom: colors.accent[325],
              fillShadowGradientFromOpacity: 0.1,
              fillShadowGradientTo: colors.accent[325],
              fillShadowGradientToOpacity: 0,
              decimalPlaces: 2,
              color: (opacity = 1) => text,
              propsForBackgroundLines: {
                opacity: 0.1,
                strokeWidth: 1,
                strokeDashArray: "",
              },
            }}
          />
        </Section>
        <Box px={"page"}>
          <Box
            p={"page"}
            borderWidth={"1px"}
            borderColor={"accent.475"}
            borderRadius={"md"}
          >
            <Text variant={"subTitle"} fontSize={"section"} mb={4} color={text}>
              As of 1Q21, Motive held its investment in LPA at 1.6x Gross MOIC,
              however, Motive provided a bridge loan which brought the Gross
              MOIC to 1.5x.
            </Text>
            <Text variant={"subTitle"} fontSize={"section"} color={text}>
              LPA repaid the bridge loan in 3Q21, which brought the Gross MOIC
              back to 1.6x.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default InvestmentMoicTrackerScreen;
