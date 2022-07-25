import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../misc/colors";
import RoundIconBtn from "../components/RoundIconBtn";

const Intro = ({ onFinish }) => {
  const [name, setName] = useState("");

  const handleOnChangeText = (text) => setName(text);
  const handleSubmit = async () => {
    const user = { name: name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    if (onFinish) onFinish();
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Input your name!</Text>
        <TextInput
          value={name}
          onChangeText={handleOnChangeText}
          placeholder="Enter your name"
          style={styles.textInput}
        />
        {name.trim().length >= 3 && (
          <RoundIconBtn icon="arrowright" onPress={handleSubmit} />
        )}
      </View>
    </>
  );
};

export default Intro;

const width = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    marginBottom: 15,
  },
  inputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});
