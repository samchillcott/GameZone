import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'

export default function FlatButton ({text, onPress}) {
    return (
       <TouchableOpacity onPress={onPress}
        style={styles.button}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#e0005a',
    },
    buttonText: {
        fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    }
})
