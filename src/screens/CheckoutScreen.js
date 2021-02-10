import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Separator from "../common/Separator";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const CheckoutScreen = (props) => {
  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 20,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{ height: 23, width: 23 }}
              source={icons.leftarrowwhite}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginHorizontal: 15,
            color: "white",
          }}
        >
          Checkout
        </Text>
      </View>
    );
  };

  const Body = () => {
    return (
      <>
        <ScrollView
          style={{
            backgroundColor: "f5f5f5",
            flex: 1,
            paddingTop: 20,
            paddingBottom: 40,
            marginBottom: 50,
          }}
        >
          <View>
            <View style={{ flex: 1, marginHorizontal: 30 }}>
              <View style={{ margin: 10 }}>
                {/* <Text style={{ color: COLORS.primary, fontSize: 18 }}>
                  Location
                </Text> */}
                {/* <TextInput
                  style={{
                    margin: 5,
                    height: 40,
                    borderColor: COLORS.primary,
                    borderBottomWidth: 1,
                  }}
                  underlineColorAndroid="transparent"
                  placeholder="Location"
                  placeholderTextColor={COLORS.gray}
                  autoCapitalize="none"
                  onChangeText={() => {}}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 15,
                }}
              >
                <Text style={{ fontSize: 16 }}>Item Total</Text>
                <Text style={{ fontSize: 16 }}>Rs. 80</Text>
              </View>
              <Separator />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 15,
                }}
              >
                <Text style={{ fontSize: 16 }}>Taxes and Charges</Text>
                <Text style={{ fontSize: 16 }}>Rs. 80</Text>
              </View>
              <Separator />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 15,
                }}
              >
                <Text style={{ fontSize: 16 }}>Delivery Charges</Text>
                <Text style={{ fontSize: 16 }}>Rs. 80</Text>
              </View>
              <Separator />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 15,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Grand Total
                </Text>
                <Text style={{ fontSize: 16 }}>Rs. 80</Text>
              </View>
              <Separator />
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: COLORS.gray,
                padding: 15,
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.darkGray,
                }}
              >
                Payment With
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingLeft: 10,
                  }}
                >
                  <Image
                    source={icons.cod}
                    resizeMode="contain"
                    style={{ width: 30, height: 30, margin: 15 }}
                  />
                  <Text style={{ margin: 15, fontSize: 18 }}>
                    Cash On delivery
                  </Text>
                </View>

                <Image
                  source={icons.rightarrowblack}
                  resizeMode="contain"
                  style={{ width: 23, height: 23, margin: 15 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => props.navigation.navigate("OrderConfirmedScreen")}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    paddingLeft: 10,
                  }}
                >
                  <Image
                    source={icons.payment}
                    resizeMode="contain"
                    style={{ width: 30, height: 30, margin: 15 }}
                  />
                  <Text style={{ margin: 15, fontSize: 18 }}>Pay Online</Text>
                </View>

                <Image
                  source={icons.rightarrowblack}
                  resizeMode="contain"
                  style={{ width: 23, height: 23, margin: 15 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        {/* <Checkout/> */}
      </>
    );
  };

  return (
    <>
      {Header()}
      {Body()}
    </>
  );
};

export default CheckoutScreen;
