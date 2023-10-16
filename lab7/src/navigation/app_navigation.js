import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home_screen";
import AlertScreen from "../screens/alert_screen";
import GeolocationScreen from "../screens/geolocation_screen";
import AsyncStorageScreen from "../screens/asyncStorage_screen";
import CameraScreen from "../screens/camera/camera_screen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="alert_screen" component={AlertScreen} />
        <Stack.Screen name="geolocation_screen" component={GeolocationScreen} />
        <Stack.Screen name="camera_screen" component={CameraScreen} />
        <Stack.Screen name="async_screen" component={AsyncStorageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
