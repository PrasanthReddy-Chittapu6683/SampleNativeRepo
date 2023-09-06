import React, { useContext } from "react";
import { Box, Heading, Text, VStack } from "native-base";
import Layout from "../../../core/components/Layout";
import { FundContext } from "../contexts/FundContext";
import PageButton from "../../../core/components/PageButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { InvestPaymentMethod } from "../constants/invest";
import LunaIcon from "../../../core/images/LunaIcon";

const InvestChooseLeverage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { fund } = useContext(FundContext);
  const fundStyle = fund?.style || {};
  const textColor = fundStyle?.primaryColor?.main;

  const sharedButtonProps = {
    _text: {
      color: textColor,
      _light: {
        color: textColor,
      },
    },
  };
  const nextProps = {
    ...route.params,
  };

  return (
    <Layout
      showBackButton
      bg={fundStyle.backgroundColor}
      _dark={{
        bg: fundStyle.backgroundColor,
      }}
    >
      <Box>
        <Heading size={"title3"} color={textColor} mb={2}>
          Are you Interested in leverage?
        </Heading>
        <VStack alignItems={"center"}>
          <LunaIcon height={70} />
          <Text color={textColor} variant={"subTitle"} mt={-4}>
            Credit services provided by Luna Finance
          </Text>
        </VStack>
      </Box>
      <VStack space={4}>
        <PageButton
          pb={0}
          onPress={() => {
            navigation.push("Invest", {
              ...nextProps,
              paymentMethod: InvestPaymentMethod.Leverage,
            });
          }}
          buttonProps={{
            ...sharedButtonProps,
          }}
        >
          Apply for leverage
        </PageButton>
        <PageButton
          mt={0}
          onPress={() => {
            navigation.push("Invest", {
              ...nextProps,
              paymentMethod: InvestPaymentMethod.Cash,
            });
          }}
          buttonProps={{
            borderWidth: 0,
            ...sharedButtonProps,
          }}
        >
          Continue without leverage
        </PageButton>
      </VStack>
    </Layout>
  );
};

export default InvestChooseLeverage;
