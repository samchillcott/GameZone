import React from 'react'
import { Text, View } from 'react-native'

import Card from '../shared/Card'
import { globalStyles } from './styles/global'

const ReviewDetails = ({ route }) => {
    const {title, body, rating} = route.params
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    )
}

export default ReviewDetails