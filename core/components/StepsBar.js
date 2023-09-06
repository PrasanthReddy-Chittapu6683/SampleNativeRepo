import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Center, Stack, Text } from "native-base";
import { Animated } from "react-native";

const baseShadow = {
  shadowColor: "#fff",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 8,

  elevation: 10,
};

let memLineSize = 0;
const StepsBar = ({ steps, orientation, space, ...props }) => {
  const borderThickness = 1;
  const circleSize = 17;
  const innerCircleSize = 11;
  const dividerW = orientation === "horizontal" ? space : borderThickness;
  const dividerH = orientation === "horizontal" ? borderThickness : space;
  const dividerMargin =
    orientation === "horizontal"
      ? circleSize / 2 - dividerH / 2
      : circleSize / 2 - dividerW / 2;
  const currentSelectedIndex = steps.findIndex((step) => step.active);
  const isAnySelected = currentSelectedIndex !== -1;
  const sizeProp = orientation === "horizontal" ? "w" : "h";
  const stepSize = 100 / steps.length;
  const [lineSize, setLineSize] = useState(memLineSize);
  const pulsing = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const animate = (value, to, from) => {
    Animated.sequence([
      Animated.timing(value, {
        toValue: to,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(value, {
        toValue: from,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => animate(value, to, from));
  };

  useEffect(() => {
    animate(pulsing, 1.2, 1);
    animate(opacity, 1, 0);
  }, []);

  return (
    <Box position={"relative"} {...props}>
      <Stack
        alignItems={"flex-start"}
        direction={orientation === "horizontal" ? "row" : "column"}
        divider={
          <Box
            bg={"white"}
            ml={orientation === "vertical" ? `${dividerMargin}px` : 0}
            mt={orientation === "horizontal" ? `${dividerMargin}px` : 0}
          />
        }
        opacity={!lineSize ? 0 : 1}
      >
        {steps.map((step, i) => {
          let percentComplete = step.percentComplete;

          if (
            step.active &&
            !step.percentComplete &&
            step.percentComplete !== 0
          ) {
            percentComplete = 100;
          }

          if (i < currentSelectedIndex) {
            percentComplete = 100;
          }

          const isCompleted = percentComplete === 100;

          const renderCircleOuterWrapper = (content) => {
            if (step.active) {
              return (
                <Animated.View
                  style={{
                    transform: [
                      {
                        scale: pulsing,
                      },
                    ],
                  }}
                >
                  {content}
                </Animated.View>
              );
            }

            return content;
          };

          const renderCircleInnerWrapper = (content) => {
            if (step.active) {
              return (
                <Animated.View
                  style={{
                    ...baseShadow,
                    shadowOpacity: opacity,
                  }}
                >
                  {content}
                </Animated.View>
              );
            }

            return content;
          };

          return (
            <Center
              position={"relative"}
              key={step.name}
              {...{
                [sizeProp]: `${stepSize}%`,
              }}
              onLayout={(layout) => {
                const newLineSize =
                  layout.nativeEvent.layout.width / 2 - circleSize / 2;
                memLineSize = newLineSize;
                if (!lineSize || lineSize !== newLineSize) {
                  setLineSize(newLineSize);
                }
              }}
            >
              {i !== 0 && (
                <Box
                  bg={"gray.700"}
                  h={`${borderThickness}px`}
                  position={"absolute"}
                  top={`${circleSize / 2.2}px`}
                  left={0}
                  w={`${lineSize}px`}
                />
              )}
              {i !== steps.length - 1 && (
                <Box
                  bg={"gray.700"}
                  h={`${borderThickness}px`}
                  position={"absolute"}
                  top={`${circleSize / 2.2}px`}
                  right={0}
                  w={`${lineSize}px`}
                />
              )}
              {renderCircleOuterWrapper(
                <Stack
                  mb={1}
                  direction={orientation === "horizontal" ? "column" : "row"}
                  alignItems={"center"}
                  space={3}
                  position={"relative"}
                  w={orientation === "horizontal" ? `${circleSize}px` : "100%"}
                >
                  {renderCircleInnerWrapper(
                    <Center
                      testID={step.active ? "active-step" : "step"}
                      rounded={"full"}
                      size={`${circleSize}px`}
                      // bg={step.active ? "white" : "transparent"}
                      borderColor={isCompleted ? "white" : "gray.700"}
                      borderWidth={`${borderThickness}px`}
                      position={"relative"}
                      _light={{
                        borderColor: isCompleted ? "accent.275" : "gray.700",
                      }}
                    >
                      <Box
                        size={`${isCompleted ? innerCircleSize : 0}px`}
                        bg={"accent.325"}
                        rounded={"full"}
                      />
                    </Center>
                  )}
                </Stack>
              )}

              <Text
                variant={"subTitle"}
                fontSize={"11px"}
                textTransform={"none"}
                letterSpacing={"0px"}
                textAlign={"center"}
                w={"100%"}
              >
                {step.name}
              </Text>
            </Center>
          );
        })}
      </Stack>
    </Box>
  );
};

StepsBar.propTypes = {
  ...Box.propTypes,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      nameProps: PropTypes.object,
      active: PropTypes.bool,
      percentComplete: PropTypes.number,
    })
  ),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default StepsBar;
