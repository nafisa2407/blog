import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route: { params } }) => {
    const {state, editBlogPost} = useContext(Context);

    
    const blogPost = state.find(
        blogPost => blogPost.id === params.id
    );

    



    return (

        <BlogPostForm initialValues={blogPost} onSubmit={(title,content)=>{
            editBlogPost(blogPost.id, title, content, () => {
                navigation.navigate('Home')
            });
        }} />
    )
}
export default EditScreen;
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