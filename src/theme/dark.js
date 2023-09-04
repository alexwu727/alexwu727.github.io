// import { ThemeOptions } from '@mui/material';

const darkTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#eeeeee',
            mainGradient: 'linear-gradient(180deg, #071e26dd 0%, #010b16dd 500px, #03101fdd 100%)',
            sideGradient: "linear-gradient(90deg, #ffffff4d 0%, #ffffff00 80%)"
        },
        secondary: {
            main: '#fca311',
        },
        inactive: {
            main: '#777777',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
        horizontalLine: {
            left: "linear-gradient(90deg, #eeeeeeff 0%, #eeeeee00 80%)",
            right: "linear-gradient(270deg, #eeeeeeff 0%, #eeeeee00 80%)",
        },
    },
    typography: {
        h1: {
            color: "#eeeeee",
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
            color: "#eeeeee",
            fontSize: "30px",
            fontWeight: "700",
        },
        h3: {
            color: "#eeeeee",
            fontSize: "20px",
            fontWeight: "700",
        },
        h4: {
            color: "#eeeeee",
            fontSize: "20px",
        },
        h5: {
            color: "#eeeeee",
            fontSize: "16px",
        },
        body1: {
            color: "#eeeeee",
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
            color: "#eeeeee",
            fontSize: "16px",
            '&.techTag': {
                border: "1px solid #eeeeee",
                borderRadius: "4px",
                padding: "0px 5px",
                marginRight: "10px",
                height: "70%",
            }
        },
    }
};

export default darkTheme;