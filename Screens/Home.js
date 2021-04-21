import React from 'react'
import { Text, View, Button } from 'react-native'
import { globalStyles } from './styles/global'

const Home = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button
                title="go to Review Details"
                onPress={() => navigation.navigate('ReviewDetails')}
            />
        </View>
    )
}

export default Home
