import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import HomeStackNavigator from "./src/navigations/Navigator";
import { StatusBar } from "react-native";
import { COLORS } from "./src/constants";
import axios from 'axios';
import DrawerNavigator from "./src/navigations/DrawerNavigator";

export const userId = "6034bdbbd1a5592ca0fbf5b6";
export const Axiosapi = axios.create({
  baseURL: "http://6823c44b3dc2.ngrok.io",
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor={COLORS.primary}
        translucent={false}
      />
      <DrawerNavigator />
      {/* <HomeStackNavigator /> */}
    </NavigationContainer>
  );
};
export default App;
