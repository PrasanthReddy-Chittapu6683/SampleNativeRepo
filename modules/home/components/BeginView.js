import React from "react";
import { Box, Center, Heading, Text } from "native-base";
import Logo from "../../../core/components/Logo";
import PageButton from "../../../core/components/PageButton";
import { useNavigation } from "@react-navigation/native";

const BeginView = (props) => {
  const navigation = useNavigation();
  return (
    <Box {...props}>
      <Box>
        <Center w={"100%"} h={"90%"}>
          <Box mb={10}>
            <Logo width={95} />
          </Box>
          <Heading size={"hero"} mb={6}>
            Welcome
          </Heading>
          <Text variant={"subTitle"} textAlign={"center"} mb={4}>
            You’re just a few steps away from having the ability to invest in
            your employers funds.
          </Text>
          <Text
            fontSize={"subTitle"}
            color={"white"}
            textAlign={"center"}
            _light={{
              color: "accent.500",
            }}
          >
            We can’t wait to have you on board.
          </Text>
        </Center>
      </Box>
      <PageButton
        mt={0}
        onPress={() => {
          navigation.push("Login");
        }}
      >
        Begin
      </PageButton>
    </Box>
  );
};

export default BeginView;
