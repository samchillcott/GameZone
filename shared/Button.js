import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function FlatButton ({text, onPress}) {
    return (
       <TouchableOpacity onPress={onPress} styles={styles.button}>
            <Text style={styles.buttonText}>
                {text}
            </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'red',
    },
    buttonText: {
        fontSize: 16,
        color: 'navy',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    }
})
