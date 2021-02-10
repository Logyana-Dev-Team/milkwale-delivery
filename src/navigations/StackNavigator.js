import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Header from "../components/Header";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="PreviousOrderScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen
        name="TopTabScreen"
        component={TopTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { StackNavigator };
