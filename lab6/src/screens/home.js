import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.containter}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() =>navigation.navigate("picker")}
      >
        <Text style={styles.text}>Picker</Text>
      </TouchableOpacity>
          <TouchableOpacity style={ [ styles.touch1 ] }
          onPress={()=> navigation.push("switch")}>
        <Text style={styles.text1}>Swich</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    backgroundColor: "#00926E",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: "#CEF9F2",
    borderWidth: 5,
    elevation: 3,
  },
  touch1: {
    backgroundColor: "#FFEDE6",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    borderColor: "#477699",
    borderWidth: 5,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  text1: {
    fontSize: 18,
    color: "#1D2F6F",
  },
});
