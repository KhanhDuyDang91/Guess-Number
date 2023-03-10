import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const [imageWidth, setImageWidth] = useState(
    Dimensions.get("window").width * 0.6
  );

  useEffect(() => {
    const updateLayout = () => {
      setImageWidth(Dimensions.get("window").width * 0.6);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {};
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={{ fontSize: 30, color: "red" }}>
          The Game is Over!
        </TitleText>
        <View
          style={{
            ...styles.imageContainer,
            width: imageWidth,
            height: imageWidth,
            borderRadius: imageWidth / 2,
          }}
        >
          <Image
            source={require("../assets/Phuc.jpg")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 18 : 20,
  },
  highlight: {
    color: Colors.highlight,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
