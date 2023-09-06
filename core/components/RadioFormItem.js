import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormItem from "./FormItem";
import { Flex, HStack, Pressable, Text, VStack } from "native-base";
import CircleBox from "./CircleBox";
import { useColor } from "../theme/colors";
import { isNil } from "ramda";

const RadioFormItem = ({ value, options, onSelect, ...props }) => {
  const [selected, setSelected] = useState(value);
  const borderColor = useColor("borders.opaque");

  const handleSelect = (value) => {
    setSelected(value);
    onSelect?.(value);
  };

  useEffect(() => {
    if (!isNil(value) && selected !== value) {
      setSelected(value);
    }
  }, [selected, value]);

  return (
    <FormItem
      {...props}
      renderInput={() => {
        return (
          <VStack space={3}>
            {options.map((option) => {
              return (
                <Pressable
                  key={option.label}
                  onPress={() => handleSelect(option.value)}
                >
                  <HStack
                    alignItems={"center"}
                    borderRadius={"md"}
                    borderWidth={"1px"}
                    borderColor={borderColor}
                    p={3}
                    space={4}
                  >
                    <CircleBox
                      size={"29px"}
                      borderColor={"white"}
                      borderWidth={"1px"}
                      bg={option.value === selected ? "white" : "transparent"}
                    />
                    <Flex flexDirection={"row"} flexShrink={1}>
                      <Text fontSize={"title3"}>{option.label}</Text>
                    </Flex>
                  </HStack>
                </Pressable>
              );
            })}
          </VStack>
        );
      }}
    />
  );
};

RadioFormItem.propTypes = {
  ...FormItem.propTypes,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
};

export default RadioFormItem;
