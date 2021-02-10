  
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {MyAccountScreen, MyOrdersScreen,MySubscriptions, OrderDetailsScreen } from "../screens";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50, marginTop: 10 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.user}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              flexDirection: "row",
            }}
          >
            <Text>Search by....</Text>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                marginLeft: 10,
              }}
            />
          </View>
        </View>

        {/* <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    );
  }
  return (
    <Tab.Navigator
      initialRouteName="My Subscription"
      // lazyLoad={true}
      // tabBarPosition="top"
      // swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: COLORS.black,
        style: {
          backgroundColor: COLORS.primary,
          padding:10,
        },
        
        indicatorStyle: {
          backgroundColor: COLORS.black,
          height: 3,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize:16,
          textTransform:'none'
        },
        showIcon: true,
        
      }}
    >
    
      <Tab.Screen name="Current orders" component={MyOrdersScreen} />
      <Tab.Screen name="Subscription orders" component={MySubscriptions} />
      <Tab.Screen name="My Account" component={MyAccountScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({});