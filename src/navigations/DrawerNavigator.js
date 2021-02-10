import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import HomeStackNavigator from "./Navigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackNavigator"
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
      }}
      drawerStyle={{
        drawerBackgroundColor: "transparent",
        opacity: 0.8,
        backgroundColor: 'black',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        navigation={navigation}
      />
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      {/* <Drawer.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Drawer.Screen name="MyCartScreen" component={MyCartScreen} />
      <Drawer.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
      <Drawer.Screen name="MyAccountScreen" component={MyAccountScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
