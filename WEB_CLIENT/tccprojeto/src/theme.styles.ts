import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
        primary: {
            main: "#195128",
            dark: "#11381c",
            contrastText: "#fff",
        },
        secondary: {
            main: "#D9D9D9",
            dark: "#979797",
            contrastText: "#fff",
        },
        background:{
            default: "#f7f6f3",
        }
    }
});

export default Theme;