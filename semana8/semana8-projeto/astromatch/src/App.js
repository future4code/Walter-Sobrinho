import React from "react";
import { AppContainer } from "./components/AppContainer";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Jost from "./Font/Jost-VariableFont_ital,wght.ttf";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004275",
    },
    secondary: {
      light: "#fcd0a7",
      main: "#a58375",
    },
  },
});

const jost = {
  fontFamily: "Jost",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Jost'),
    local('Jost-Regular'),
    url(${Jost}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

function App() {
  return <AppContainer />;
}

export default App;
