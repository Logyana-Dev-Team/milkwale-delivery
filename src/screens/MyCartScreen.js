import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CartCard from "../common/CartCard";
import Checkout from "../common/Checkout";

import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const MyCartScreen = (props) => {
  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{ height: 23, width: 23 }}
              source={icons.leftarrowwhite}
            />
          </TouchableOpacity>
        </View> */}

        <Text
          style={{ fontSize: 24, fontWeight: "bold", marginHorizontal: 15,color:COLORS.black }}
        >
          My cart
        </Text>
      </View>
    );
  };
  const Body = () => {
    return (
      <>
        <ScrollView style={{ backgroundColor: "white",flex:1,paddingTop:20}}>
          {/* <View>
            <Text
              style={{
                fontSize: 22,
                color: "#606060",
                fontWeight: "bold",
                margin: 18,
              }}
            >
              My Cart
            </Text>
          </View> */}
          {/* <View
            style={{
              marginHorizontal: 20,
              marginBottom: 10,
              // borderWidth: 1,
              borderRadius: 20,
              padding: 10,
              flexDirection: "row",
              backgroundColor: "white",
              // justifyContent:"space-around"
            }}
          >
            <View>
              <Image
                source={images.milk}
                style={{ height: 100, width: 100, borderRadius: 15 }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ marginLeft: 30, paddingHorizontal: 10 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#404040" }}
                >
                  MILK
                </Text>
                <Text style={{ fontSize: 14, color: "#404040" }}>1 Ltr.</Text>
                <Text style={{ fontSize: 14, color: "#404040" }}>Rs. 180</Text>
              </View>
              <View
                style={{
                  marginLeft: 30,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundColor: COLORS.primary,
                    width: "50%",
                    margin: 3,
                    borderRadius: 30,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      margin: 3,
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={icons.minus}
                      style={{
                        width: 15,
                        height: 15,
                        // backgroundColor: "white",
                        margin: 5,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>

                  <Text style={{ fontSize: 15, margin: 5 }}>10</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      margin: 3,
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={icons.plus}
                      style={{
                        width: 15,
                        height: 15,
                        // backgroundColor: "white",
                        margin: 5,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View> */}

          {/*  */}

          <CartCard />
         
        </ScrollView>
       <Checkout navigation={props.navigation}/>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Header()}
      {Body()}
    </SafeAreaView>
  );
};

export default MyCartScreen;
