import React from 'react';
import './App.css';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import {lime, orange, purple} from "@mui/material/colors";
import Search from "./components/Search/Search";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: purple,
    secondary: lime,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Button variant="contained">Primary</Button>
        <Search/>
    </div>
    </ThemeProvider>
  );
}

export default App;
