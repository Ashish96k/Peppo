import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// Components
import Spacing from "./Spacing";

// Context
import { constants } from "../../context/constants";

const AppBar = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Logo Section */}
      <View style={styles.headerLogoContainer}>
        <Image
          resizeMode="contain"
          style={styles.headerLogo}
          source={require("../../assets/Images/signature-white.png")}
        />
      </View>

      {/* Spacing */}
      <Spacing vertical={2} />

      {/* Pending Task */}
      <View style={styles.headerPendingContainer}>
        <Text style={styles.headerPendingText}>Pending Tasks: 6</Text>
      </View>

      {/* Spacing */}
      <Spacing vertical={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: constants.primary,
    height: hp(20),
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: hp(100),
    borderBottomRightRadius: hp(100),
  },
  headerLogoContainer: {},
  headerLogo: {
    height: hp(8),
  },
  headerPendingContainer: {
    // backgroundColor: "red",
  },
  headerPendingText: {
    fontSize: RFValue(12),
    color: "white",
    fontWeight: "bold",
  },
});

export default AppBar;
