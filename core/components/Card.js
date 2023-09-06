import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, VStack } from "native-base";
import Touchable from "./Touchable";
import { StyleSheet } from "react-native";

const renderCard = ({
  header,
  body,
  footer,
  cssStyles,
  dividerColor,
  ...props
}) => {
  return (
    <Box border="1" borderRadius="md" style={[cssStyles, styles.cardContainer]}>
      <VStack space="4" divider={<Divider bg={dividerColor || ""} />}>
        {header && (
          <Box px="4" pt="4">
            {header}
          </Box>
        )}
        {body && <Box px="4">{body}</Box>}
        {footer && (
          <Box px="4" pb="4">
            {footer}
          </Box>
        )}
      </VStack>
    </Box>
  );
};
const Card = (props) => {
  const { onPress, ...restProps } = props;
  return onPress ? (
    <Touchable onPress={onPress}>{renderCard({ ...restProps })}</Touchable>
  ) : (
    renderCard({ ...restProps })
  );
};

Card.propTypes = {};

const styles = StyleSheet.create({
  cardContainer: {
    minWidth: "250px",
  },
});

export default Card;
