import React from "react";
import { TouchableOpacity } from "react-native";

export const TOUCHABLE_OPACITY_VALUE = 0.7;
export const TOUCHABLE_HITSLOP_VALUE = 15;

const Touchable = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={TOUCHABLE_OPACITY_VALUE}
      hitSlop={TOUCHABLE_HITSLOP_VALUE}
      {...props}
    />
  );
};

Touchable.propTypes = {
  ...TouchableOpacity.propTypes,
};

export default Touchable;
