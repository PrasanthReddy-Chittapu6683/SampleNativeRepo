import React from "react";
import FundBar from "./FundBar";
import { Box, HStack, Text } from "native-base";
import EventTease from "../../events/components/EventTease";
import { addDays, endOfDay } from "date-fns";

const SubscribedFunds = (props) => {
  return (
    <Box {...props}>
      <HStack flexWrap={"wrap"} space={10} alignItems={"flex-end"} mb={10}>
        <FundBar
          name={"Motive Fund 1"}
          originalAmount={100}
          gainedAmount={25}
          barHeight={120}
        />
        <FundBar
          name={"Motive Fund 2"}
          originalAmount={40}
          gainedAmount={10}
          barHeight={60}
        />
      </HStack>
      <Text variant={"subTitle"} mb={8}>
        The following events are happening soon:
      </Text>
      <EventTease
        event={{
          date: addDays(endOfDay(new Date()), 2).toDateString(),
          name: "Capital Call",
          description: "50k",
          fund: "Motive Fund 1",
        }}
      />
    </Box>
  );
};

SubscribedFunds.PropTypes = {
  ...Box.propTypes,
};

export default SubscribedFunds;
