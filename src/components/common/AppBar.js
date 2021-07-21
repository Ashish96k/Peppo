import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// Components
import Spacing from "./Spacing";

// Context
import { Pcontext } from "../../context/Pcontext";
import { constants } from "../../context/constants";

const AppBar = () => {
  // Context variables
  const { pendingCount } = useContext(Pcontext);

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
        <View style={styles.headerPendingTextContainer}>
          <Text style={styles.headerPendingText}>Pending Tasks</Text>
        </View>
        <View style={styles.headerPendingNumberContainer}>
          <Text style={styles.headerPendingNumber}>{pendingCount}</Text>
        </View>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerPendingTextContainer: {
    paddingHorizontal: 6,
  },
  headerPendingText: {
    fontSize: RFValue(12),
    color: "white",
    fontWeight: "bold",
  },
  headerPendingNumberContainer: {
    paddingHorizontal: 6,
    backgroundColor: "white",
    height: 20,
    width: 20,
    borderRadius: hp(100),
    justifyContent: "center",
    alignItems: "center",
  },
  headerPendingNumber: {
    color: constants.primary,
    fontSize: RFValue(12),
    fontWeight: "bold",
  },
});

export default AppBar;
