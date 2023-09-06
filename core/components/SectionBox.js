import React from "react";
import { Box } from "native-base";

const SectionBox = (props) => {
  return (
    <Box
      bg={"primary.800"}
      borderWidth={"1px"}
      borderColor={"rgba(63, 68, 109, 0.7)"}
      borderRadius={"sm"}
      overflow={"hidden"}
      {...props}
    />
  );
};

SectionBox.propTypes = {
  ...Box.propTypes,
};

export default SectionBox;
