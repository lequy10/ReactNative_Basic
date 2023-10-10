// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Login from './login';



const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Home" component={Home} options={{ headerStyle: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerStyle: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;