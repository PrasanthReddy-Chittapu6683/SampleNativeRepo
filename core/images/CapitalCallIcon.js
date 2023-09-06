import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle, Path } from "react-native-svg";

const CapitalCallIcon = (props) => {
  return (
    <IconWrapper width={23} height={22} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M11.5 1C8 1 1 1.91 1 5.55c0 4.55 4.78 1.64 5.25.7.35-.7-.35-1.4-1.4-1.75.35-.35 2.17-1.05 6.65-1.05"
          stroke="#A9C1D8"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <Path
          d="M11.5 1C15 1 22 1.91 22 5.55c0 4.55-4.78 1.64-5.25.7-.35-.7.35-1.4 1.4-1.75-.35-.35-2.17-1.05-6.65-1.05"
          stroke="#A9C1D8"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <Circle
          cx={11.5}
          cy={14.5}
          r={7.25}
          stroke="#A9C1D8"
          strokeWidth={0.5}
        />
        <Circle
          cx={11.5}
          cy={14.5}
          r={5.25}
          stroke="#A9C1D8"
          strokeWidth={0.5}
          strokeDasharray="1 1"
        />
      </Svg>
    </IconWrapper>
  );
};

CapitalCallIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default CapitalCallIcon;
