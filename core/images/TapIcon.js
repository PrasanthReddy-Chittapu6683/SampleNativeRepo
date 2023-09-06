import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle } from "react-native-svg";

const TapIcon = (props) => {
  return (
    <IconWrapper width={16} height={16} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={7.99998} cy={7.99967} r={2.16667} stroke="#906AFF" />
        <Circle cx={8.00002} cy={8.00033} r={4.83333} stroke="#906AFF" />
        <Circle cx={8} cy={8} r={7.5} stroke="#906AFF" />
      </Svg>
    </IconWrapper>
  );
};

TapIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default TapIcon;
