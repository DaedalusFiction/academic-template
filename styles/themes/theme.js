import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#FFBA49",
            // main: "#fefefe",
            off: "#f7d195",
        },
        secondary: {
            main: "#1B998B",
        },
        mode: "light",
        background: {
            default: "#fefefe",
            accent: "#ffeccd",
            dark: "#ffeccd",
        },
        custom: {
            dark: "#272D2D",
            darkMuted: "#757575",
            light: "#F6F8FF",
            lightMuted: "#cacaca",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.dark}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: "EB Garamond",
            fontFamily: "Raleway",
            color: theme.palette.custom.primary,
            // color: theme.palette.primary.off,
            fontWeight: "400",
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 5vw, 7rem)",
        },
        h2: {
            color: theme.palette.custom.primary,
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            color: theme.palette.custom.primary,
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h4: {
            color: theme.palette.custom.primary,
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: theme.palette.custom.primary,
            fontFamily: "EB Garamond",
            fontSize: "1.25rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },

        subtitle1: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            color: theme.palette.custom.primaryMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.primaryMuted,
        },
        body1: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            color: theme.palette.custom.primaryMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            // color: darkTheme.palette.custom.decorative,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default theme;
