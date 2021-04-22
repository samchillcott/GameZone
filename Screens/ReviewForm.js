import React from 'react'
import {Formik} from 'formik'
import { StyleSheet, View, TextInput, Button } from 'react-native'

import {globalStyles} from './styles/global'

const ReviewForm = () => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                } }
            >
                {({handleChange, handleSubmit, values}) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={handleChange('title')}
                            value={values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={handleChange('body')}
                            value={values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={handleChange('rating')}
                            value={values.rating}
                        />
                        <Button
                            title='submit'
                            color="maroon"
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm

const styles = StyleSheet.create({})
