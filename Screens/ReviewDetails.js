import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from './styles/global'

const ReviewDetails = ({ route, navigation }) => {
    const {title, body, rating} = route.params
    return (
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
        </View>
    )
}

export default ReviewDetails