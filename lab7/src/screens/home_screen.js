import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

const HomeScreen = ({ navigation }) => {
  const [choosenValue, setChoosenValue] = useState("home"); // Giá trị ban đầu là "home" thay vì 2
  const [choosenIndex, setChoosenIndex] = useState(0); // Giá trị ban đầu là 0 thay vì 1
  const [data, setData] = useState([
    "home",
    "alert_screen",
    "async_screen",
    "camera_screen",
    "geolocation_screen",
  ]);

  return (
    <View style={styles.container}>
      <Text>Chosen</Text>
      <Picker
        style={styles.picker}
        selectedValue={choosenValue}
        onValueChange={(itemValue, itemIndex) => {
          setChoosenValue(itemValue);
          setChoosenIndex(itemIndex);
        }}
      >
        {data.map((item, index) => {
          return (
            <Picker.Item
              key={index}
              value={item}
              label={item}
              style={{
                backgroundColor: choosenIndex === index ? "#B4B4B3" : "white",
              }}
            />
          );
        })}
      </Picker>
      <Button
        title={`Go to ${choosenValue}`}
        onPress={() => {
          navigation.navigate(choosenValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 2,
    width: "90%",
    marginVertical: 20,
  },
});

export default HomeScreen;
