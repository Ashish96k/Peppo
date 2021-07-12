import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FloatingAction } from "react-native-floating-action";

// Components
import AppBar from "../components/common/AppBar";
import Title from "../components/common/Title";
import PeppoItem from "../components/card/PeppoItem";
import Spacing from "../components/common/Spacing";

const actions = [
  {
    text: "Clear Peppo's",
    icon: require("../assets/Images/signature-white.png"),
    name: "bt_clear",
    position: 1,
    textColor: "#ffffff",
    textBackground: "#ffffff00",
  },
  {
    text: "Location",
    icon: require("../assets/Images/signature-white.png"),
    name: "bt_room",
    position: 2,
    textColor: "#ffffff",
    textBackground: "#ffffff00",
  },
  {
    text: "Add Peppo",
    icon: require("../assets/Images/signature-white.png"),
    name: "bt_add",
    position: 3,
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

  // Prop Destructuring
  const {} = props;

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
            {pepoList.length
              ? pepoList.map((pepo) => <PeppoItem pepo={pepo} key={pepo.id} />)
              : null}
          </ScrollView>
        </View>
      </View>

      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          console.log(`selected button`);
        }}
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
});

export default Home;
