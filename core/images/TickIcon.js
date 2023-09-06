import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const TickIcon = (props) => {
  return (
    <IconWrapper width={8} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 8 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1 4l1.5 1.5L7 1"
          stroke="#7BCD79"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 4l1.5 1.5L7 1"
          stroke="#7BCD79"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 4l1.5 1.5L7 1"
          stroke="#7BCD79"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </IconWrapper>
  );
};

TickIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default TickIcon;
