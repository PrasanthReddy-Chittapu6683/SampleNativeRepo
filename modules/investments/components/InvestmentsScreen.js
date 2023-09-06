import React from "react";
import Layout from "../../../core/components/Layout";
import { Box } from "native-base";
import Section from "../../../core/components/Section";
import InvestmentCard from "./InvestmentCard";

const InvestmentsScreen = () => {
  const investments = [
    {
      id: 1,
      opportunity: {
        name: "Investment 1",
        description:
          "Motive Partners’ focused investment strategy leverages the strengths of the Motive Partners team and integrated model of bringing deep investing",
      },
      fund: {
        name: "Motive Capital Fund II",
      },
    },
  ];
  return (
    <Layout title={"Investments"} offsetSides={0} offsetBottom={8}>
      <Box px={"page"}>
        <Section px={0} title={"My Investments"}>
          {investments.map((investment) => {
            return (
              <InvestmentCard investment={investment} key={investment.id} />
            );
          })}
        </Section>
      </Box>
    </Layout>
  );
};

export default InvestmentsScreen;
