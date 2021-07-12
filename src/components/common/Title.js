import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// Context
import { constants } from "../../context/constants";

const Title = (props) => {
  // Prop Destructuring
  const { name, number } = props;
  return (
    <View style={styles.titleContainer}>
      {/* Title Name */}
      <View style={styles.titleNameContainer}>
        <Text style={styles.titleName}>{name} </Text>
      </View>

      {/* Title Number */}
      <View style={styles.titleNumberContainer}>
        <Text style={styles.titleNumber}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleNameContainer: {
    paddingHorizontal: 10,
  },
  titleName: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: constants.primary,
  },
  titleNumberContainer: {
    backgroundColor: constants.primary,
    borderRadius: hp(100),
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  titleNumber: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "white",
  },
});

export default Title;
