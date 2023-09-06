import React, { useContext, useState } from "react";
import InvestLayout from "./InvestLayout";
import { Box, Heading, Text, VStack } from "native-base";
import { useColor } from "../../../core/theme/colors";
import UnorderedList from "../../../core/components/UnorderedList";
import InvestHeading from "./InvestHeading";
import { FundContext } from "../contexts/FundContext";
import { InvestContext } from "../contexts/InvestContext";

const InvestLeverageLanding = () => {
  const [loading, setLoading] = useState(false);
  const { fund } = useContext(FundContext);
  const { subscribe } = useContext(InvestContext);
  const fundStyle = fund?.style;
  const textColor = fundStyle?.primaryColor?.main;
  const lineColor = useColor("borders.muted");

  return (
    <InvestLayout
      title={"Leverage Application"}
      buttonText={"Begin"}
      buttonProps={{
        isLoading: loading,
      }}
      onNextPress={async () => {
        setLoading(true);
        await subscribe();
      }}
    >
      <Box px={"page"}>
        <VStack space={5} mb={5}>
          <InvestHeading>Let's Begin</InvestHeading>
          <Text variant={"subTitle"} color={textColor}>
            Using leveraged finance to invest allows borrowers to keep hold of
            cash and maintain liquidity but still use their net worth to accrue
            returns. The loan will then be securitised against the investments
            made as part of the agreement.
          </Text>
          <Text variant={"subTitle"} color={textColor}>
            To utilise our leveraging services, please complete our eligibility
            application form to help us determine the amount we can lend you.
          </Text>
        </VStack>
        <Box
          borderRadius={"lg"}
          py={5}
          px={3}
          borderColor={lineColor}
          borderWidth={"1px"}
          mb={4}
        >
          <Heading size={"section"} mb={5} color={textColor}>
            What's Next?
          </Heading>
          <UnorderedList
            space={5}
            items={[
              "We will ask you a set of questions to help us better understand your financial situation and check your eligibility for borrowing funds.",
              "We will ask you a set of questions to help us better understand your financial situation",
            ]}
            textProps={{
              color: textColor,
            }}
          />
        </Box>
        <Box
          borderRadius={"lg"}
          py={5}
          px={3}
          borderColor={lineColor}
          borderWidth={"1px"}
        >
          <Heading size={"section"} mb={5} color={textColor}>
            What do I need?
          </Heading>
          <Text variant={"subTitle"} mb={5} color={textColor}>
            Please ensure you have the following documents to hand:
          </Text>
          <UnorderedList
            space={0}
            items={[
              "Bank statements (dated 3 months)",
              "Prior two years' W-2s and or K-1s",
              "Year to date pay stub",
            ]}
            textProps={{
              color: textColor,
            }}
          />
        </Box>
      </Box>
    </InvestLayout>
  );
};

export default InvestLeverageLanding;
