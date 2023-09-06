import React, { useContext } from "react";
import Layout from "../../../core/components/Layout";
import { Box, Heading, HStack, ScrollView, Text, VStack } from "native-base";
import FundTease from "../../funds/components/FundTease";
import { CoInvestmentsContext } from "../contexts/CoInvestmentsContext";
import { useNavigation } from "@react-navigation/native";
import { CoInvestStep } from "../contexts/CoInvestContext";

const CoInvestmentsScreen = () => {
  const { investments } = useContext(CoInvestmentsContext);
  const navigation = useNavigation();
  return (
    <Layout showBackButton>
      <Box>
        <Heading size={"title2"} mb={4}>
          Co-Investments
        </Heading>
        <Text variant={"subTitle"} mb={6}>
          Co-Investments allow you to get in early and invest with us directly
          on opportunities.
        </Text>
        <Box mb={6}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HStack space={4} py={4}>
              <Box bg={"accent.500"} py={3} px={5}>
                <Text variant={"bold"} fontSize={"lg"}>
                  Latest
                </Text>
              </Box>
              <Box py={3} px={5} borderWidth={"1px"} borderColor={"accent.500"}>
                <Text variant={"bold"} fontSize={"lg"}>
                  Coming Soon
                </Text>
              </Box>
              <Box py={3} px={5} borderWidth={"1px"} borderColor={"accent.500"}>
                <Text variant={"bold"} fontSize={"lg"}>
                  Fintechs
                </Text>
              </Box>
              <Box py={3} px={5} borderWidth={"1px"} borderColor={"accent.500"}>
                <Text variant={"bold"} fontSize={"lg"}>
                  Latest
                </Text>
              </Box>
            </HStack>
          </ScrollView>
        </Box>
        <VStack space={6}>
          {investments.map((investment) => (
            <FundTease
              key={investment.id}
              fund={investment}
              onPress={() =>
                navigation.push("Co-Investment", {
                  investmentId: investment.id,
                  screen: "Co-Investment-" + CoInvestStep.Landing,
                })
              }
            />
          ))}
        </VStack>
      </Box>
    </Layout>
  );
};

export default CoInvestmentsScreen;
