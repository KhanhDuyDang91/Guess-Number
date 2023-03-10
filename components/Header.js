import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/Colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "#59de78",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.accent,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: Platform.OS === "android" ? "black" : "white",
    fontSize: 25,
  },
});

export default Header;
