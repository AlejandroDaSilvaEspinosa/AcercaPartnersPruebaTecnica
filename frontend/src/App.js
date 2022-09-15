import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import CarInventory from "./containers/CarInventory";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "./containers/MainLayout";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#446084",
      },
      secondary: {
        main: "#00a1bd",
      },
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <CarInventory />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
