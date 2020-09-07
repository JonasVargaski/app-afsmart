/* eslint-disable react/prop-types */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";

const Auth = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7560ec",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
}
