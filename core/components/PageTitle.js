import React from "react";
import PropTypes from "prop-types";
import { is } from "ramda";
import { Flex, Heading } from "native-base";

const PageTitle = ({ title, titleProps, ...props }) => {
  return (
    <Flex
      flexDirection={"row"}
      mb={2}
      pl={"page"}
      alignItems={"center"}
      {...props}
    >
      {is(String, title) ? (
        <Heading size={"page"} {...titleProps}>
          {title}
        </Heading>
      ) : (
        title
      )}
    </Flex>
  );
};

PageTitle.propTypes = {
  ...Flex.propTypes,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
};

export default PageTitle;
