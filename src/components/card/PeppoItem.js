import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CheckBox from "react-native-check-box";
import { Feather } from "@expo/vector-icons";

// Context
import { Pcontext } from "../../context/Pcontext";
import { constants } from "../../context/constants";

const PeppoItem = (props) => {
  // Context variables
  const { peppoList, setPeppoList, saveToStorage } = useContext(Pcontext);

  // Prop Destructuring
  const { peppo } = props;

  const deleteAlert = () =>
    Alert.alert(
      "Delete Peppo",
      "Are you sure you want to delete this Peppo ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deletePeppoHandler(peppo.id) },
      ]
    );

  // Handles the deletion of peppo's
  const deletePeppoHandler = (id) => {
    const filteredPeppoList = peppoList.filter((peppo) => peppo.id !== id);
    setPeppoList(filteredPeppoList);
    saveToStorage(filteredPeppoList);
  };

  // Complete a Peppo task handler
  const completePeppoHandler = (id) => {
    const updatedList = peppoList.map((peppo) =>
      peppo.id === id
        ? { ...peppo, isCompleted: peppo.isCompleted ? false : true }
        : peppo
    );
    setPeppoList(updatedList);
    saveToStorage(updatedList);
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => completePeppoHandler(peppo.id)}
          isChecked={peppo.isCompleted}
          rightText={peppo.name}
          rightTextStyle={{
            textDecorationLine: peppo.isCompleted ? "line-through" : "none",
          }}
          checkedCheckBoxColor={constants.primary}
          uncheckedCheckBoxColor={constants.greyLight}
        />
      </View>
      <View style={styles.itemIconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={deleteAlert}>
          <Feather name="trash-2" size={RFValue(18)} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: constants.primary,
    borderRadius: 10,
    width: wp(90),
    marginVertical: 6,
    marginHorizontal: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    shadowColor: constants.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  itemTextContainer: {
    flex: 8,
    // backgroundColor: "yellow",
  },
  itemIconContainer: {
    flex: 2,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PeppoItem;
