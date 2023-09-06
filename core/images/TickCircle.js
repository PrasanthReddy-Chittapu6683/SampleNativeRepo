import React from "react";
import PropTypes from "prop-types";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle, Path } from "react-native-svg";
import { resolveColor } from "../theme/colors";

const TickCircle = ({ color, ...props }) => {
  const defaultColor = resolveColor("success.400");
  const colorToUse = color || defaultColor;

  return (
    <IconWrapper width={19} height={19} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={9.5} cy={9.5} r={9} stroke={colorToUse} />
        <Path
          d="M5.542 11.48l1.187 1.187 5.938-5.938"
          stroke={colorToUse}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </IconWrapper>
  );
};

TickCircle.propTypes = {
  ...IconWrapper.propTypes,
  color: PropTypes.string,
};

export default TickCircle;
