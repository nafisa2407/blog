import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import BlogPostForm from "../components/BlogPostForm";
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation, route: { params } }) => {



    const { state, addBlogPost } = useContext(Context);
    return (
        <>
            <BlogPostForm onSubmit={(title, content) => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Home')
                });
            }} />
        </>
    )
}
export default CreateScreen;
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderColor: 'gray',
        borderWidth: 1
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    },
    container: {
        flex: 1,
        marginHorizontal: 10

    }

})