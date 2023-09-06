import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, HStack, Text } from "native-base";
import { is, isNil } from "ramda";
import Touchable from "./Touchable";

const Section = ({
  children,
  heading,
  headingProps = {},
  title,
  titleProps = {},
  subTitle,
  subTitleProps = {},
  cta,
  ctaProps = {},
  onCtaPress,
  ...props
}) => {
  return (
    <Box {...props}>
      {heading || (
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={isNil(subTitle) ? 5 : 1}
          {...headingProps}
        >
          {is(String, title) ? (
            <Heading size={"section"} {...titleProps}>
              {title}
            </Heading>
          ) : (
            title
          )}
          {is(String, cta) ? (
            <Touchable onPress={onCtaPress}>
              <Text variant={"subTitle"} color={"accent.250"} {...ctaProps}>
                {cta}
              </Text>
            </Touchable>
          ) : (
            cta
          )}
        </HStack>
      )}
      {is(String, subTitle) ? (
        <Text
          fontSize={"xs"}
          color={"accent.200"}
          fontFamily={"light"}
          mb={2}
          {...subTitleProps}
        >
          {subTitle}
        </Text>
      ) : (
        subTitle
      )}
      {children}
    </Box>
  );
};

Section.propTypes = {
  ...Box.propTypes,
  headingProps: PropTypes.object,
  heading: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitleProps: PropTypes.object,
  cta: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ctaProps: PropTypes.object,
  onCtaPress: PropTypes.func,
};

export default Section;
