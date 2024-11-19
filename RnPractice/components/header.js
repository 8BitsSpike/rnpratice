import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./StyleSheet";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../img/logo1.png")} style={styles.imgLogo} />
      <Text style={styles.headerText}>{"Mindly"}</Text>
    </View>
  );
};
export default Header;
