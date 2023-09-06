import { extendTheme } from "native-base";
import { colors } from "./colors";
import { apolloColors } from "./apolloColors";
import {
  TOUCHABLE_HITSLOP_VALUE,
  TOUCHABLE_OPACITY_VALUE,
} from "../components/Touchable";

const themeFlag = "apollo";

export const themeConfig = {
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  space: {
    page: "21px",
    modal: "16px",
  },
  ...(themeFlag === "apollo" ? apolloColors : colors),
  fonts: {
    light: "Roboto_300Light",
    regular: "Roboto_400Regular",
    medium: "Roboto_400Regular",
    bold: "Roboto_500Medium",
    alt: "Rochester_400Regular", 
  },
  fontSizes: {
    page: "25px",
    title: "21px",
    title2: "18px",
    title3: "15px",
    subTitle: "13px",
    section: "12px",
    sm: "11px",
    xs: "9px",
  },
  components: {
    Box: {
      variants: {
        outlined: {
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.25)",
        },
      },
    },
    Button: {
      baseStyle: {
        bg: "transparent",
        background: "transparent",
        borderWidth: "1px",
        borderColor: themeFlag === "apollo" ? apolloColors.buttons.base.dark : colors.buttons.base.dark,
        paddingTop: 4,
        paddingBottom: 4,
        _light: {
          bg: "accent.325",
          background: "accent.325",
          borderColor: colors.buttons.base.light,
        },
        _pressed: {
          opacity: TOUCHABLE_OPACITY_VALUE,
        },
        _text: {
          textTransform: "uppercase",
          _light: {
            color: "white",
          },
        },
      },
      defaultProps: {
        hitSlop: TOUCHABLE_HITSLOP_VALUE,
        _text: {
          fontFamily: "medium",
        },
      },
      sizes: {
        page: {
          _text: {
            fontSize: "13px",
            letterSpacing: "2px",
          },
        },
        cta: {
          borderRadius: "80px",
          borderColor: "accent.325",
          h: "32px",
          paddingTop: 0,
          paddingBottom: 0,
          _text: {
            color: "white",
            fontSize: "11px",
            letterSpacing: "0.5px",
            px: 4,
            py: 0,
            textTransform: "none",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "medium",
        color: colors.headings.base.dark,
        letterSpacing: "3px",
        textTransform: "uppercase",
        _light: {
          color: colors.headings.base.light,
        },
      },
      defaultProps: {
        allowFontScaling: false,
      },
      sizes: {
        hero: {
          fontSize: "24px",
          letterSpacing: "5px",
        },
        page: {
          fontSize: "page",
          textTransform: "none",
          letterSpacing: 0.1,
          fontFamily: "light",
        },
        lowerLight: {
          textTransform: "none",
          letterSpacing: 0.1,
          fontFamily: "light",
        },
        lowerRegular: {
          textTransform: "none",
          letterSpacing: 0.1,
          fontFamily: "regular",
        },
        title: {
          fontSize: "title",
        },
        title2: {
          fontSize: "title2",
        },
        title3: {
          fontSize: "title3",
        },
        title3Lower: {
          fontSize: "title3",
          letterSpacing: "0.5px",
          textTransform: "none",
        },
        subTitle: {
          fontSize: "subTitle",
          letterSpacing: "1px",
          _dark: {
            color: colors.headings.subTitle.dark,
          },
          _light: {
            color: colors.headings.subTitle.light,
          },
        },
        sm: {
          fontSize: "subTitle",
          letterSpacing: "1px",
        },
        xs: {
          fontSize: "section",
          letterSpacing: "1px",
        },
        section: {
          fontSize: "section",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "regular",
        color: "white",
        _light: {
          color: "black",
        },
      },
      defaultProps: {
        allowFontScaling: false,
      },
      variants: {
        subTitle: {
          fontSize: "subTitle",
          _dark: {
            color: colors.headings.subTitle.dark,
          },
          _light: {
            color: colors.headings.subTitle.light,
          },
        },
        bold: {
          fontFamily: "bold",
        },
        gray: {
          color: "gray.300",
          _light: {
            color: "gray.600",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        fontFamily: "regular",
        _focus: {
          borderColor: "accent.300",
        },
      },
      defaultProps: {
        variant: "underlined",
        fontSize: "title3",
      },
      variants: {
        filled: {
          _dark: {
            color: "black",
            backgroundColor: "white",
          },
          _light: {
            backgroundColor: "gray.100",
          },
        },
        underlined: {
          p: 0,
          _dark: {
            _focus: {
              bg: "transparent",
              color: "white",
              borderColor: colors.borders.inputs.dark,
            },
          },
          _light: {
            bg: "transparent",
            _focus: {
              bg: "transparent",
              borderColor: colors.borders.inputs.light,
            },
          },
        },
        outline: {
          _dark: {
            _focus: {
              bg: "transparent",
              color: "white",
              borderColor: colors.borders.inputs.dark,
            },
          },
          _light: {
            bg: "transparent",
            _focus: {
              bg: "transparent",
              borderColor: colors.borders.inputs.light,
            },
          },
        },
      },
    },
    TextArea: {
      baseStyle: {
        fontFamily: "regular",
        py: 2,
      },
      variants: {
        underlined: {
          _dark: {
            _focus: {
              bg: "transparent",
              color: "white",
              borderColor: colors.borders.inputs.dark,
            },
          },
          _light: {
            bg: "transparent",
            _focus: {
              bg: "transparent",
              borderColor: colors.borders.inputs.light,
            },
          },
        },
      },
    },
    Checkbox: {
      defaultProps: {
        _checked: {
          bg: "white",
          borderColor: "white",
        },
        _focus: {
          borderColor: "white",
        },
        _icon: {
          color: "black",
        },
      },
      baseStyle: {
        bg: "transparent",
        background: "transparent",
        borderColor: "rgba(255,255,255,0.6)",
        _text: {
          color: "white",
        },
      },
    },
    Divider: {
      baseStyle: {
        backgroundColor: "white",
        opacity: 0.25,
        _light: {
          backgroundColor: "#5E636740",
        },
      },
    },
    Spinner: {
      baseStyle: {
        color: "white",
        _light: {
          color: "black",
        },
      },
    },
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.5,
        },
      },
    },
  },
};
const theme = extendTheme(themeConfig);

export default theme;
