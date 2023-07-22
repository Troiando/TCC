import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.styles";
import { Box } from "@mui/material";
import Home from "./pages/Home/Home";

const App = () =>{
    return (
        <ThemeProvider theme={theme}>
            <Box
                width="100vw"
                height="100vh"
                bgcolor={theme.palette.background.default}
            >
                <Home />
            </Box>
        </ThemeProvider>
    );
};

export default App;
