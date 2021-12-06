import React from "react";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { Store } from "./src/redux/store";

import MainRoute from "./src/routes";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <MainRoute />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
