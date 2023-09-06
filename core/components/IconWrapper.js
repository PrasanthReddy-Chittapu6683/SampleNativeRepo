import React from "react";
import PropTypes from "prop-types";
import { Box } from "native-base";

const IconWrapper = ({ width = 36, height, ...props }) => {
  return (
    <Box
      {...props}
      style={{
        aspectRatio: 1,
        width,
        height,
      }}
    >
      {props.children}
    </Box>
  );
};

IconWrapper.propTypes = {
  width: PropTypes.number,
};

export default IconWrapper;
