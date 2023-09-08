import { useColorMode } from "native-base";
import { path } from "ramda";

export const apolloColors = {
    naveen: {
        100: "#fff",
    },
    primary: {
        400: "#FEF8F3",
        600: "#1B1B20",
        800: "#171722",
        900: "#010101"
    },
    gray: {
        100: "#010101",
        200: "#D9D9D9",
        300: "#DADADA",
        400: "#C2BFC8",
        500: "#BABABA",
        600: "#5C5369",
        700: "#616161",
        800: "#212121",
    },
    accent: {
        75: "#A9C1D8",
        100: "#EEFFCA",
        150: "#E4E4FB",
        200: "#7C7C7C",
        250: "#A69CC4",
        275: "rgba(89, 62, 168, 0.7)",
        300: "#706FCF",
        325: "#906AFF",
        350: "#614AA8",
        400: "#466584",
        450: "#3A546C",
        475: "#657183",
        500: "#3E3E76",
        525: "rgba(73, 69, 177, 0.58)",
    },
    accentSecondary: {
        300: "#8EFA8B",
        400: "#598127",
    },
    error: {
        400: "#FA5B64",
    },
    success: {
        400: "#7BCD79",
    },
    gradients: {
        100: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
            },
        },
        400: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
            },
        },
        450: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
            },
        },
        500: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
                start: [1, 0],
                end: [1, 1],
            },
        },
        600: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
            },
        },
        800: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
                start: [1, 0],
                end: [1, 1],
            },
        },
        850: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
                start: [1, 0],
                end: [1, 1],
            },
        },
        900: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
                start: [1, 0],
                end: [1, 1],
            },
        },
        950: {
            linearGradient: {
                colors: ["#FEF8F3", "#FEF8F3"],
                start: [1, 0],
                end: [1, 1],
            },
        },
    },
    // * below are color mode variants for specific components and variants. CANNOT BE USED AS STRING VALUES IN COMPONENTS. USE useColor function below or direct access on object
    buttons: {
        base: {
            dark: "accent.325",
            light: "accent.300",
        },
    },
    headings: {
        base: {
            dark: "#010101",
            light: "accent.500",
        },
        subTitle: {
            dark: "#7C7C7C",
            light: "accent.450",
        },
        section: {
            dark: "accent.100",
            light: "accent.300",
        },
    },
    borders: {
        inputs: {
            dark: "accent.300",
            light: "accent.325",
        },
        sections: {
            dark: "accent.200",
            light: "accent.400",
        },
        muted: {
            dark: "rgba(169, 193, 216, 0.25)",
            light: "accent.200",
        },
        opaque: {
            dark: "rgba(255,255,255,0.3)",
            light: "rgba(0,0,0,0.3)",
        },
    },
};

export const resolveColor = (prop) => {
    const parts = prop?.split?.(".") || [];

    return path(parts, apolloColors) || prop;
};

export const useColor = (prop) => {
    const { colorMode } = useColorMode();
    return resolveColor(`${prop}.${colorMode}`);
};
