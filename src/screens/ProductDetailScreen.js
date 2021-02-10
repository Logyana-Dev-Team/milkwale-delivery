import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";
import Card from "../common/Card";
import AddToWishlist from "../common/AddToWishlist";
import ModalSelector from "react-native-modal-selector";

function ProductDetailScreen(props) {
  const [state, setState] = useState({
    quantity: null,
  });

  const addQuantity = (quantity) => {
    setState({ quantity: state.quantity + 1 });
  };
  const subtractQuantity = (quantity) => {
    if (state.quantity > 0) {
      setState({ quantity: state.quantity - 1 });
    }
  };
  const [textInputValue, setValue] = useState("");

  let index1 = 0;
  const data1 = [
    { key: index1++, section: true, label: "Choose Quantity" },
    { key: index1++, label: "0.5 Ltr." },

    {
      key: index1++,
      label: "1 Ltr.",
      accessibilityLabel: "Tap here for cranberries",
    },

    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index1++, label: "2 Ltr.", customKey: "Not a fruit" },
    { key: index1++, label: "3 Ltr." },
  ];
  return (
    <View style={{ backgroundColor: "#F5F5F5", marginBottom: 35 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginTop: 20,
          // marginHorizontal: 20,
          // margin: 10,
          // height:'10%',
          padding: 15,
          backgroundColor: COLORS.primary,
        }}
      >
        <View style={{ width: "10%" }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={{ height: 25, width: 25 }}
              source={icons.leftarrowblack}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              source={images.milkbottle}
              style={{ height: 25, width: 25 }}
            />
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 24,
              }}
            >
              Milk
            </Text>
          </View>
        </View>
        <View style={{ width: "12%" }}>
          <AddToWishlist />
        </View>
      </View>
      <ScrollView style={{ marginBottom: 40 }}>
        <Image
          source={images.milk3}
          resizeMode="contain"
          style={{
            height: SIZES.height * 0.3,
            width: SIZES.width,
            alignSelf: "center",
            padding: 10,
            margin: 10,
          }}
        />
        {/* <View
                    style={{
                        flexDirection:"row",
                        alignSelf:"center",
                        alignItems:"center",
                        backgroundColor:"#f6f3fb",
                        paddingHorizontal:20,
                        paddingVertical:8,
                        borderRadius:20
                    }}
                   >
                      <TouchableOpacity
                       onPress={addQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>+</Text>
                      </TouchableOpacity> 
                      
                      <Text style={{
                          fontSize:18,
                          fontWeight:"bold",
                          paddingHorizontal:20
                      }}>
                          {state.quantity}
                      </Text>

                      <TouchableOpacity
                       onPress={subtractQuantity}
                      >
                          <Text style={{
                              fontWeight:"bold",
                              fontSize:18
                          }}>-</Text>
                      </TouchableOpacity> 
                   </View> */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 25,
            marginTop: 10,
            // borderWidth:1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "grey",
              alignSelf: "flex-start",
            }}
          >
            Milk
          </Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              marginLeft: 80,
              alignSelf: "flex-end",
              color: COLORS.primary,
            }}
          >
            Rs. 60
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 20,
            // marginTop: 30,
            // borderWidth: 1,
          }}
        >
          <ModalSelector
            data={data1}
            initValue="Select something yummy!"
            // keyExtractor={(item) => item.id}
            accessible={true}
            scrollViewAccessibilityLabel="Scrollable options"
            cancelButtonAccessibilityLabel="Cancel Button"
            onChange={(option) => {
              setValue(option.label);
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // paddingHorizontal: 0,
              // paddingVertical: 3,
              borderRadius: 15,
              // width: 80,
              borderWidth: 1,
              backgroundColor: "white",
              width: "20%",
              borderRadius: 10,
              borderColor: COLORS.primary,
              //   marginHorizontal: SIZES.padding,
              // marginVertical: 4,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  // borderWidth: 1,
                  // borderColor: "#ccc",
                  margin: 4,
                  height: 40,
                }}
                editable={true}
                placeholder="1 Ltr."
                value={textInputValue}
              />

              <Image
                source={icons.arrowDownBlack}
                resizeMode="contain"
                style={{ height: 13, width: 13 }}
              />
            </View>
          </ModalSelector>
          {/* <TouchableOpacity
            onPress={() => {
             
            }}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 0,
              paddingVertical: 3,
              borderRadius: 15,
              width: 80,
              borderWidth: 1,
              borderColor: COLORS.primary,
              //   marginHorizontal: SIZES.padding,
              marginVertical: 4,
            }}
          >
            <Text>1 Ltr.</Text>
            <Image
              source={icons.arrowDownBlack}
              resizeMode="contain"
              style={{ height: 13, width: 13, margin: 2 }}
            />
          </TouchableOpacity> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              //   borderWidth:1,
              //   backgroundColor:'red',
            }}
          >
            <Image
              source={icons.heartRed}
              resizeMode="contain"
              style={{ width: 14, height: 14, marginHorizontal: 2 }}
            />
            <Image
              source={icons.heartRed}
              resizeMode="contain"
              style={{ width: 14, height: 14, marginHorizontal: 2 }}
            />
            <Image
              source={icons.heartRed}
              resizeMode="contain"
              style={{ width: 14, height: 14, marginHorizontal: 2 }}
            />
            <Image
              source={icons.heartRed}
              resizeMode="contain"
              style={{ width: 14, height: 14, marginHorizontal: 2 }}
            />
            <Image
              source={icons.heartRed}
              resizeMode="contain"
              style={{ width: 14, height: 14, marginHorizontal: 2 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SubscribeCheckout")}
            style={{
              //   borderWidth: 1,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              width: SIZES.width / 5,
              paddingVertical: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 2,
            }}
          >
            <Text style={{ color: "white" }}>Subscribe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("MyCartScreen")}
            style={{
              //   borderWidth: 1,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
              width: SIZES.width / 6,
              padding: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Add +</Text>
          </TouchableOpacity>
        </View>
        {/* line break */}
        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: "grey",
            margin: 20,
          }}
        ></View>
        {/* line break */}

        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 20,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            color: "#a4a4a9",

            fontSize: 15,
            marginTop: 10,
            marginHorizontal: 20,
            textAlign: "justify",
          }}
        >
          The most unique fire grilled patty, flame grilled, charred, seared,
          well-done All natural beef, grass-feed beef, Fiery, juicy, greacy.
          delicous moist The most unique fire grilled patty, flame grilled,
          charred, seared, well-done All natural beef, grass-feed beef, Fiery,
          juicy, greacy. delicous moist
        </Text>

        {/* <View
        style={{
          position: "absolute",
          backgroundColor: "#000",
          height: 50,
          width: 50,
          bottom: 20,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 25,
        }}
      >
        <Icon name="shopping-cart" size={24} color="#FFF" />
      </View> */}

        <View
          style={{
            alignItems: "center",
            marginHorizontal: 20,
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              width: "50%",
            }}
          >
            <Text
              style={{
                fontSize: 22,
              }}
            >
              Related Products
            </Text>
          </View>
          {/* <View style={{
                           width:"50%",
                           alignItems:"flex-end"
                       }}>
                           <TouchableOpacity style={{
                               backgroundColor:'#3CB371',
                               borderRadius:15,
                               paddingHorizontal:8,
                               paddingVertical:4,
                               
                           }}
                           onPress={()=>{props.navigation.navigate('ProductDetailScreen')}} ><Text style={{color:'white'}}>View all</Text></TouchableOpacity>
                       </View> */}
        </View>
        <ScrollView
          style={{
            height: "100%",
            width: SIZES.width,
            marginHorizontal: SIZES.width * 0.03,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Card
            src={images.milk}
            name="Beautiful Card"
            food={{name:'Cheese',image:images.cheese2}}
            onPress={() => {
              props.navigation.navigate("ProductDetailScreen");
            }}
          />
          <Card
            src={images.milk2}
            name="Beautiful Card"
            food={{name:'Cheese',image:images.cheese2}}
            onPress={() => props.navigation.navigate("ProductDetailScreen")}
          />
          <Card
            src={images.milk}
            name="Beautiful Card"
            food={{name:'Cheese',image:images.cheese2}}
            onPress={() => props.navigation.navigate("ProductDetailScreen")}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
export default ProductDetailScreen;
