import React from "react";
import PropTypes from "prop-types";
import { Box, Center, Text, useTheme } from "native-base";
import SpeechmarksIcon from "../../../core/images/SpeechmarksIcon";

const QuestionTease = ({ question, ...props }) => {
  const { colors } = useTheme();
  return (
    <Box
      rounded={"md"}
      overflow={"hidden"}
      bg={colors.gradients[800]}
      p={6}
      variant={"outlined"}
      h={"130px"}
      {...props}
    >
      <Center h={"100%"}>
        <Box w={"100%"}>
          <SpeechmarksIcon width={17} />
          <Text variant={"subTitle"} color={"white"}>
            {question.title}
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

QuestionTease.propTypes = {
  ...Box.propTypes,
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default QuestionTease;
