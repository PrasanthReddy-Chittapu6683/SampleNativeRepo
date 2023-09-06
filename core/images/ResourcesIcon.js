import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import { useMenuFillColor } from "../services/images";

const ResourcesIcon = ({ isActive, ...props }) => {
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
          d="M17.48 35c-2.586 0-5.075-.551-7.4-1.64C3.958 30.495 0 24.278 0 17.52 0 7.879 7.842.037 17.48.037c9.638 0 17.48 7.842 17.48 17.482C34.96 27.158 27.118 35 17.48 35zm0-33.805c-9 0-16.322 7.324-16.322 16.324 0 6.311 3.695 12.119 9.413 14.793a16.193 16.193 0 006.909 1.53c9 0 16.322-7.323 16.322-16.323S26.48 1.195 17.48 1.195z"
          fill={fillColor}
        />
        <Path
          d="M9.692 32.724a.58.58 0 01-.58-.579V10.864c0-.32.26-.579.58-.579h11.916a.579.579 0 010 1.158H10.27v20.702a.58.58 0 01-.578.579zM25.268 32.724a.579.579 0 01-.578-.579V14.471a.579.579 0 011.157 0v17.672a.58.58 0 01-.579.579v.002z"
          fill={fillColor}
        />
        <Path
          d="M25.268 15.05h-3.66a.579.579 0 01-.579-.579v-3.61a.58.58 0 01.986-.411l3.66 3.61a.58.58 0 01-.405.991h-.002zm-3.081-1.157h1.67l-1.67-1.647v1.647zM21.608 19.2H12.98a.58.58 0 010-1.158h8.63a.58.58 0 010 1.157zM21.608 22.49H12.98a.579.579 0 010-1.158h8.63a.58.58 0 010 1.158zM21.608 26.005H12.98a.579.579 0 010-1.158h8.63a.58.58 0 010 1.158z"
          fill={fillColor}
        />
      </Svg>
    </IconWrapper>
  );
};

ResourcesIcon.propTypes = {};

export default ResourcesIcon;
