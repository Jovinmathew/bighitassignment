import Lottie from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { AuthLayout } from "../../components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Success = (props)=> {

  const animationProgress = useRef(new Animated.Value(0));
  const [fadeAnim] = useState(new Animated.Value(1));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }, [])

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      delay:3000,
      duration: 1000,
      useNativeDriver:true
    }).start();
  }, []);


  setTimeout(() => {
  }, 5000);



    return (
      <AuthLayout
        headerHeight={styles.Header.height}
        headerText={
          <Animated.View style={[styles.Header,{opacity:fadeAnim}]}>
            <Text>Login Success!</Text>
            <Lottie
            progress={animationProgress.current}
            style={{
              width: 70,
            height: 70,
            backgroundColor: "transparent",
            }}
            source={require("../../assets/success-animation.json")}
            ></Lottie>
          </Animated.View>
          }
      >        
      </AuthLayout>
    );
  
}

function render() {
  throw new Error("Function not implemented.");
}
