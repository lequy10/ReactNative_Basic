import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/auth/login_screen";
import HomeScreen from "./screens/home/home_screen";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerTitle: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerTitle: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
