import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Text } from "native-base";
import Touchable from "./Touchable";

const ReadMoreText = ({ children, numberOfLines, textProps, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <Box {...props}>
      <Text numberOfLines={!show ? numberOfLines : null} {...textProps} mb={1}>
        {children}
      </Text>
      <Touchable onPress={() => setShow(!show)}>
        <Text variant={"subTitle"} textAlign={"center"}>
          Read {show ? "Less" : "More"}
        </Text>
      </Touchable>
    </Box>
  );
};

ReadMoreText.propTypes = {
  ...Box.propTypes,
  textProps: PropTypes.shape(Text.propTypes),
};

export default ReadMoreText;
