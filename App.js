import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Intro from "./app/screens/Intro";

import NoteScreen from "./app/screens/NoteScreen";

export default function App() {
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    // console.log("the value was : ", result);
    if (result !== null) setUser(JSON.parse(result));
  };

  useEffect(() => {
    findUser();
    AsyncStorage.clear();
  }, []);

  return (
    <>
      {!user.name ? <Intro onFinish={findUser} /> : <NoteScreen user={user} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
