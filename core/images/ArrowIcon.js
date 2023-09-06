import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const ArrowIcon = (props) => {
  return (
    <IconWrapper width={13} height={13} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path d="M0 0l13 6.5H2.241L0 0zM0 13l13-6.5H2.241L0 13z" fill="#fff" />
      </Svg>
    </IconWrapper>
  );
};

ArrowIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default ArrowIcon;
