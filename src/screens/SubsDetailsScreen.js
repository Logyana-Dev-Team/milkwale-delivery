import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";
import Separator from "../common/Separator";
import Modal from "react-native-modal";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const SubsDetailsScreen = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function ModalTester() {
    return (
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            width: SIZES.width,
            height: SIZES.height * 0.3,
            backgroundColor: COLORS.primary,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: COLORS.white, margin: 10 }}>
              Reason for Cancellation
            </Text>
          </View>
          <View
            style={{
              width: SIZES.width - 20,
              //   borderBottomColor: "gray",
              tintColor: "black",
              height: SIZES.height,
            }}
          >
            <TextInput
              //   label="Your answer..."
              value={text}
              onChangeText={(text) => setText(text)}
              editable
              underlineColor="black"
              selectionColor="black"
              multiline
              numberOfLines={5}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              //   borderWidth: 0.5,
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              margin: 10,
              position: "absolute",
              bottom: 15,
            }}
            onPress={toggleModal}
          >
            <Text
              style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                color: COLORS.darkGray,
                fontSize: 17,
              }}
            >
              Submit & Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

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
          Subscription details
        </Text>
      </View>
    );
  };

  const Body = () => {
    return (
      <>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 50,
                margin: 20,
                overflow: "hidden",
              }}
            >
              <Image
                source={images.galgadot}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",

                  //   borderRadius: 100,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                alignItems: "center",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",

                  color: COLORS.darkGray,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Harshal Mahajan
              </Text>
              <Text
                style={{
                  alignSelf: "center",

                  color: COLORS.darkGray,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                +91 9999977777
              </Text>
            </View>
          </View>

          <Separator />

          <View style={{ flex: 1, marginHorizontal: 30 }}>
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  textDecorationLine: "underline",
                }}
              >
                Details:
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>Product Name :</Text>
              <Text style={{ fontSize: 16 }}>Milk</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>Product Quantity :</Text>
              <Text style={{ fontSize: 16 }}>2 Ltr.</Text>
            </View>
            <Separator />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Credit Left :
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>24</Text>
            </View>

            <View
              style={{
                marginHorizontal: 10,
                marginTop: 30,
                marginBottom: 10,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.location}
                  resizeMode="contain"
                  style={{ height: 12, width: 12, margin: 3 }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    textDecorationLine: "underline",
                  }}
                >
                  Deliver to :
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 13,
                    marginVertical: 5,
                    marginHorizontal: 5,
                  }}
                >
                  Lifeville, Pk chowk, BRT road, Pimple Saudagar, Pune,
                  Maharashtra 411027
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {ModalTester()}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            position: "absolute",
            width: SIZES.width,
            paddingHorizontal: 30,
            paddingVertical: 10,
            bottom: 30,
            //   borderWidth:1,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              borderColor: COLORS.darkGray,
              borderWidth: 0.5,
            }}
            onPress={toggleModal}
          >
            <Text
              style={{
                alignSelf: "center",
                paddingVertical: 10,
                paddingHorizontal: 30,
                color: COLORS.darkGray,
                fontSize: 20,

                //   fontWeight: "bold",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              borderWidth: 0.5,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              props.navigation.navigate("OrderDeliveredScreen");
            }}
          >
            <View>
              <Text
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  color: COLORS.darkGray,
                  fontSize: 20,
                }}
              >
                Delivered
              </Text>
            </View>
            <View>
              <Image
                source={icons.order}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.darkGray,
                  marginRight: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* <Checkout/> */}
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

export default SubsDetailsScreen;
