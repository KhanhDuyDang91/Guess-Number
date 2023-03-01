import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/dzo.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="RESTART" onPress={props.onRestart} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    marginTop: 10,
  },
});

export default GameOverScreen;
