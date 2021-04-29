import React from 'react'
import * as yup from 'yup'
import {Formik} from 'formik'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import {globalStyles} from './styles/global'
import FlatButton from '../shared/Button'

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
                {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
                        <FlatButton
                            text="Submit"
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
