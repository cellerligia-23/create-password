import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logo } from "../../components/logo/Logo";
import { ButtonGenerator } from "../../components/button/ButtonGenerator";

import styles from "./HomeStyle";


export default function Home() {
  return(
    <View style={styles.appContainer}>
      <StatusBar style="light" />

      <View style={styles.logoContainer}>
        <Logo />
      </View>
      
      <View style={styles.buttonContainer}>
        <ButtonGenerator />
      </View>
    </View>
    
  );
};