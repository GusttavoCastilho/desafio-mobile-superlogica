import React from "react";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import theme from "./src/styles/theme";
import TabBarNavigation from "./src/routes/TabBarNavigation";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <TabBarNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
