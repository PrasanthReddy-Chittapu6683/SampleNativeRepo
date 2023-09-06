import React from "react";
import Svg, { Path } from "react-native-svg";

const ExclamationMarkIcon = () => {
  return (
    <Svg
      width={2}
      height={10}
      viewBox="0 0 2 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 1v5M1 1v5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 1v5"
        stroke="#DEDA7A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 8.5V9M1 8.5V9"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 8.5V9"
        stroke="#DEDA7A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ExclamationMarkIcon;
