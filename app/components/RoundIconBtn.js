import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import colors from "../misc/colors";

const RoundIconBtn = ({
  icon,
  size = 24,
  color = colors.DARK,
  style,
  onPress,
}) => {
  return (
    <AntDesign
      name={icon}
      size={size}
      color={color}
      style={[styles.icon, { ...style }]}
      onPress={onPress}
    />
  );
};

export default RoundIconBtn;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});
