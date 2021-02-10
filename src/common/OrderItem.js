import React from "react";
import { View, Text } from "react-native";

const OrderItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#404040" }}>
          MILK
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#404040",
            marginVertical: 3,
            marginHorizontal: 5,
          }}
        >
          1 Ltr.
        </Text>
      </View>

      <Text style={{ fontSize: 14, color: "#404040" }}>x 2 units</Text>
    </View>
  );
};

export default OrderItem;
