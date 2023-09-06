import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Heading, Modal, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import Touchable from "./Touchable";
import CloseIcon from "../images/CloseIcon";

const StatBox = ({
  label,
  labelProps,
  value,
  valueProps,
  textColor,
  tooltip,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <VStack
        space={2}
        borderWidth={"1px"}
        borderColor={"accent.325"}
        p={2}
        rounded={"sm"}
        w={"32%"}
        h={"75px"}
        justifyContent={"space-between"}
        position={"relative"}
        {...props}
      >
        <Heading
          color={textColor}
          opacity={0.7}
          fontSize={"9px"}
          letterSpacing={"1px"}
          _light={{
            color: textColor,
          }}
          {...labelProps}
        >
          {label}
        </Heading>
        <Heading
          size={"title2"}
          letterSpacing={"1px"}
          color={textColor}
          _light={{
            color: textColor,
          }}
          {...valueProps}
        >
          {value}
        </Heading>
        {tooltip && (
          <Box position={"absolute"} top={"2px"} right={"2px"} opacity={0.3}>
            <Touchable onPress={() => setOpen(true)}>
              <Feather name={"info"} size={13} color={colors.accent[200]} />
            </Touchable>
          </Box>
        )}
      </VStack>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content
          borderWidth={"1px"}
          borderColor={"rgba(91, 87, 185, 0.35)"}
        >
          <Modal.Body bg={colors.gradients[850]}>
            <Heading
              size={"section"}
              textAlign={"center"}
              mb={4}
              color={"accent.100"}
              fontFamily={"bold"}
            >
              {tooltip?.title || label}
            </Heading>
            <Box position={"absolute"} top={3} right={3}>
              <Touchable onPress={() => setOpen(false)}>
                <CloseIcon fillColor={colors.accent[325]} width={12} />
              </Touchable>
            </Box>
            <Text>{tooltip?.content}</Text>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

StatBox.propTypes = {
  label: PropTypes.string,
  labelProps: PropTypes.object,
  value: PropTypes.any,
  valueProps: PropTypes.object,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  textColor: PropTypes.string,
};

export default StatBox;
