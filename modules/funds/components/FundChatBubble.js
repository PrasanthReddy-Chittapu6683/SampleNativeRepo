import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "native-base";
import { colors } from "../../../core/theme/colors";
import ChatBubbleEnd from "../../../core/images/ChatBubbleEnd";
import { is } from "ramda";

const FundChatBubble = ({
  message,
  variant,
  messageContainerProps,
  ...props
}) => {
  const backgrounds = {
    system: colors.gradients[500],
    user: colors.gradients[600],
  };
  const textAlign = {
    system: "left",
    user: "right",
  };
  const justifyContent = {
    system: "flex-start",
    user: "flex-end",
  };
  const margin = {
    [variant === "system" ? "mr" : "ml"]: 4,
  };

  return (
    <Box
      {...props}
      {...margin}
      minW={"80px"}
      position={"relative"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent={justifyContent[variant]}
    >
      <Box
        py={4}
        px={4}
        bg={backgrounds[variant]}
        borderRadius={"lg"}
        {...messageContainerProps}
      >
        {is(String, message) ? (
          <Text
            color={"white"}
            fontSize={"14px"}
            textAlign={textAlign[variant]}
          >
            {message}
          </Text>
        ) : (
          message
        )}
      </Box>
      <Box
        position={"absolute"}
        bottom={"-3px"}
        left={variant === "system" ? "-3.5px" : null}
        right={variant === "user" ? "-3.3px" : null}
      >
        <ChatBubbleEnd variant={variant} />
      </Box>
    </Box>
  );
};

FundChatBubble.propTypes = {
  ...Box.propTypes,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(["system", "user"]).isRequired,
  messageContainerProps: PropTypes.shape(Box.propTypes),
};

export default FundChatBubble;
