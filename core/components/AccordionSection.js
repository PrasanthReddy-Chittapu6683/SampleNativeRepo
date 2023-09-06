import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import Section from "./Section";
import { Box, Heading, HStack } from "native-base";
import { Animated, Easing } from "react-native";
import Touchable from "./Touchable";
import ChevronIcon from "../images/ChevronIcon";
import SectionBox from "./SectionBox";

const AccordionSection = ({
  title,
  titleProps = {},
  headingProps = {},
  cta,
  ctaProps = {},
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(0);
  const animatedController = useRef(new Animated.Value(0)).current;
  const height = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, sectionHeight],
  });
  const chevronAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["90deg", "270deg"],
  });

  const toggle = () => {
    const to = open ? 0 : 1;
    Animated.timing(animatedController, {
      toValue: to,
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
    setOpen(!open);
  };

  return (
    <SectionBox {...props}>
      <Section
        heading={
          <Touchable onPress={toggle}>
            <HStack
              p={4}
              w={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Heading size={"section"} {...titleProps}>
                {title}
              </Heading>
              {cta || (
                <Animated.View
                  style={{
                    transform: [{ rotateZ: chevronAngle }],
                  }}
                >
                  <ChevronIcon width={14} {...ctaProps} />
                </Animated.View>
              )}
            </HStack>
          </Touchable>
        }
        children={
          <Animated.View
            style={{
              height,
              overflow: "hidden",
            }}
          >
            <Box
              p={4}
              position={"absolute"}
              top={0}
              left={0}
              onLayout={(e) => {
                setSectionHeight(e.nativeEvent.layout.height);
              }}
            >
              {children}
            </Box>
          </Animated.View>
        }
      />
    </SectionBox>
  );
};

AccordionSection.propTypes = {
  ...Section.propTypes,
  open: PropTypes.bool,
};

export default AccordionSection;
