import React from "react";
import PropTypes from "prop-types";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const LunaIcon = ({ fillColor, ...props }) => {
  return (
    <IconWrapper {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 1486 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M184.217 0c-2.794 0-5.541.28-8.195.796-18.907 3.839-33.156 20.598-33.156 40.728 0 21.207 15.833 38.716 36.276 41.244 1.629.187 3.306.328 5.029.328 22.817 0 41.305-18.586 41.305-41.525S207.035 0 184.217 0zM106.889 321.712h219.704v57.471H108.102C48.476 379.183 0 330.629 0 271.011V.654h56.22V271.01c0 27.965 22.722 50.701 50.669 50.701zM691.445.654l.373 379.836H472.534c-78.522 0-143.701-62.793-148.413-142.952a328.7 328.7 0 01-.514-18.161V.654h57.434v218.723c0 5.089.14 10.037.42 14.799 2.939 49.814 42.924 88.797 91.026 88.797h112.395c27.947 0 50.669-22.736 50.669-50.654L635.457.654h55.988zm397.605 142.952c.33 5.882.51 11.998.51 18.161V380.49h-57.43V161.767c0-5.043-.14-10.038-.42-14.8-2.94-49.814-42.925-88.796-91.028-88.796H828.288c-27.947 0-50.669 22.736-50.669 50.654l.093 271.665h-55.941L721.398.654h219.284c78.518 0 143.698 62.792 148.418 142.952h-.05zM1321.26.28c-1.36-.093-2.76-.187-4.11-.28h-21.23c-64.52 3.501-120.56 38.89-152.7 90.664-14.79 28.852-23.05 62.652-23.8 98.507V190.198c1.03 50.888 17.22 97.574 45.68 131.841 21.37 23.25 48.33 41.177 78.85 51.681 13.71 3.735 28.18 5.649 43.2 5.649H1486V179.974C1486 86.416 1414.57 7.376 1321.3.28h-.04zm-18.57 324.374c-74.47 0-134.79-60.412-134.79-134.876s60.37-134.875 134.79-134.875c74.41 0 134.79 60.411 134.79 134.875s-60.38 134.876-134.79 134.876z"
          fill={fillColor || "#ffffff"}
        />
      </Svg>
    </IconWrapper>
  );
};

LunaIcon.propTypes = {
  ...IconWrapper.propTypes,
  fillColor: PropTypes.string,
};

export default LunaIcon;