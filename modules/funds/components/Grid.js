import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "native-base";
import { isNil } from "ramda";

const Grid = ({ columns, gap, items, ...props }) => {
  const widths = {
    2: "48%",
    3: "31%",
    4: "23%",
    5: "19%",
  };
  const defaultGap = 3;
  const actualGap = isNil(gap) ? defaultGap : gap;
  const mr = items.length >= columns ? actualGap : 0;
  const mb = items.length > columns ? actualGap : 0;

  return (
    <Flex flexDirection={"row"} flexWrap={"wrap"} {...props}>
      {items.map((item, i) => {
        return (
          <Box
            key={`item-${i}`}
            w={widths[columns]}
            mr={(i + 1) % columns !== 0 ? mr : 0}
            mb={i !== items.length - 1 ? mb : 0}
          >
            {item}
          </Box>
        );
      })}
    </Flex>
  );
};

Grid.propTypes = {
  ...Flex.propTypes,
  columns: PropTypes.number,
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(PropTypes.node),
};

export default Grid;
