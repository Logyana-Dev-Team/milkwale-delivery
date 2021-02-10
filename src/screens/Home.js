import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacityComponent,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Card from "../common/Card";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";
// import { SwiperFlatList } from "react-native-swiper-flatlist";


function Home({navigation}) {
  const [state, setstate] = useState({
    city: "",
  });
  const colors = [
    { image: images.banner },
    { image: images.milk },
    { image: images.banner },
    { image: images.milk2 },
  ];
  const Header = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          // marginTop: 30,
          backgroundColor: COLORS.primary,
          width: SIZES.width,
          // borderBottomRightRadius: 30,
          // borderBottomLeftRadius: 30,
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            width: SIZES.width,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // marginBottom: 10,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={()=>
              navigation.openDrawer()
            } style={{ borderWidth: 0 }}>
            <Image
              resizeMode="contain"
              source={icons.menu}
              style={{ width: 24, height: 24, margin: 10 }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Milkwale</Text>
          </View>
          <View
            style={{
              width: "16%",
              // borderWidth:1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
          >
            <TouchableOpacity onPress={()=>{
              navigation.navigate("NotificationScreen")
            }} style={{}}>
              <Image
                resizeMode="contain"
                source={icons.bell}
                style={{ width: 22, height: 22, marginVertical: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                resizeMode="contain"
                source={icons.searchblack}
                style={{ width: 22, height: 22, marginVertical: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const SwipeComponent = (src) => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: COLORS.bg,
          width: SIZES.width,
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingBottom: 120,
          // borderWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            backgroundColor: COLORS.primary,
            width: SIZES.width,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            paddingBottom: 100,
            // borderWidth: 1,
          }}
        ></View>
        <View
          style={{
            // borderWidth: 1,
            paddingHorizontal: 20,
            paddingBottom: 30,
            borderRadius: 20,
            position: "absolute",
            width: "100%",
            height: 240,
            top: 10,
          }}
        >
          <Image
            resizeMode="cover"
            source={src}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              // borderWidth: 1,
            }}
          />
        </View>
      </View>
    );
  };
  const Body = () => {
    return (
      <ScrollView
        style={{
          // flex: 1,
          // borderWidth: 1,
          // marginTop: 110,
          padding: 10,
          // paddingBottom: 30,
          marginBottom: 50,
          backgroundColor: COLORS.bg,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "50%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Milk
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
                onPress={() => {
                  navigation.navigate("TestScreen");
                }}
              >
                <Text style={{ color: COLORS.black, fontWeight: "bold" }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{ width: "100%", height: SIZES.height * 0.34 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card
              src={images.milk}
              name="Beautiful Card"
              food={{name:'Milk',image:images.milk3}}
              // navigation={navigation}
              onPress={() => {
                navigation.navigate("TestScreen");
              }}
            />
            <Card
              src={images.milk}
              name="Beautiful Card"
              food={{name:'Milk',image:images.milk3}}
              onPress={() => navigation.navigate("TestScreen")}
            />
            <Card
              src={images.milk}
              name="Beautiful Card"
              food={{name:'Milk',image:images.milk3}}
              onPress={() => navigation.navigate("TestScreen")}
            />
          </ScrollView>
        </View>

        <View style={{ paddingBottom: 25 }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: "50%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Cheese
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
                onPress={() => {
                  navigation.navigate("TestScreen");
                }}
              >
                <Text style={{ color: COLORS.black, fontWeight: "bold" }}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{ width: "100%", height: SIZES.height * 0.34 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card
              src={images.cheese}
              name="Beautiful Card"
              food={{name:'Cheese',image:images.cheese}}
              // navigation={navigation}
              onPress={() => {
                navigation.navigate("TestScreen");
              }}
            />
            <Card
              src={images.cheese}
              name="Beautiful Card"
              food={{name:'Cheese',image:images.cheese2}}
              onPress={() => navigation.navigate("TestScreen")}
            />
            <Card
              src={images.cheese}
              name="Beautiful Card"
              food={{name:'Cheese',image:images.cheese}}
              onPress={() => navigation.navigate("TestScreen")}
            />
          </ScrollView>
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {Header()}
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: COLORS.bg }}>
            {/* <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination
              data={colors}
              renderItem={({ item }) => <>{SwipeComponent(item.image)}</>}
            /> */}
          </View>
          {/* {Body()} */}
        </ScrollView>
        {/* <View
          style={{
            // borderWidth: 1,
            paddingHorizontal: 20,
            paddingBottom: 20,
            borderRadius: 20,
            // marginHorizontal: 10,
            position: "absolute",
            width: "100%",
            height: 250,
            top: 80,
          }}
        >
          <Image
            resizeMode="cover"
            source={images.banner}
            style={{
              width: "100%",
              height: "100%",
              marginVertical: 10,
              borderRadius: 20,
            }}
          />
        </View> */}
      </SafeAreaView>
    </>
  );
}

export default Home;
