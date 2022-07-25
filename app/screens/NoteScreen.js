import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import colors from "../misc/colors";
import SearchBar from "../components/SearchBar";
import RoundIconBtn from "../components/RoundIconBtn";
import NoteInputModel from "../components/NoteInputModel";

const NoteScreen = ({ user }) => {
  const [greet, setGreet] = useState("");

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) setGreet("Morning");
    if (hrs === 1 || hrs < 17) setGreet("Afternoon");
    else setGreet("Evening");
  };

  useEffect(() => {
    findGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Good ${greet} ${user.name}`}</Text>
        <SearchBar containerStyle={{ marginVertical: 10 }} />
      </View>
      <View
        style={[styles.emptyHeaderContainer, StyleSheet.absoluteFillObject]}
      >
        <Text style={styles.emptyHeader}>Add Notes</Text>
        <RoundIconBtn icon="plus" style={styles.addBtn} />
      </View>
      <NoteInputModel visible={true} />
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "300",
  },
  emptyHeaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    zIndex: -1,
  },
  emptyHeader: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 50,
    color: "white",
  },
});
