import React from "react";
import PropTypes from "prop-types";
import DocumentIcon from "../../../core/images/DocumentIcon";
import { Box, HStack, Text } from "native-base";

const Document = ({ title, description, textColor, ...props }) => {
  return (
    <HStack
      borderColor={"accent.75"}
      borderWidth={"1px"}
      rounded={"md"}
      p={3}
      pl={1}
      alignItems={"center"}
      space={2}
      {...props}
    >
      <Box>
        <DocumentIcon width={32} height={46} />
      </Box>
      <Box>
        <Text fontSize={"section"} color={textColor}>
          {title}
        </Text>
        <Text variant={"sm"} color={textColor}>
          {description}
        </Text>
      </Box>
    </HStack>
  );
};

Document.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  textColor: PropTypes.string,
};

export default Document;
