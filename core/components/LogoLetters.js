import React from "react";
import IconWrapper from "./IconWrapper";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import { useColorMode } from "native-base";
import { useColorScheme } from "react-native";

const LogoLetters = (props) => {
  const width = props.width || 68;
  const { colorMode } = useColorMode();
  const colorScheme = useColorScheme();
  return (
    <IconWrapper
      {...{
        ...props,
        width,
      }}
    >
      {(colorMode === "dark" && (
        <Svg
          width={"100%"}
          height={"100%"}
          viewBox="0 0 66 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G clipPath="url(#clip0_11_111)">
            <Path
              d="M18.698 11.96h-7.433V6.858h6.344a.106.106 0 00.105-.106V5.96a.106.106 0 00-.105-.106h-6.344V1.04h7.273a.106.106 0 00.105-.106V.106A.106.106 0 0018.538 0h-8.29a.106.106 0 00-.104.106v12.788c0 .058.047.106.105.106h8.45a.106.106 0 00.104-.106v-.829a.106.106 0 00-.105-.105zM31.948.872C31.048.293 29.901 0 28.542 0h-4.216a.106.106 0 00-.105.106v12.788c0 .058.048.106.105.106h4.216c1.24 0 2.334-.271 3.25-.806a5.445 5.445 0 002.132-2.277c.494-.972.744-2.127.744-3.435 0-1.187-.23-2.283-.68-3.26a5.48 5.48 0 00-2.04-2.35zm1.598 5.61c0 1.025-.192 1.963-.57 2.793a4.542 4.542 0 01-1.686 1.963c-.742.479-1.665.722-2.748.722h-3.2V1.04h3.2c1.071 0 1.986.235 2.723.695a4.518 4.518 0 011.694 1.929c.39.822.588 1.77.588 2.818zM49.782 0h-.911a.106.106 0 00-.105.106v10.953L40.11.04a.105.105 0 00-.082-.04h-.75a.106.106 0 00-.105.106v12.788c0 .058.047.106.105.106h.91a.106.106 0 00.106-.106V2.121l8.511 10.839c.02.025.05.04.082.04h.894a.106.106 0 00.105-.106V.106A.106.106 0 0049.782 0zM65.992 12.853L60.632.065A.105.105 0 0060.536 0h-.786a.106.106 0 00-.097.065l-5.395 12.788a.105.105 0 00.01.1c.018.029.052.047.087.047h.982c.042 0 .081-.025.097-.066l1.709-4.149h5.988l1.703 4.15c.015.038.054.065.096.065h.965a.104.104 0 00.087-.048.105.105 0 00.01-.1zm-3.258-5.036h-5.192l2.6-6.318 2.592 6.318z"
              fill="#fff"
            />
            <Path
              d="M.86 12.894H0c0-1.29.896-1.926 1.687-2.487.709-.502 1.322-.936 1.322-1.777 0-.842-.613-1.275-1.322-1.777C.897 6.293 0 5.658 0 4.367c0-1.29.896-1.925 1.687-2.484.709-.502 1.32-.936 1.32-1.776h.86c0 1.29-.896 1.925-1.687 2.485-.709.502-1.32.935-1.32 1.775 0 .84.612 1.275 1.322 1.778.79.56 1.686 1.195 1.686 2.487 0 1.291-.896 1.926-1.686 2.486-.71.502-1.322.937-1.322 1.777v-.001z"
              fill="#EEFFCA"
            />
            <Path
              d="M3.868 12.894h-.86c0-.841-.612-1.274-1.321-1.777C.897 10.557 0 9.922 0 8.631c0-1.292.896-1.927 1.687-2.487.709-.502 1.322-.937 1.322-1.778S2.396 3.093 1.688 2.59C.896 2.031 0 1.396 0 .106h.86c0 .84.612 1.273 1.32 1.776.79.56 1.687 1.195 1.687 2.484 0 1.29-.896 1.926-1.687 2.487C1.471 7.355.86 7.789.86 8.63c0 .84.612 1.274 1.321 1.777.79.56 1.687 1.195 1.687 2.487h.001z"
              fill="#EEFFCA"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_11_111">
              <Path fill="#fff" d="M0 0H66V13H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      )) || (
        <Svg
          width={"100%"}
          height={"100%"}
          viewBox="0 0 66 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G clipPath="url(#clip0_26_294)">
            <Path
              d="M18.698 11.96h-7.433V6.858h6.344a.106.106 0 00.105-.106V5.96a.106.106 0 00-.105-.106h-6.344V1.04h7.273a.106.106 0 00.105-.106V.106A.106.106 0 0018.538 0h-8.29a.106.106 0 00-.104.106v12.788c0 .058.047.106.105.106h8.45a.106.106 0 00.104-.106v-.829a.106.106 0 00-.105-.105zM31.948.872C31.048.293 29.901 0 28.542 0h-4.216a.106.106 0 00-.105.106v12.788c0 .058.048.106.105.106h4.216c1.24 0 2.334-.271 3.25-.806a5.445 5.445 0 002.132-2.277c.494-.972.744-2.127.744-3.435 0-1.187-.23-2.283-.68-3.26a5.48 5.48 0 00-2.04-2.35zm1.598 5.61c0 1.025-.192 1.963-.57 2.793a4.542 4.542 0 01-1.686 1.963c-.742.479-1.665.722-2.748.722h-3.2V1.04h3.2c1.071 0 1.986.235 2.723.695a4.518 4.518 0 011.694 1.929c.39.822.588 1.77.588 2.818zM49.782 0h-.911a.106.106 0 00-.105.106v10.953L40.11.04a.105.105 0 00-.082-.04h-.75a.106.106 0 00-.105.106v12.788c0 .058.047.106.105.106h.91a.106.106 0 00.106-.106V2.121l8.511 10.839c.02.025.05.04.082.04h.894a.106.106 0 00.105-.106V.106A.106.106 0 0049.782 0zM65.992 12.853L60.632.065A.105.105 0 0060.536 0h-.786a.106.106 0 00-.097.065l-5.395 12.788a.105.105 0 00.01.1c.018.029.052.047.087.047h.982c.042 0 .081-.025.097-.066l1.709-4.149h5.988l1.703 4.15c.015.038.054.065.096.065h.965a.104.104 0 00.087-.048.105.105 0 00.01-.1zm-3.258-5.036h-5.192l2.6-6.318 2.592 6.318z"
              fill="#46465F"
            />
            <Path
              d="M.86 12.894H0c0-1.29.896-1.926 1.687-2.487.709-.502 1.322-.936 1.322-1.777 0-.842-.613-1.275-1.322-1.777C.897 6.293 0 5.658 0 4.367c0-1.29.896-1.925 1.687-2.484.709-.502 1.32-.936 1.32-1.776h.86c0 1.29-.896 1.925-1.687 2.485-.709.502-1.32.935-1.32 1.775 0 .84.612 1.275 1.322 1.778.79.56 1.686 1.195 1.686 2.487 0 1.291-.896 1.926-1.686 2.486-.71.502-1.322.937-1.322 1.777v-.001z"
              fill="#706FCF"
            />
            <Path
              d="M3.868 12.894h-.86c0-.841-.612-1.274-1.321-1.777C.897 10.557 0 9.922 0 8.631c0-1.292.896-1.927 1.687-2.487.709-.502 1.322-.937 1.322-1.778S2.396 3.093 1.688 2.59C.896 2.031 0 1.396 0 .106h.86c0 .84.612 1.273 1.32 1.776.79.56 1.687 1.195 1.687 2.484 0 1.29-.896 1.926-1.687 2.487C1.471 7.355.86 7.789.86 8.63c0 .84.612 1.274 1.321 1.777.79.56 1.687 1.195 1.687 2.487h.001z"
              fill="#706FCF"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_26_294">
              <Path fill="#fff" d="M0 0H66V13H0z" />
            </ClipPath>
          </Defs>
        </Svg>
      )}
    </IconWrapper>
  );
};

LogoLetters.propTypes = {
  ...IconWrapper.propTypes,
};

export default LogoLetters;