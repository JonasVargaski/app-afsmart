/* eslint-disable react/prop-types */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

const App = createStackNavigator();

export default function AppRoutes() {
  return (
    <App.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7560ec",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLayoutPreset: "center",
      }}
    >
      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard",
        }}
      />
      <App.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Configurações" }}
      />
    </App.Navigator>
  );
}
