import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Communications from "react-native-communications";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from "react-native";

export default function App() {
  const [numberToCall, setNumberToCall] = useState("0836024988");
  const triggerCall = () => {
    Communications.phonecall(numberToCall, false);
    // if (numberToCall.length != 10) {
    //   alert("Please insert correct contact number");
    //   return;
    // }

    // Linking.openURL(`tel://${numberToCall}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Enter a phone number</Text>
        <View>
          <TextInput
            value={numberToCall}
            onChangeText={(inputValue) => setNumberToCall(inputValue)}
            placeholder={"Number to call"}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={triggerCall}
          >
            <Text style={styles.buttonTextStyle}>Make a Call</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#8ad24e",
  },
  container: {
    flex: 1,
    marginTop: 22,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
  },

  textInput: {
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
  },
});
