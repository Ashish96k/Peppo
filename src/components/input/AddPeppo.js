import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import Spacing from "../common/Spacing";

// Context
import { Pcontext } from "../../context/Pcontext";
import { constants } from "../../context/constants";

const AddPeppo = (props) => {
  // Context variables
  const { peppoList, setPeppoList, saveToStorage } = useContext(Pcontext);

  // State Variables
  const [task, setTask] = useState(null);

  // Prop Destructuring
  const { inputModalOpen, setInputModalOpen } = props;

  // Adding a new Peppo
  const newPeppoHandler = () => {
    const taskBluePrint = {
      id: peppoList.length ? peppoList[0].id + 1 : 0,
      name: task,
      isCompleted: false,
    };
    const newPeppoList = [taskBluePrint, ...peppoList];
    setPeppoList(newPeppoList);
    saveToStorage(newPeppoList);
    setTask(null);
    setInputModalOpen(false);
  };

  return (
    <Modal
      isVisible={inputModalOpen}
      onBackdropPress={() => setInputModalOpen(false)}
      onBackButtonPress={() => setInputModalOpen(false)}
    >
      <View style={styles.modalContainer}>
        {/* Title Section */}
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitleText}>Add New Peppo!</Text>
        </View>
        {/* Input Section */}
        <View style={styles.modalInputContiner}>
          <TextInput
            style={styles.modalInput}
            placeholder="Enter Peppo"
            value={task}
            onChangeText={(text) => setTask(text)}
            multiline={true}
          />
        </View>

        {/* Sized Box */}
        <Spacing vertical={1} />

        {/* Button Section */}
        <View style={styles.modalButtonContainer}>
          <TouchableOpacity
            style={styles.modalButton}
            activeOpacity={0.7}
            onPress={newPeppoHandler}
          >
            <Text style={styles.modalButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    // height: hp(20),
    // justifyContent: "space-evenly",
    borderRadius: 20,
    paddingVertical: 10,
  },
  modalTitleContainer: {
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 10,
  },
  modalTitleText: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: constants.primary,
  },
  modalInputContiner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  modalInput: {
    borderBottomWidth: 1,
    borderBottomColor: constants.greyLight,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  modalButtonContainer: {
    paddingHorizontal: 20,
  },
  modalButton: {
    backgroundColor: constants.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: hp(100),
  },
  modalButtonText: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: "white",
  },
});

export default AddPeppo;
