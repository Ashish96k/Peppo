import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Pcontext = React.createContext();

export const Pprovider = (props) => {
  // State variables
  const [peppoList, setPeppoList] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);

  // AsyncStorage variables
  // Peppos

  // Mounting
  useEffect(() => {
    // Fetching Peppos from stroage
    fecthStorageHandler();
  }, []);

  // Updating phase (based on change in PeppoList)
  useEffect(() => {
    const pendingPeppos = peppoList.filter((peppo) => !peppo.isCompleted);
    setPendingCount(pendingPeppos.length);
  }, [peppoList]);

  // Getting the saved peppo's from storage
  const fecthStorageHandler = async () => {
    try {
      const savedPeppoList = await AsyncStorage.getItem("Peppos");
      if (savedPeppoList !== null) {
        setPeppoList(JSON.parse(savedPeppoList));
      }
    } catch (err) {
      console.log("Some issue while fetching storage items - ", err);
    }
  };

  // Saving data to storage handler
  const saveToStorage = async (list) => {
    try {
      await AsyncStorage.setItem("Peppos", JSON.stringify(list));
    } catch (err) {
      console.log("Some issue while saving to storage - ", err);
    }
  };

  return (
    <Pcontext.Provider
      value={{
        peppoList,
        setPeppoList,
        pendingCount,
        setPendingCount,
        // Common Methods
        saveToStorage,
      }}
    >
      {props.children}
    </Pcontext.Provider>
  );
};
