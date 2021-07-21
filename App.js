import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Home from "./src/screens/Home";

// Context
import { Pprovider } from "./src/context/Pcontext";

export default function App() {
  return (
    <Pprovider>
      <Home />
    </Pprovider>
  );
}
