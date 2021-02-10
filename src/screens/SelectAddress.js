import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Separator from "../common/Separator";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const SelectAddress = (props) => {
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
          Select address
        </Text>
      </View>
    );
  };

  const Body = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: "f5f5f5",
            flex: 1,
            paddingTop: 20,
            paddingBottom: 40,
            marginBottom: 50,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("AddNewAddress");
            }}
          >
            <Text style={{ fontSize: 24, color: COLORS.primary }}>
              + Add Address
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 30,
                  width: 20,
                  height: 20,
                }}
              >
                {/* active/selected view class */}
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    width: 10,
                    height: 10,
                    margin: 4,
                    borderRadius: 10,
                  }}
                ></View>
              </TouchableOpacity>
              <View>
                <Text style={{ fontWeight: "bold" }}>Home</Text>
                <Text style={{ fontSize: 13, color: COLORS.gray }}>
                  Address,address,address
                </Text>
              </View>
            </View>
            <View>
              <Separator />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 30,
                  width: 20,
                  height: 20,
                }}
              >
                {/* active/selected view class */}
                {/* <View
                  style={{
                    backgroundColor: COLORS.primary,
                    width: 10,
                    height: 10,
                    margin: 4,
                    borderRadius: 10,
                  }}
                ></View> */}
              </TouchableOpacity>
              <View>
                <Text style={{ fontWeight: "bold" }}>Work</Text>
                <Text style={{ fontSize: 13, color: COLORS.gray }}>
                  Address,address,address
                </Text>
              </View>
            </View>
            <View>
              <Separator />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 30,
                  width: 20,
                  height: 20,
                }}
              >
                {/* active/selected view class */}
                {/* <View
                  style={{
                    backgroundColor: COLORS.primary,
                    width: 10,
                    height: 10,
                    margin: 4,
                    borderRadius: 10,
                  }}
                ></View> */}
              </TouchableOpacity>
              <View>
                <Text style={{ fontWeight: "bold" }}>Other</Text>
                <Text style={{ fontSize: 13, color: COLORS.gray }}>
                  Address,address,address
                </Text>
              </View>
            </View>

            <View>
              <Separator />
            </View>
          </View>
          <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    width: "40%",
                    borderRadius: 20,
                  }}
                  onPress={()=>{
                    props.navigation.navigate('CheckoutScreen')
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      padding: 10,
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
        </View>
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

export default SelectAddress;
