import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// Components
import AppBar from "../components/common/AppBar";
import Title from "../components/common/Title";
import PeppoItem from "../components/card/PeppoItem";
import Spacing from "../components/common/Spacing";
import AddPeppo from "../components/input/AddPeppo";

// Context
import { Pcontext } from "../context/Pcontext";
import { constants } from "../context/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const actions = [
  {
    text: "Add Peppo",
    icon: <AntDesign name="addfile" size={RFValue(18)} color="white" />,
    name: "bt_add",
    position: 1,
    textColor: "#ffffff",
    textBackground: "#ffffff00",
    textElevation: 0,
  },
  {
    text: "Clear Peppo's",
    icon: (
      <MaterialCommunityIcons
        name="delete-empty-outline"
        size={RFValue(18)}
        color="white"
      />
    ),
    name: "bt_clear",
    position: 2,
    textColor: "#ffffff",
    textBackground: "#ffffff00",
    textElevation: 0,
    color: "red",
  },
];

const Home = (props) => {
  // Context variables
  const { peppoList, setPeppoList } = useContext(Pcontext);

  // State Variables
  const [inputModalOpen, setInputModalOpen] = useState(false);

  // Prop Destructuring
  const {} = props;

  // Clear Peppo List Alert
  const clearListAlert = () =>
    Alert.alert(
      "Empty Peppo's",
      "Are you sure you want to delete all Peppo's ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setPeppoList([]);
            AsyncStorage.removeItem("Peppos");
          },
        },
      ]
    );

  // handle FAB events
  const fabHandler = (event) => {
    if (event === "bt_add") setInputModalOpen(true);
    if (event === "bt_clear") clearListAlert();
  };

  return (
    <View style={styles.container}>
      {/* App Header Section */}
      <AppBar />

      {/* App Body Section */}
      <View style={styles.bodyContainer}>
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Title name="Total Task" number={peppoList.length} />
        </View>

        {/* Listing Section */}
        <View style={styles.listContainer}>
          <ScrollView>
            {peppoList.length ? (
              peppoList.map((peppo) => (
                <PeppoItem peppo={peppo} key={peppo.id} />
              ))
            ) : (
              <View style={styles.doneContainer}>
                <MaterialIcons
                  name="celebration"
                  size={hp(12)}
                  color={constants.greyLight}
                />
              </View>
            )}
          </ScrollView>
        </View>
      </View>

      {/* Add Peppo Modal Section */}
      <View>
        <AddPeppo
          inputModalOpen={inputModalOpen}
          setInputModalOpen={setInputModalOpen}
        />
      </View>

      <FloatingAction
        actions={actions}
        onPressItem={(name) => fabHandler(name)}
      />

      {/* Spacing */}
      {/* <Spacing vertical={20} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bodyContainer: {
    backgroundColor: "#fff",
    // flex: 1,
    height: hp(80),
    alignItems: "center",
  },
  titleContainer: {
    paddingVertical: 20,
  },
  listContainer: {
    height: hp(65),
  },
  doneContainer: {
    flex: 1,
    height: hp(40),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
