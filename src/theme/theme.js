import { blue, green, red } from "@mui/material/colors";
import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[500],
        },
        error: {
            main: red[500],
        },
    },
});

export default appTheme;