import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './Screens/routes/HomeStack';
import AboutStack from './Screens/routes/AboutStack';

const Drawer = createDrawerNavigator();

export default function App() {
	return(
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeStack} />
				<Drawer.Screen name="About" component={AboutStack} />
      		</Drawer.Navigator>
			<StatusBar/>
    	</NavigationContainer>
	)
}