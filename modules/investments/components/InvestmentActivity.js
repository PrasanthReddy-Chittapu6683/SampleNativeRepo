import React from "react";
import Section from "../../../core/components/Section";
import PropTypes from "prop-types";
import { getFundColors } from "../../funds/services/funds";
import { Heading, HStack, Text } from "native-base";
import { format } from "date-fns";

const InvestmentActivity = ({ fundStyle, ...props }) => {
  const { text } = getFundColors(fundStyle);
  const activity = [
    {
      label: "Capital Call (pending)",
      date: new Date("2023-07-23"),
      amount: "$10,000",
    },
  ];
  const columnWidths = ["50%", "25%"];

  return (
    <Section
      title={"Quarter-to-date activity"}
      subTitle={`As of 23/07/23`}
      titleProps={{
        color: text,
      }}
      {...props}
    >
      <HStack alignItems={"center"}>
        <Heading
          color={text}
          opacity={0.7}
          w={columnWidths[0]}
          size={"section"}
        >
          Activity
        </Heading>
        <Heading
          color={text}
          opacity={0.7}
          w={columnWidths[1]}
          size={"section"}
        >
          Date
        </Heading>
        <Heading color={text} opacity={0.7} size={"section"}>
          Amount
        </Heading>
      </HStack>
      {activity.map((item, i) => (
        <HStack alignItems={"center"} key={item.label}>
          <Text w={columnWidths[0]} color={text}>
            {item.label}
          </Text>
          <Text w={columnWidths[1]} color={text}>
            {format(item.date, "MMMM dd yyyy")}
          </Text>
          <Text color={text}>{item.amount}</Text>
        </HStack>
      ))}
    </Section>
  );
};

InvestmentActivity.propTypes = {
  fundStyle: PropTypes.object,
};

export default InvestmentActivity;
