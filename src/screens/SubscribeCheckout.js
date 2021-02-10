import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";
import Modal from "react-native-modal";
import ModalSelector from "react-native-modal-selector";

import Checkout from "../common/Checkout";
import { Switch } from "react-native-gesture-handler";

const SubscribeCheckout = (props) => {
  // const [isActive, setIsActive] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [state, setstate] = useState("");
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  const data1 = [
    { key: index1++, section: true, label: "Choose Quantity" },
    { key: index1++, label: " 0.5 Litres" },

    {
      key: index1++,
      label: " 1 Litres",
      accessibilityLabel: "Tap here for cranberries",
    },

    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index1++, label: " 2 Litres", customKey: "Not a fruit" },
    { key: index1++, label: " 3 Litres" },
  ];
  const data2 = [
    { key: index2++, section: true, label: "Choose Subscriptions" },
    { key: index2++, label: "Platinum" },

    {
      key: index2++,
      label: "Gold",
      accessibilityLabel: "Tap here for cranberries",
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index2++, label: "Silver", customKey: "Not a fruit" },
  ];
  const data3 = [
    { key: index3++, section: true, label: "Select morning delivery time" },
    { key: index3++, label: "6.00 - 7.00 AM" },
    {
      key: index3++,
      label: "7.00 - 8.00 AM",
      accessibilityLabel: "Tap here for cranberries",
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index3++, label: "8.00 - 9.00 AM", customKey: "Not a fruit" },
    { key: index3++, label: "9.00 - 10.00 AM", customKey: "Not a fruit" },
  ];
  const data4 = [
    { key: index4++, section: true, label: "Select evening delivery time" },
    { key: index4++, label: "6.00 - 7.00 pm" },
    {
      key: index4++,
      label: "7.00 - 8.00 pm",
      accessibilityLabel: "Tap here for cranberries",
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index4++, label: "8.00 - 9.00 pm", customKey: "Not a fruit" },
  ];

  const select = (data) => {
    const [textInputValue, setValue] = useState("");
    {
      // let index = 0;
      // const data = [
      //   { key: index++, section: true, label: "Choose Subscriptions" },

      //   { key: index++, label: "Cherries" },

      //   {
      //     key: index++,
      //     label: "Cranberries",
      //     accessibilityLabel: "Tap here for cranberries",
      //   },
      //   // etc...
      //   // Can also add additional custom keys which are passed to the onChange callback
      //   { key: index++, label: "Vegetable", customKey: "Not a fruit" },
      // ];

      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // paddingVertical: 0,
            borderRadius: 10,
            width: "100%",
            borderWidth: 1.5,
            borderColor: COLORS.primary,
            // marginVertical: 2,
          }}
        >
          <ModalSelector
            data={data}
            initValue="Select something yummy!"
            // keyExtractor={(item) => item.id}
            accessible={true}
            scrollViewAccessibilityLabel="Scrollable options"
            cancelButtonAccessibilityLabel="Cancel Button"
            onChange={(option) => {
              setValue(option.label);
            }}
            style={{
              backgroundColor: "white",
              width: "100%",
              borderRadius: 10,
            }}
          >
            <TextInput
              style={{
                // borderWidth: 1,
                // borderColor: "#ccc",
                padding: 10,
                height: 40,
              }}
              // editable={false}
              placeholder="Choose field"
              value={textInputValue}
            />
          </ModalSelector>
        </View>
      );
    }
  };

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
          <TouchableOpacity onPress={() => props.navigation.navigate("Tabs")}>
            <Image
              resizeMode="contain"
              style={{ height: 23, width: 23 }}
              source={icons.leftarrowblack}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginHorizontal: 15,
            color: COLORS.black,
          }}
        >
          SubscribeCheckout
        </Text>
      </View>
    );
  };
  const picker = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: COLORS.bg,
            // borderWidth: 1,
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // paddingVertical: 0,
              borderRadius: 5,
              width: "80%",
              borderWidth: 1,
              borderColor: COLORS.primary,
              // marginVertical: 2,
            }}
          >
            <Text style={{ fontSize: 15, padding: 8, color: "black" }}>
              1 Ltr.- Rs. 80
            </Text>
            <Image
              source={icons.arrowDownGreen}
              resizeMode="contain"
              style={{ height: 10, width: 10, marginHorizontal: 4 }}
            />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          deviceWidth={SIZES.width}
          deviceHeight={SIZES.height}
          onBackdropPress={() => setModalVisible(false)}
          //custom backdrop clears the default background while Modal is open
          // Have to set the background manually
          // customBackdrop={
          //   <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          //     <View style={{ flex: 1 ,}} />
          //   </TouchableWithoutFeedback>
          // }
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: COLORS.bg,
            // borderWidth: 1,
            borderRadius: 10,
            marginVertical: 300,
          }}
        >
          <View
            style={{
              // borderWidth: 1,
              height: "100%",
              borderRadius: 10,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                width: "90%",
                borderWidth: 1,
                borderColor: COLORS.gray,
                borderRadius: 10,
                marginVertical: 5,
                marginHorizontal: 20,
                padding: 5,
              }}
            >
              <Text
                style={{
                  padding: 10,
                }}
              >
                1 ltr. - Rs. 60
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                width: "90%",
                borderWidth: 1,
                borderRadius: 10,
                borderColor: COLORS.gray,
                marginVertical: 5,
                marginHorizontal: 20,
                padding: 10,
              }}
            >
              <Text
                style={{
                  padding: 5,
                }}
              >
                2 ltr. - Rs. 120
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVariant();
                setModalVisible(false);
              }}
              style={{
                width: "90%",
                borderWidth: 1,
                borderRadius: 10,
                borderColor: COLORS.gray,
                marginVertical: 5,
                marginHorizontal: 20,
                padding: 10,
              }}
            >
              <Text
                style={{
                  padding: 5,
                }}
              >
                3 ltr. - Rs. 180
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </>
    );
  };
  const Body = () => {
    const [value, setValue] = useState("");
    const [items, setItems] = useState(["one", "two"]);
    let controller;
    return (
      <>
        {/* <View
          style={{
            backgroundColor: "white",
            borderWidth:1,
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // paddingVertical: 0,
          borderRadius: 5,
          width: "100%",
          borderWidth: 1,
          borderColor: COLORS.primary,
          // marginVertical: 2,
        }}
      >
        <Text style={{ fontSize: 12, padding: 2, color: "black" }}>
          1 Ltr.-{" "}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: COLORS.primary,
            paddingLeft: 2,
          }}
        >
          Rs. 80
        </Text>
        <Image
          source={icons.arrowDownGreen}
          resizeMode="contain"
          style={{ height: 10, width: 10, marginHorizontal: 4 }}
        />
      </TouchableOpacity>
        </View>
        <Modal
        isVisible={isModalVisible}
        deviceWidth={SIZES.width}
        deviceHeight={SIZES.height}
        onBackdropPress={() => setModalVisible(false)}
        //custom backdrop clears the default background while Modal is open
        // Have to set the background manually
        // customBackdrop={
        //   <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        //     <View style={{ flex: 1 ,}} />
        //   </TouchableWithoutFeedback>
        // }
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.bg,
          // borderWidth: 1,
          borderRadius: 10,
          marginVertical: 300,
        }}
      >
        <View
          style={{
            // borderWidth: 1,
            height: "100%",
            borderRadius: 10,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              width: "90%",
              borderWidth: 1,
              borderColor: COLORS.gray,
              borderRadius: 10,
              marginVertical: 5,
              marginHorizontal: 20,
              padding: 5,
            }}
          >
            <Text
              style={{
                padding: 10,
              }}
            >
              1 ltr. - Rs. 60
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              width: "90%",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: COLORS.gray,
              marginVertical: 5,
              marginHorizontal: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                padding: 5,
              }}
            >
              2 ltr. - Rs. 120
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVariant();
              setModalVisible(false);
            }}
            style={{
              width: "90%",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: COLORS.gray,
              marginVertical: 5,
              marginHorizontal: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                padding: 5,
              }}
            >
              3 ltr. - Rs. 180
            </Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginRight: 30,
              marginVertical: 30,
              backgroundColor: COLORS.back,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                color: COLORS.black,
                fontWeight: "bold",
                paddingVertical: 10,
                paddingHorizontal:25,
              }}
            >
              Customize your subscription
            </Text>
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.darkGray,
                paddingVertical: 10,
              }}
            >
              How many litres
            </Text>
            {select(data1)}
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.darkGray,
                paddingVertical: 10,
              }}
            >
              Choose Subscription package
            </Text>
            {select(data2)}
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.darkGray,
                paddingVertical: 10,
              }}
            >
              Select morning delivery time
            </Text>
            {select(data3)}
          </View>
          <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.darkGray,
                paddingVertical: 10,
              }}
            >
              Select evening delivery time
            </Text>
            {select(data4)}
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Header()}
      {Body()}

      <Checkout navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default SubscribeCheckout;
