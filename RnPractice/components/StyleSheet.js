import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  try: {
    backgroundColor: "green",
    width: 50,
    flex: 0.05,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 15,
    backgroundColor: "rgb(170 206 245)",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "rgb(255 255 255)",
    fontSize: 28,
    fontWeigth: "bold",
    textAlignVertical: "center",
    textAlign: "left",
    paddingLeft: 8,
  },
  imgLogo: {
    width: 48,
    height: 50,
    paddingLeft: 8,
  },
});

export default styles;
