import React from "react";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useTheme,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Touchable from "../../../core/components/Touchable";

const DashboardMyPortfolio = (props) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Touchable onPress={() => navigation.navigate("DashboardPortfolioModal")}>
      <Box px={"page"} {...props}>
        <Box p={2} bg={colors.gradients[800]} rounded={"md"}>
          <Box variant={"outlined"}>
            <HStack h={"93px"}>
              <Center p={8}>
                <Heading size={"section"} color={"white"}>
                  My Portfolio
                </Heading>
              </Center>
              <Divider orientation={"vertical"} />
              <Center p={8}>
                <Stack>
                  <Text color={"white"} fontSize={"21px"}>
                    $102,323
                  </Text>
                  <Text color={"success.400"}>2.2X 34.2%</Text>
                </Stack>
              </Center>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Touchable>
  );
};

export default DashboardMyPortfolio;
