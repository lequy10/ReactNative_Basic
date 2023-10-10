import React, { useState } from "react";
import LottieView from "lottie-react-native";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

const Login = ({ navigation }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Thực hiện xác thực tại đây. Ví dụ:
    if (username === "user" && password === "pass") {
      setLoggedIn(true);
      navigation.replace("Home");
      // Điều hướng sang màn hình Home khi đăng nhập thành công
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.35 }}>
        <LottieView
          source={require("../animation_ln15sf7w.json")}
          autoPlay
          loop
        />
      </View>
      {!loggedIn && (
        <View style={{ flex: 0.65, padding: 20, marginTop: 20 }}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderColor: "#D9D9D1",
    borderWidth: 1,
    margin: 5,
    paddingHorizontal: 10,
  },
  button: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "blue",
    padding: 5,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
