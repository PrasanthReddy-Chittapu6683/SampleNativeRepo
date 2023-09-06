import React from "react";
import IconWrapper from "../components/IconWrapper";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = (props) => {
  return (
    <IconWrapper width={16} height={22} {...props}>
      <Svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 16 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8.415 9.105c2.36 0 4.278-1.93 4.278-4.304C12.693 2.428 10.774.5 8.415.5 6.057.5 4.14 2.43 4.14 4.804c0 2.373 1.919 4.303 4.278 4.303l-.003-.002zm0-7.593c1.804 0 3.272 1.475 3.272 3.292 0 1.816-1.466 3.291-3.272 3.291-1.805 0-3.271-1.475-3.271-3.291 0-1.817 1.466-3.292 3.271-3.292zM8.417 11.002c-4.537 0-7.584 1.99-7.584 4.952 0 3.472 2.836 5.546 7.584 5.546 4.747 0 7.583-2.074 7.583-5.546C16 12.991 12.953 11 8.417 11v.002zm0 9.527c-4.123 0-6.395-1.624-6.395-4.572 0-2.418 2.512-3.98 6.395-3.98 3.882 0 6.394 1.562 6.394 3.98 0 2.948-2.271 4.572-6.394 4.572z"
          fill="#fff"
        />
      </Svg>
    </IconWrapper>
  );
};

ProfileIcon.propTypes = {
  ...IconWrapper.propTypes,
};

export default ProfileIcon;
