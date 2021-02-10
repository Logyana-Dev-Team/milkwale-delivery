import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OrderDeliveredScreen,
} from "../screens";
import TopTabNavigator from "./TopTabNavigator";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="TopTabNavigator">
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}

      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <Stack.Screen
        name="OrderDeliveredScreen"
        component={OrderDeliveredScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeStackNavigator;
