import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Switch } from "@rneui/themed";

const SwitchScreen = () => {
  const [checked, setChecked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#B6D5D7"); // Màu nền mặc định
  const [ color, setColor ] = useState("#000");
  const toggleSwitch = () => {
    setChecked(!checked);
  };

  // Sử dụng useEffect để cập nhật màu nền khi checked thay đổi
  useEffect(() => {
    if (checked) {
      setBackgroundColor("#000");
      setColor("#fff");
    } else {
      setBackgroundColor("#B6D5D7");
      setColor("#000");
    }
  }, [checked]);

  return (
    <View style={[styles.view, { backgroundColor }]}>
      <View style={styles.row}>
        <Text style={[{color}]}>Dark Mode</Text>
        <Switch
          style={styles.switch}
          value={checked}
          onValueChange={toggleSwitch}
          color="#4C9768"
        />
      </View>
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    color:'#000'
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 2,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  switch: {
    alignSelf: "flex-end",
  },
});
