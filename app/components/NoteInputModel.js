import {
  TextInput,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const NoteInputModel = ({ visible }) => {
  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput placeholder="Title" style={[styles.input, styles.title]} />
          <TextInput placeholder="Note" style={[styles.input, styles.desc]} />
        </View>
      </Modal>
    </>
  );
};

export default NoteInputModel;

const styles = StyleSheet.create({
  container: {
    p,
  },
  input: {},
  title: {},
});
