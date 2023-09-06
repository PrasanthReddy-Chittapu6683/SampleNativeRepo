import React from "react";
import PropTypes from "prop-types";
import { Box, Center } from "native-base";

const CircleBox = ({ size, ...props }) => {
  return <Center {...props} w={size} h={size} borderRadius={"3xl"} />;
};

CircleBox.propTypes = {
  ...Box.propTypes,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CircleBox;
