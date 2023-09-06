import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { useColorModeValue } from "native-base";

const EnvelopeClosedIcon = ({ fillColor, ...props }) => {
  const defaultFillColor = useColorModeValue("black", "white");
  return (
    <IconWrapper {...props}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill={fillColor || defaultFillColor}
          d="M28 3.75H4A3.254 3.254 0 00.75 7v18A3.254 3.254 0 004 28.25h24A3.252 3.252 0 0031.25 25V7A3.254 3.254 0 0028 3.75zM4 6.25h24a.737.737 0 01.549.248l.001.001L16 15.463 3.45 6.499a.737.737 0 01.549-.249zm24 19.5H4a.75.75 0 01-.75-.75V9.429l12.023 8.588c.031.018.069.037.108.054l.008.003c.031.018.068.037.107.054l.008.003c.145.07.315.113.494.118h.004c.181-.005.351-.048.503-.121l-.008.003c.046-.02.084-.039.12-.06l-.006.003c.047-.02.085-.04.121-.061l-.006.003 12.023-8.588v15.571a.75.75 0 01-.75.75z"
        />
      </Svg>
    </IconWrapper>
  );
};

EnvelopeClosedIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default EnvelopeClosedIcon;
