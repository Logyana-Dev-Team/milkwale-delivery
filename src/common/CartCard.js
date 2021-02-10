import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
// import {  } from "react-native-gesture-handler";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";
const CartCard = () => {

  const [isActive, setIsActive] = useState(false);
  const [number, setNumber] = useState(1);
  const minus = () => {
    setNumber((prev) => prev - 1);
  };
  const plus = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <View>
      <View
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 17, color: "#404040" }}
              >
               Regular Milk
              </Text>
              <TouchableOpacity style={{borderWidth:1,borderColor:COLORS.primary,borderRadius:32,
              backgroundColor:COLORS.white}}>
              <Image
                source={icons.close}
                resizeMode="contain"
                style={{ width: 12, height: 12,margin:5 }}
              />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, color: "#404040" }}>1 Ltr.</Text>
            <Text style={{ fontSize: 14, color: "#404040" }}>Rs. 80</Text>
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
                alignItems: "center",
                backgroundColor: COLORS.primary,
                width: "50%",
                margin: 3,
                borderRadius: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if(number == 1)
                  setIsActive(false)
                  else
                  minus();
                }}
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

              <Text style={{ fontSize: 15, margin: 5 }}>{number}</Text>
              <TouchableOpacity
                onPress={() => {
                  // if(number == 0)
                  // setIsActive(false)
                  // else
                  plus();
                }}
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
      </View>
      <View
        style={{
          borderTopWidth: 2,
          borderTopColor: "#f5f5f5",
          marginVertical: 5,
          marginHorizontal: 20,
        }}
      ></View>
    </View>
  );
};

export default CartCard;
