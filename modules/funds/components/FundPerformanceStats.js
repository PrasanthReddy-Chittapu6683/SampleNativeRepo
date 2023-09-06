import React from "react";
import { Box } from "native-base";
import Section from "../../../core/components/Section";
import Grid from "./Grid";
import StatBox from "../../../core/components/StatBox";

const FundPerformanceStats = (props) => {
  const sections = [
    {
      title: "Fund I",
      stats: [
        {
          label: "Gross MOIC",
          value: "2.4x",
        },
        {
          label: "Gross IRR",
          value: "47%",
        },
        {
          label: "Net MOIC",
          value: "2.0x",
        },
        {
          label: "Net IRR",
          value: "30.3%",
        },
        {
          label: "DPI",
          value: "1.06x",
        },
        {
          label: "Realized Value",
          value: "71%",
        },
      ],
    },
  ];
  return (
    <Box {...props}>
      {sections.map((section, i) => (
        <Section
          key={section.title}
          title={section.title}
          headingProps={{
            mb: 2,
          }}
        >
          <Grid
            columns={2}
            gap={3}
            items={section.stats.map((stat) => {
              return (
                <StatBox
                  label={stat.label}
                  labelProps={{
                    fontSize: "11px",
                  }}
                  value={stat.value}
                  valueProps={{
                    fontSize: "23px",
                  }}
                  w={"100%"}
                />
              );
            })}
          ></Grid>
        </Section>
      ))}
    </Box>
  );
};

export default FundPerformanceStats;
