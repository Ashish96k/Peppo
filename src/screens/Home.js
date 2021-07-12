import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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
import { constants } from "../context/constants";

const actions = [
  {
    text: "Add Peppo",
    icon: <AntDesign name="addfile" size={RFValue(18)} color="white" />,
    name: "bt_add",
    position: 1,
    textColor: "#ffffff",
    textBackground: "#ffffff00",
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
  },
];

const rawData = [
  { id: 1, name: "Task 1", isCompleted: false },
  { id: 2, name: "Task 2", isCompleted: false },
  { id: 3, name: "Task 3", isCompleted: false },
];

const Home = (props) => {
  // State Variables
  const [pepoList, setPepoList] = useState(rawData);
  const [inputModalOpen, setInputModalOpen] = useState(false);

  // Prop Destructuring
  const {} = props;

  // handle FAB events
  const fabHandler = (event) => {
    if (event === "bt_add") setInputModalOpen(true);
  };

  return (
    <View style={styles.container}>
      {/* App Header Section */}
      <AppBar />

      {/* App Body Section */}
      <View style={styles.bodyContainer}>
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Title name="Total Task" number={4} />
        </View>

        {/* Listing Section */}
        <View style={styles.listContainer}>
          <ScrollView>
            {pepoList.length ? (
              pepoList.map((pepo) => <PeppoItem pepo={pepo} key={pepo.id} />)
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
      <Spacing vertical={20} />
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
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    paddingVertical: 20,
  },
  listContainer: {},
  doneContainer: {
    flex: 1,
    height: hp(40),
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
