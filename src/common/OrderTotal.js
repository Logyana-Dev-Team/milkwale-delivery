import React from "react";
import { View, Text } from "react-native";

const OrderTotal = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 17, color: "#404040" }}>
        Total
      </Text>

      <Text style={{ fontSize: 14,fontWeight:'bold', color: "#404040" }}>Rs.180</Text>
    </View>
  );
};

export default OrderTotal;
