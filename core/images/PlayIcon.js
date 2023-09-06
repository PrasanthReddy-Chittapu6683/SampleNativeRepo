import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Circle, Path } from "react-native-svg";

const PlayIcon = (props) => {
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={17} cy={17} r={17} fill="#D9D9D9" />
        <Path
          d="M22.366 17.12a1 1 0 010 1.76l-8.142 4.388a1 1 0 01-1.474-.88v-8.775a1 1 0 011.474-.88l8.142 4.387z"
          fill="#080808"
        />
      </Svg>
    </IconWrapper>
  );
};

PlayIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default PlayIcon;
