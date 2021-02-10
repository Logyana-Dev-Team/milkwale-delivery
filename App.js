import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import HomeStackNavigator from "./src/navigations/Navigator";
import { StatusBar } from "react-native";
import { COLORS } from "./src/constants";
import DrawerNavigator from "./src/navigations/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor={COLORS.primary}
        translucent={false}
      />
       <DrawerNavigator/>
      {/* <HomeStackNavigator /> */}
     
    </NavigationContainer>
  );
};
export default App;
