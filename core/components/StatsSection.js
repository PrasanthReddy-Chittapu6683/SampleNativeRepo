import React from "react";
import PropTypes from "prop-types";
import { HStack } from "native-base";
import { format } from "date-fns";
import StatBox from "./StatBox";
import Section from "./Section";

const StatsSection = ({ title, date, stats, statTextColor, ...props }) => {
  return (
    <Section
      title={title}
      headingProps={{
        mb: 1,
      }}
      subTitle={`As of ${format(date, "dd/MM/yyyy")}`}
      {...props}
    >
      <HStack space={2}>
        {stats.map((stat) => {
          return (
            <StatBox
              key={stat.label}
              label={stat.label}
              value={stat.value}
              textColor={statTextColor}
            ></StatBox>
          );
        })}
      </HStack>
    </Section>
  );
};

StatsSection.propTypes = {
  title: PropTypes.string,
  date: PropTypes.object,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  statTextColor: PropTypes.string,
};

export default StatsSection;
