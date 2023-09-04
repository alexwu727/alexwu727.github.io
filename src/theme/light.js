const lightTheme = {
    palette: {
        mode: "light",
        primary: {
            main: "#14213d",
            mainGradient: "linear-gradient(180deg, #ffffe977 0%, #e5fffc77 100%), linear-gradient(45deg, #e5fffc 0%, #ffffee 100%)",
        },
        secondary: {
            main: "#fca311",
        },
        inactive: {
            main: "#777777",
        },
        background: {
            default: "#ffffe9",
            paper: "#eeeeee",
        },
    },
    typography: {
        h1: {
            color: "#14213d",
            display: "block",
            textDecoration: "none",
            fontSize: "40px",
            fontWeight: "400",
            '&.pageTitle': {
                margin: "50px 0px",
                fontSize: "50px",
            }
        },
        h2: {
            color: "#14213d",
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "10px",
        },
        h3: {
            color: "#14213d",
            fontSize: "20px",
            fontWeight: "700",
        },
        h4: {
            color: "#14213d",
            fontSize: "20px",
        },
        h5: {
            color: "#14213d",
            fontSize: "16px",
        },
        body1: {
            color: "#14213d",
            fontSize: "20px",
            '&.date': {
                fontSize: "16px",
                color: "#999",
                fontStyle: "italic",
            },
            '&.withMargin': {
                margin: "20px 0px",
            },

        },
        body2: {
            color: "#14213d",
            fontSize: "16px",
            '&.techTag': {
                border: "1px solid #14213d",
                borderRadius: "4px",
                padding: "0px 5px",
                marginRight: "10px",
                height: "70%",
            }
        },
    }
};

export default lightTheme;