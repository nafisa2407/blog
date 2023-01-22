import React, { useContext,useEffect, useFocusEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, addBlogPost,deleteBlogPost,getBlogPost } = useContext(Context);
    

    React.useEffect(() => {
        getBlogPost();
        const listener = navigation.addListener('focus', () => {
            getBlogPost();
            
        });
   
        
        
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>

            <Feather style={styles.icon} name="plus" />
            </TouchableOpacity>
          ),
        });
        return () => {
            console.log('remover')
            listener.remove();
        }
      }, [navigation]);
     

   
    
    //   return <Text>Count: {count}</Text>;
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
IndexScreen.navigation


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
