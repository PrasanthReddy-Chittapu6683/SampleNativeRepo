import React from "react";
import Layout from "../../../core/components/Layout";
import { Box, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Section from "../../../core/components/Section";
import OpportunityTitle from "../../funds/components/OpportunityTitle";
import Document from "../../funds/components/Document";
import { getFundColors } from "../../funds/services/funds";

const InvestmentInvestorReportingScreen = () => {
  const navigation = useNavigation();
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
  const sections = [
    {
      title: "Investor Docs",
      documents: [
        {
          title: "K1",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "K1 estimates",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Capital account statement",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      title: "Fund docs",
      documents: [
        {
          title: "Investor letter",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: `${investment.fund.name} Subscription Doc`,
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "LPA",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      title: "News",
      documents: [
        {
          title: "Press release",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Press release 2",
          description: "Lorem ipsum dolor sit amet",
        },
        {
          title: "Press release 3",
          description: "Lorem ipsum dolor sit amet",
        },
      ],
    },
  ];
  const { text, bg } = getFundColors(investment.fund.style);

  return (
    <Layout showBackButton scroll title={"Investor Reporting"} bg={bg}>
      <Box pb={12}>
        <OpportunityTitle
          opportunityName={investment.opportunity.name}
          fundName={investment.fund.name}
          fundStyle={investment.fund.style}
          mb={8}
        />
        <VStack space={5}>
          {sections.map((section) => {
            return (
              <Section
                title={section.title}
                titleProps={{
                  color: text,
                }}
              >
                <VStack space={2}>
                  {section.documents.map((document) => {
                    return (
                      <Document
                        title={document.title}
                        description={document.description}
                        key={document.title}
                        textColor={text}
                      />
                    );
                  })}
                </VStack>
              </Section>
            );
          })}
        </VStack>
      </Box>
    </Layout>
  );
};

export default InvestmentInvestorReportingScreen;
