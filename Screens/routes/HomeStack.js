import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import ReviewDetails from '../ReviewDetails';
import Header from '../../shared/Header';

export default function HomeStack() {
    const Stack = createStackNavigator();
	return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerTitle: () => <Header />}}
                />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{title: "Review Details"}}
            />
        </Stack.Navigator>
	)
}





