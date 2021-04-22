import React from 'react'
import * as yup from 'yup'
import {Formik} from 'formik'
import { StyleSheet, View, TextInput, Button } from 'react-native'

import {globalStyles} from './styles/global'

const ReviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', "Rating must be a number 1-5", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    })
})

const ReviewForm = ({addReview}) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: '',
                }}
                validationSchema={ReviewSchema}
                onSubmit={(values) => {
                    addReview(values);
                }}
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
                            keyboardType='numeric'
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
