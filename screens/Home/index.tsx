import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef} from "react";
import { Animated } from "react-native";

import React from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";
import { transform } from "typescript";

export const Home = () => {

  const fromtheTop = useRef(new Animated.Value(0)).current;
  const fromtheBot = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
    Animated.timing(fromtheBot,{
      duration:400,
      delay: 400,
      toValue: -120,
      useNativeDriver: true,
    }).start();
  },[]);

  useEffect(()=>{
    Animated.timing(fromtheTop,{
      duration:500,
      delay: 300,
      toValue: 200,
      useNativeDriver: true,
    }).start();
  },[]);
  

  return (
    <View style={styles.Container}>
      <StatusBar
        translucent={false}
        backgroundColor="blue"
        style={Platform.OS === "android" ? "light" : "dark"}
      />
      

      <Animated.View style={[styles.Circle, {transform:[{translateY:fromtheTop}]}]}></Animated.View>
      <View style={styles.Header}>
        <View style={styles.HeaderTitle}>
          <Text style={styles.HeaderText}>
            Welcome To <Text style={{ fontWeight: "bold" }}>BigHit</Text>
          </Text>
          <Text style={styles.HeaderText}>India's biggest sports platform</Text>
        </View>
        <View style={styles.HeaderButton}>
          <Text style={[styles.HeaderText, { textAlign: "center" }]}>
            Create Profile
          </Text>
        </View>
      </View>
      <ScrollView
        style={styles.Banner}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {getArrayWithXElements(3).map((currentElement) => {
          return <BannerItem key={currentElement} />;
        })}
      </ScrollView>
      <ScrollView
        style={styles.Categories}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {getArrayWithXElements(6).map((currentElement) => {
          return <CategoryItem key={currentElement} />;
        })}
      </ScrollView>
      <Animated.View style={[styles.Leaderboard,{transform:[{translateY:fromtheBot}]}]}>
        <View style={styles.LeaderBoardTitle}>
          <FontAwesome name="star" size={18} color="orange" />
          <Text style={styles.LeaderBoardText}>
            Top Players on BigHit Leaderboard
          </Text>
        </View>
        <FlatList
          data={getArrayWithXElements(20)}
          renderItem={() => <PlayerItem />}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.LeaderBoardFlatlist}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </Animated.View>
    </View>
  );
};

const BannerItem = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.timing(translation,{
      duration:400,
      delay: 400,
      toValue: 300,
      useNativeDriver: true,
    }).start();
  },[]);

  return (
    <Animated.View style={[styles.BannerContainer, {transform:[{translateY:translation}]}]}>
      <Image
        source={require("../../assets/images/banner.png")}
        style={styles.BannerImage}
        resizeMode="contain"
      />
      <Text style={styles.BannerText}>
        Upload your videos and images showcase yourself
      </Text>
      <TouchableWithoutFeedback>
        <View style={styles.BannerButton}>
          <Text style={styles.BannerButtonText}>Explore & Vote</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.BannerScroller}></View>
    </Animated.View>
  );
};

const CategoryItem = () => {
    const translation = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.timing(translation,{
      duration:400,
      delay: 400,
      toValue: -200,
      useNativeDriver: true,
    }).start();
  },[]);

  return (
    <Animated.View style={[styles.CategoryContainer,{transform:[{translateY:translation}]}]}>
      <Image
        source={require("../../assets/images/categories.png")}
        style={styles.CategoryImage}
        resizeMode="cover"
      />
      <View style={styles.CategoryTextContainer}>
        <Text style={styles.CategoryText}>Categories</Text>
      </View>
    </Animated.View>
  );
};

const PlayerItem = () => {  
  return (
    <View style={styles.PlayerContainer}>
      <Image
        source={require("../../assets/images/leaderboard.png")}
        resizeMode="contain"
        style={styles.PlayerImage}
      />
      <Text style={styles.PlayerText}>Player Name</Text>
    </View>
  );
};

const getArrayWithXElements = (x: number) => {
  let array: number[] = [];

  for (let i = 1; i <= x; i++) {
    array.push(i);
  }

  return array;
};
