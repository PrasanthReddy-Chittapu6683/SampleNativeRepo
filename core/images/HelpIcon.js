import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import IconWrapper from "../components/IconWrapper";
import { useMenuFillColor } from "../services/images";

const HelpIcon = ({ isActive, ...props }) => {
  const fillColor = useMenuFillColor(isActive);

  return (
    <IconWrapper {...props}>
      <Svg
        width={34}
        height={34}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M17.48 35C7.842 35 0 27.158 0 17.52 0 7.879 7.842.037 17.48.037c9.638 0 17.48 7.842 17.48 17.482C34.96 27.158 27.118 35 17.48 35zm0-33.805c-9 0-16.322 7.324-16.322 16.324 0 9 7.323 16.323 16.322 16.323 9 0 16.322-7.323 16.322-16.323S26.48 1.195 17.48 1.195z"
          fill={fillColor}
        />
        <Path
          d="M17.466 24.664a7.103 7.103 0 01-4.144-1.325.578.578 0 11.674-.942 5.95 5.95 0 003.472 1.11 5.994 5.994 0 005.988-5.989 5.994 5.994 0 00-5.988-5.987 5.994 5.994 0 00-5.987 5.987c0 1.225.366 2.402 1.06 3.404a.58.58 0 01-.951.66 7.105 7.105 0 01-1.266-4.064 7.152 7.152 0 017.144-7.145 7.152 7.152 0 017.145 7.146 7.152 7.152 0 01-7.145 7.145h-.002z"
          fill={fillColor}
        />
        <Path
          d="M11.604 24.252c-.868 0-1.336-.43-1.368-.463a.582.582 0 01.122-.929c1.26-.685 1.137-1.488 1.135-1.495a.58.58 0 111.137-.23c.009.051.185.987-.642 1.915.343-.076.785-.264 1.332-.655a.58.58 0 01.807.134.58.58 0 01-.134.808c-.984.702-1.783.913-2.39.913v.002z"
          fill={fillColor}
        />
      </Svg>
    </IconWrapper>
  );
};

HelpIcon.propTypes = {
  ...IconWrapper.propTypes,
  isActive: PropTypes.bool,
};

export default HelpIcon;
