import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Header from '../../shared/Header';
import HeaderBG from '../../shared/HeaderBG';
import ReviewDetails from '../ReviewDetails';

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
                options={({navigation}) => {
                    return(
                        {headerTitle: () => <Header navigation={navigation} title={'GameZone'}/>,
                        headerBackground: () => <HeaderBG/>
                        }
                    )
                }}
                />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{title: "Review Details"}}
            />
        </Stack.Navigator>
	)
}





