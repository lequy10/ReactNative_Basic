import React,{useState} from "react";
import Styles from "../../style";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";


const API_URL = "https://6519d235340309952f0cbe06.mockapi.io/users";

const LoginScreen =({navigation})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = async () => {
    try {
      // Gửi yêu cầu đăng nhập đến API
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();

      // Kiểm tra xem có email và password khớp trong danh sách user không
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Đăng nhập thành công, chuyển đến màn hình UserListScreen
        navigation.navigate("home");
      } else {
        Alert.alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const onFbLoginPress = async () => {
    Alert.alert(
      `Please use our React Native Starer Kit instead. You can download it for free at https://instamobile.io`
    );
   
  };

  return (
    <KeyboardAvoidingView style={Styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.loginScreenContainer}>
          <View style={Styles.loginFormView}>
            <Text style={Styles.logoText}>Instamobile</Text>
            <TextInput
              
              placeholder="user1"
              placeholderColor="#c4c3cb"
              style={Styles.loginFormTextInput}
              onChangeText={setEmail} // Cập nhật giá trị email khi người dùng nhập
            />
            <TextInput
              
              placeholder="password1"
              placeholderColor="#c4c3cb"
              style={Styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={setPassword} // Cập nhật giá trị password khi người dùng nhập
            />
            <Button
              buttonStyle={Styles.loginButton}
              onPress={onLoginPress} // Sử dụng hàm onLoginPress
              title="Login"
            />
            <Button
              containerStyle={Styles.fbLoginButton}
              type="clear"
              onPress={onFbLoginPress} // Sử dụng hàm onFbLoginPress
              title="Login With Facebook"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
export default LoginScreen