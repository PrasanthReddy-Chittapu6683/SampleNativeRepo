import React from "react";
import PropTypes from "prop-types";
import { HStack, Text, VStack } from "native-base";

const UnorderedList = ({ items, textProps, ...props }) => {
  return (
    <VStack space={2} {...props}>
      {items.map((item) => (
        <HStack space={2} key={item}>
          <Text variant={"subTitle"} {...textProps}>{`\u2022`}</Text>
          <Text variant={"subTitle"} {...textProps}>
            {item}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

UnorderedList.propTypes = {
  ...VStack.propTypes,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  textProps: PropTypes.shape(Text.propTypes),
};

export default UnorderedList;
