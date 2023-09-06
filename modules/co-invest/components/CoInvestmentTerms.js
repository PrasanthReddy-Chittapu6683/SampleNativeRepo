import React, { useContext, useState } from "react";
import { Box, Button, Checkbox, Divider, Heading, Text } from "native-base";
import Layout from "../../../core/components/Layout";
import { CoInvestContext } from "../contexts/CoInvestContext";

const CoInvestmentTerms = () => {
  const { nextStep } = useContext(CoInvestContext);
  const [checked, setChecked] = useState(false);
  return (
    <Layout showBackButton>
      <Box>
        <Heading size={"title2"} mb={4}>
          Unlock Investment
        </Heading>
        <Text>To unlock investment you need to the terms and NDA below.</Text>
        <Divider mt={10} mb={6} opacity={0.2}></Divider>
        <Box minH={"200px"}>
          <Text opacity={0.62}>
            Here are the terms of the NDA. This is just example text but it is
            here to give you an idea of the kinds of things a real user would
            see.
          </Text>
        </Box>
        <Divider mt={6} mb={8} opacity={0.2}></Divider>
        <Box>
          <Checkbox
            value={"agree"}
            isChecked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          >
            I agree to the terms and NDA
          </Checkbox>
        </Box>
      </Box>
      <Box pb={8}>
        <Button
          size={"page"}
          onPress={() => {
            nextStep();
          }}
          isDisabled={!checked}
        >
          Continue
        </Button>
      </Box>
    </Layout>
  );
};

export default CoInvestmentTerms;
