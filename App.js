import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './Screens/Home';
import ReviewDetails from './Screens/ReviewDetails';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return(
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: '#eee',
					},
					headerTintColor: 'black',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{title: "Game Zone"}}
					/>
				<Stack.Screen
					name="ReviewDetails"
					component={ReviewDetails}
					options={{title: "Review Details"}}
				/>
			</Stack.Navigator>
    	</NavigationContainer>
	)
}