import React from "react";
import { IconButton, useTheme } from "@mui/material";
import { Brightness4 as LightIcon, Brightness7 as DarkIcon } from "@mui/icons-material";
import ColorContext from "../ColorContext";

const SwitchModeButton = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorContext);
    return (
        <IconButton
            sx={{ color: theme.palette.primary.main, }}
            onClick={colorMode.toggleColorMode}
        >
            {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
        </IconButton>
    )
}

export default SwitchModeButton