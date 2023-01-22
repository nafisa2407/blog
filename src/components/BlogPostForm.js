import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
const BlogPostForm = ({onSubmit,initialValues}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    const { addBlogPost } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text>Enter Titleing: </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text>Enter content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(textVal) => setContent(textVal)} />
            {/* <Button
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Home')
                    });
                }}
            />*/}
            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title,content)
                 }
            /> 
        </View>
    )
}
BlogPostForm.defaultProps ={
    initialValues:{
        title: '',
        content:''
    }
}
export default BlogPostForm;
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