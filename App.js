import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AppContext from "./src/store/provider";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7560ec" />
      <AppContext>
        <Routes />
      </AppContext>
    </NavigationContainer>
  );
}
