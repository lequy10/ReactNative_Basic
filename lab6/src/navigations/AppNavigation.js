import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PickerScreen from "../screens/picker_screen";
import SwitchScreen from "../screens/switch_screen";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="switch" component={SwitchScreen} />
        <Stack.Screen name="picker" component={PickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
