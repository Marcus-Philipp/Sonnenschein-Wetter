import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Weather' component={WeatherScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;

