import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import About from '../About';
import Header from '../../shared/Header';
import HeaderBG from '../../shared/HeaderBG';

export default function AboutStack() {
    const Stack = createStackNavigator();
	return(
        <Stack.Navigator
            initialRouteName="About"
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
                name="About"
                component={About}
                options={({navigation}) => {
                    return(
                        {headerTitle: () => <Header navigation={navigation} title={'About GameZone'}/>,
                        headerBackground: () => <HeaderBG/>}
                    )
                }}
            />
        </Stack.Navigator>
	)
}





