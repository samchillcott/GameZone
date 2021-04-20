import React from 'react'
import { Text, View, Button } from 'react-native'
import { globalStyles } from './styles/global'

const Home = ({ navigation }) => {
       console.log("fired");

    const pressHandler = () => {
       console.log("fired on press");
        navigation.navigate('ReviewDetails')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button
                title="go to Review Details"
                onPress={pressHandler}
            />
        </View>
    )
}

export default Home
