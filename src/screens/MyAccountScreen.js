import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Separator from "../common/Separator";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const MyAccountScreen = (props) => {
  const Header = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: 20,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* <View style={{ width: "10%" }}>
              <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                <Image
                  resizeMode="contain"
                  style={{ height: 23, width: 23 }}
                  source={icons.leftarrowwhite}
                />
              </TouchableOpacity>
            </View> */}

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginHorizontal: 15,
              color: COLORS.black,
            }}
          >
            My Account
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: COLORS.smoke,
              // marginHorizontal: 20,
              paddingHorizontal: 80,
            }}
          ></View>
        </View>
      </>
    );
  };

  const Body = () => {
    return (
      <>
        <View>
          <View
            style={{
              backgroundColor: COLORS.primary,
              paddingTop: 20,
              paddingBottom: 40,
              marginBottom: 50,
              height: SIZES.height * 0.3,
              width: SIZES.width,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 50, borderBottomRightRadius: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: 50,
              }}
            >
              <Image
                source={images.galgadot}
                style={{ width: 130, height: 130, borderRadius: 65 }}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={{
                  // backgroundColor: "white",
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                }}
              >
                <Image
                  source={icons.camera}
                  style={{
                    width: 25,
                    height: 25,
                    //   borderRadius:10,
                    // backgroundColor: COLORS.primary,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                margin: 5,
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.darkGray,
              }}
            >
              Madhu Sharma
            </Text>
            {/* <Text style={{ margin: 5, fontSize: 22, color: "#008080" }}>
              Credits left : 12
            </Text>
            <View style={{ width: "10%" }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SubscribeCheckout")}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: 23, width: 23 }}
                  source={icons.rightarrowblack}
                />
              </TouchableOpacity>
            </View> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              // backgroundColor:'red',
              // borderWidth: 1,
              marginVertical: 10,
              paddingHorizontal: 10,
              marginHorizontal: SIZES.width * 0.1,
            }}
          >
            <Image
              source={icons.call}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 15,
                color: COLORS.darkGray,
              }}
            >
              +91 7923892389
            </Text>
          </View>
          <Separator />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              // backgroundColor:'red',
              // borderWidth: 1,
              marginVertical: 10,
              paddingHorizontal: 10,
              marginHorizontal: SIZES.width * 0.1,
            }}
          >
            <Image
              source={icons.location}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 15,
                color: COLORS.darkGray,
              }}
            >
              Kothrud, Pune
            </Text>
          </View>
          <Separator />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              // backgroundColor:'red',
              // borderWidth: 1,
              marginVertical: 10,
              paddingHorizontal: 10,
              marginHorizontal: SIZES.width * 0.1,
            }}
          >
            <Image
              source={icons.email}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: 20 }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 15,
                color: COLORS.darkGray,
              }}
            >
              abscee@gmail.com
            </Text>
          </View>
          <Separator />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      {/* {Header()} */}
      {Body()}
    </SafeAreaView>
  );
};

export default MyAccountScreen;
