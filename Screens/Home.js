import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

import Card from '../shared/Card';
import { globalStyles } from './styles/global'

const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <View style={styles.modalContent}>
                    <MaterialIcons
                        name="close"
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello from modal</Text>
                </View>
            </Modal>
            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        marginTop: 22,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#333',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    }
})
