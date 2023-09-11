import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "native-base";

const MotivePartnersSVGLogo = (props) => {
  const { colors } = useTheme();
  return (
    <IconWrapper {...props}>
      <Svg
        width="130"
        height="11"
        viewBox="0 0 130 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0.936 0.796H4.004L6.123 6.802H6.149L8.281 0.796H11.336V10H9.308V2.941H9.282L6.864 10H5.317L2.99 2.941H2.964V10H0.936V0.796ZM13.4984 5.398C13.4984 4.66133 13.6197 3.994 13.8624 3.396C14.1137 2.798 14.4604 2.291 14.9024 1.875C15.3444 1.45033 15.8687 1.12533 16.4754 0.899999C17.082 0.674666 17.745 0.562 18.4644 0.562C19.1837 0.562 19.8467 0.674666 20.4534 0.899999C21.06 1.12533 21.5844 1.45033 22.0264 1.875C22.4684 2.291 22.8107 2.798 23.0534 3.396C23.3047 3.994 23.4304 4.66133 23.4304 5.398C23.4304 6.13467 23.3047 6.802 23.0534 7.4C22.8107 7.998 22.4684 8.50933 22.0264 8.934C21.5844 9.35 21.06 9.67067 20.4534 9.896C19.8467 10.1213 19.1837 10.234 18.4644 10.234C17.745 10.234 17.082 10.1213 16.4754 9.896C15.8687 9.67067 15.3444 9.35 14.9024 8.934C14.4604 8.50933 14.1137 7.998 13.8624 7.4C13.6197 6.802 13.4984 6.13467 13.4984 5.398ZM15.6044 5.398C15.6044 5.83133 15.6694 6.23 15.7994 6.594C15.938 6.94933 16.133 7.26133 16.3844 7.53C16.6357 7.79 16.9347 7.99367 17.2814 8.141C17.6367 8.28833 18.031 8.362 18.4644 8.362C18.8977 8.362 19.2877 8.28833 19.6344 8.141C19.9897 7.99367 20.293 7.79 20.5444 7.53C20.7957 7.26133 20.9864 6.94933 21.1164 6.594C21.255 6.23 21.3244 5.83133 21.3244 5.398C21.3244 4.97333 21.255 4.579 21.1164 4.215C20.9864 3.851 20.7957 3.539 20.5444 3.279C20.293 3.01033 19.9897 2.80233 19.6344 2.655C19.2877 2.50767 18.8977 2.434 18.4644 2.434C18.031 2.434 17.6367 2.50767 17.2814 2.655C16.9347 2.80233 16.6357 3.01033 16.3844 3.279C16.133 3.539 15.938 3.851 15.7994 4.215C15.6694 4.579 15.6044 4.97333 15.6044 5.398ZM27.3698 2.59H24.7438V0.796H32.0238V2.59H29.3978V10H27.3698V2.59ZM33.8076 0.796H35.8356V10H33.8076V0.796ZM37.5503 0.796H39.8643L42.1393 6.828H42.1653L44.4793 0.796H46.6503L42.8543 10H41.2293L37.5503 0.796ZM48.4716 0.796H54.7246V2.668H50.4996V4.384H54.4906V6.256H50.4996V8.128H54.9586V10H48.4716V0.796ZM61.9683 0.796H64.6983C65.1229 0.796 65.5259 0.839333 65.9073 0.926C66.2973 1.004 66.6396 1.14267 66.9343 1.342C67.2376 1.53267 67.4759 1.79267 67.6493 2.122C67.8313 2.44267 67.9223 2.84133 67.9223 3.318C67.9223 3.82067 67.8269 4.23667 67.6363 4.566C67.4456 4.89533 67.1986 5.15533 66.8953 5.346C66.6006 5.53667 66.2756 5.671 65.9203 5.749C65.5649 5.827 65.2269 5.866 64.9063 5.866H63.0603V10H61.9683V0.796ZM63.0603 4.852H64.9063C65.4523 4.852 65.8943 4.73067 66.2323 4.488C66.5789 4.23667 66.7523 3.851 66.7523 3.331C66.7523 2.811 66.5789 2.42967 66.2323 2.187C65.8943 1.93567 65.4523 1.81 64.9063 1.81H63.0603V4.852ZM72.4795 0.796H73.5065L77.4195 10H76.1455L75.2095 7.738H70.6075L69.6585 10H68.4235L72.4795 0.796ZM72.9735 2.2H72.9475L71.0365 6.724H74.7935L72.9735 2.2ZM79.4228 0.796H81.7758C82.2178 0.796 82.6555 0.822 83.0888 0.874C83.5308 0.926 83.9251 1.03867 84.2718 1.212C84.6185 1.38533 84.9001 1.641 85.1168 1.979C85.3335 2.30833 85.4418 2.759 85.4418 3.331C85.4418 4.007 85.2381 4.553 84.8308 4.969C84.4235 5.385 83.8601 5.64933 83.1408 5.762L85.7538 10H84.4148L81.9188 5.866H80.5148V10H79.4228V0.796ZM80.5148 4.852H81.4898C81.7931 4.852 82.1051 4.84333 82.4258 4.826C82.7551 4.80867 83.0541 4.75233 83.3228 4.657C83.6001 4.56167 83.8255 4.41433 83.9988 4.215C84.1808 4.007 84.2718 3.71233 84.2718 3.331C84.2718 3.00167 84.2068 2.73733 84.0768 2.538C83.9468 2.33867 83.7735 2.187 83.5568 2.083C83.3488 1.97033 83.1105 1.89667 82.8418 1.862C82.5818 1.82733 82.3175 1.81 82.0488 1.81H80.5148V4.852ZM94.0965 1.81H91.0545V10H89.9625V1.81H86.9205V0.796H94.0965V1.81ZM96.1664 0.796H97.5444L102.874 8.44H102.9V0.796H103.992V10H102.614L97.2844 2.356H97.2584V10H96.1664V0.796ZM107.065 0.796H112.85V1.81H108.157V4.696H112.538V5.71H108.157V8.986H113.084V10H107.065V0.796ZM115.551 0.796H117.904C118.346 0.796 118.783 0.822 119.217 0.874C119.659 0.926 120.053 1.03867 120.4 1.212C120.746 1.38533 121.028 1.641 121.245 1.979C121.461 2.30833 121.57 2.759 121.57 3.331C121.57 4.007 121.366 4.553 120.959 4.969C120.551 5.385 119.988 5.64933 119.269 5.762L121.882 10H120.543L118.047 5.866H116.643V10H115.551V0.796ZM116.643 4.852H117.618C117.921 4.852 118.233 4.84333 118.554 4.826C118.883 4.80867 119.182 4.75233 119.451 4.657C119.728 4.56167 119.953 4.41433 120.127 4.215C120.309 4.007 120.4 3.71233 120.4 3.331C120.4 3.00167 120.335 2.73733 120.205 2.538C120.075 2.33867 119.901 2.187 119.685 2.083C119.477 1.97033 119.238 1.89667 118.97 1.862C118.71 1.82733 118.445 1.81 118.177 1.81H116.643V4.852ZM128.646 2.421C128.464 2.12633 128.221 1.914 127.918 1.784C127.615 1.64533 127.298 1.576 126.969 1.576C126.726 1.576 126.488 1.60633 126.254 1.667C126.02 1.72767 125.808 1.81867 125.617 1.94C125.435 2.06133 125.288 2.22167 125.175 2.421C125.062 2.62033 125.006 2.85433 125.006 3.123C125.006 3.331 125.036 3.51733 125.097 3.682C125.166 3.838 125.275 3.981 125.422 4.111C125.569 4.241 125.769 4.36233 126.02 4.475C126.271 4.58767 126.579 4.70033 126.943 4.813C127.298 4.92567 127.641 5.047 127.97 5.177C128.308 5.307 128.603 5.47167 128.854 5.671C129.114 5.87033 129.318 6.12167 129.465 6.425C129.621 6.71967 129.699 7.09233 129.699 7.543C129.699 8.00233 129.608 8.401 129.426 8.739C129.244 9.077 129.001 9.35867 128.698 9.584C128.403 9.80067 128.061 9.961 127.671 10.065C127.281 10.1777 126.878 10.234 126.462 10.234C126.193 10.234 125.925 10.208 125.656 10.156C125.387 10.1127 125.127 10.0433 124.876 9.948C124.633 9.844 124.404 9.714 124.187 9.558C123.97 9.39333 123.784 9.194 123.628 8.96L124.564 8.193C124.763 8.531 125.041 8.78667 125.396 8.96C125.751 9.13333 126.128 9.22 126.527 9.22C126.761 9.22 126.995 9.18533 127.229 9.116C127.472 9.04667 127.688 8.947 127.879 8.817C128.07 8.67833 128.226 8.50933 128.347 8.31C128.468 8.11067 128.529 7.881 128.529 7.621C128.529 7.335 128.481 7.10533 128.386 6.932C128.291 6.75 128.143 6.594 127.944 6.464C127.745 6.334 127.493 6.217 127.19 6.113C126.887 6.009 126.531 5.88767 126.124 5.749C125.795 5.645 125.491 5.528 125.214 5.398C124.937 5.25933 124.694 5.09467 124.486 4.904C124.287 4.70467 124.126 4.47067 124.005 4.202C123.892 3.92467 123.836 3.59533 123.836 3.214C123.836 2.772 123.923 2.38633 124.096 2.057C124.269 1.72767 124.503 1.45467 124.798 1.238C125.093 1.01267 125.426 0.843666 125.799 0.730999C126.172 0.618333 126.562 0.562 126.969 0.562C127.489 0.562 127.961 0.644333 128.386 0.809C128.819 0.965 129.205 1.24233 129.543 1.641L128.646 2.421Z"
          fill="white"
        />
      </Svg>
    </IconWrapper>
  );
};

MotivePartnersSVGLogo.propTypes = {
  ...IconWrapper.propTypes,
};

export default MotivePartnersSVGLogo;
