import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import { useMenuFillColor } from "../services/images";

const FinanceIcon = ({ isActive, ...props }) => {
  const fillColor = useMenuFillColor(isActive);

  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M17.48 34.963C7.842 34.963 0 27.121 0 17.481 0 7.843 7.842 0 17.48 0c9.638 0 17.48 7.842 17.48 17.482 0 9.639-7.842 17.481-17.48 17.481zm0-33.805c-9 0-16.322 7.323-16.322 16.323S8.48 33.806 17.48 33.806c9 0 16.322-7.323 16.322-16.323S26.48 1.157 17.48 1.157z"
          fill={fillColor}
        />
        <Path
          d="M25.66 32.856a.579.579 0 01-.58-.579V12.73a1.904 1.904 0 00-1.9-1.9H11.164c-1.046 0-1.9.851-1.9 1.9v19.154a.579.579 0 01-1.158 0V12.73a3.062 3.062 0 013.058-3.058H23.18a3.062 3.062 0 013.058 3.058v19.547c0 .32-.259.579-.578.579z"
          fill={fillColor}
        />
        <Path
          d="M21.664 34.243a.579.579 0 01-.58-.579V10.251a.579.579 0 011.159 0v23.413a.58.58 0 01-.58.579zM14.26 18.06h-1.672a1.737 1.737 0 01-1.737-1.736v-1.672c0-.958.778-1.736 1.737-1.736h1.671c.959 0 1.737.777 1.737 1.736v1.672c0 .958-.778 1.736-1.737 1.736zm-1.672-3.987a.58.58 0 00-.579.58v1.67c0 .32.26.58.579.58h1.671c.32 0 .58-.26.58-.58v-1.67a.58.58 0 00-.58-.58h-1.671z"
          fill={fillColor}
        />
      </Svg>
    </IconWrapper>
  );
};

FinanceIcon.propTypes = {
  ...IconWrapper.propTypes,
  isActive: PropTypes.bool,
};

export default FinanceIcon;
