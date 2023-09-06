import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import IconWrapper from "./IconWrapper";
import { useColorMode } from "native-base";

const Logo = (props) => {
  const width = props.width || 36;
  const { colorMode } = useColorMode();

  return (
    <IconWrapper
      {...{
        ...props,
        width,
      }}
    >
      {(colorMode === "dark" && (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={"100%"}
          viewBox={`0 0 27 95`}
          fill={"none"}
        >
          <Path
            d="M6 95H0c0-9.593 6.252-14.305 11.772-18.464C16.716 72.802 21 69.582 21 63.338c0-6.245-4.272-9.464-9.228-13.198C6.252 45.98 0 41.255 0 31.662c0-9.592 6.252-14.305 11.772-18.464C16.716 9.464 21 6.245 21 0h6c0 9.58-6.252 14.305-11.772 18.464C10.284 22.198 6 25.418 6 31.662c0 6.245 4.272 9.477 9.228 13.198C20.748 49.02 27 53.745 27 63.325S20.748 77.63 15.228 81.802C10.284 85.536 6 88.755 6 95z"
            fill="url(#paint0_linear_11_70)"
          />
          <Path
            opacity={0.5}
            d="M27 95h-6c0-6.245-4.272-9.464-9.228-13.198C6.252 77.643 0 72.917 0 63.325c0-9.593 6.252-14.306 11.772-18.465C16.716 41.126 21 37.907 21 31.662c0-6.244-4.272-9.464-9.228-13.198C6.252 14.305 0 9.593 0 0h6c0 6.245 4.272 9.464 9.228 13.198C20.748 17.357 27 22.07 27 31.662c0 9.593-6.252 14.306-11.772 18.478C10.284 53.874 6 57.093 6 63.338c0 6.244 4.272 9.476 9.228 13.198C20.748 80.695 27 85.42 27 95z"
            fill="url(#paint1_linear_11_70)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_11_70"
              x1={13.5}
              y1={0}
              x2={13.5}
              y2={95}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#EEFFCA" stopOpacity={0} />
              <Stop offset={0.515625} stopColor="#EEFFCA" />
              <Stop offset={1} stopColor="#EEFFCA" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
              id="paint1_linear_11_70"
              x1={13.5}
              y1={0}
              x2={13.5}
              y2={95}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#fff" stopOpacity={0} />
              <Stop offset={0.494792} stopColor="#fff" />
              <Stop offset={1} stopColor="#DCBAFF" stopOpacity={0} />
            </LinearGradient>
          </Defs>
        </Svg>
      )) || (
        <Svg
          width={27}
          height={95}
          viewBox="0 0 27 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M6 95H0c0-9.593 6.252-14.305 11.772-18.464C16.716 72.802 21 69.582 21 63.338c0-6.245-4.272-9.464-9.228-13.198C6.252 45.98 0 41.255 0 31.662c0-9.592 6.252-14.305 11.772-18.464C16.716 9.464 21 6.245 21 0h6c0 9.58-6.252 14.305-11.772 18.464C10.284 22.198 6 25.418 6 31.662c0 6.245 4.272 9.477 9.228 13.198C20.748 49.02 27 53.745 27 63.325S20.748 77.63 15.228 81.802C10.284 85.536 6 88.755 6 95z"
            fill="url(#paint0_linear_26_226)"
          />
          <Path
            opacity={0.5}
            d="M27 95h-6c0-6.245-4.272-9.464-9.228-13.198C6.252 77.643 0 72.917 0 63.325c0-9.593 6.252-14.306 11.772-18.465C16.716 41.126 21 37.907 21 31.662c0-6.244-4.272-9.464-9.228-13.198C6.252 14.305 0 9.593 0 0h6c0 6.245 4.272 9.464 9.228 13.198C20.748 17.357 27 22.07 27 31.662c0 9.593-6.252 14.306-11.772 18.478C10.284 53.874 6 57.093 6 63.338c0 6.244 4.272 9.476 9.228 13.198C20.748 80.695 27 85.42 27 95z"
            fill="url(#paint1_linear_26_226)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_26_226"
              x1={13.5}
              y1={0}
              x2={13.5}
              y2={95}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#46465F" stopOpacity={0} />
              <Stop offset={0.515625} stopColor="#706FCF" />
              <Stop offset={1} stopColor="#46465F" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
              id="paint1_linear_26_226"
              x1={13.5}
              y1={0}
              x2={13.5}
              y2={95}
              gradientUnits="userSpaceOnUse"
            >
              <Stop stopColor="#8989C7" stopOpacity={0} />
              <Stop offset={0.494792} stopColor="#2C4A83" />
              <Stop offset={1} stopColor="#46465F" stopOpacity={0} />
            </LinearGradient>
          </Defs>
        </Svg>
      )}
    </IconWrapper>
  );
};

Logo.propTypes = {
  ...IconWrapper.propTypes,
};

export default Logo;
