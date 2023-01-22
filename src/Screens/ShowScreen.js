import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation,route : {params}}) => {

    const {state} = useContext(Context);
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:blogPost.id})}>

            <EvilIcons style={styles.icon} name="pencil" />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
    

    const blogPost = state.find(
        blogPost => blogPost.id === params.id
    );
    return(
        <View>
            <Text>Show Screen </Text>
            <Text>{blogPost.title}</Text>

        </View>
    )
}
export default ShowScreen;
const styles = StyleSheet.create({
    icon: {
        fontSize: 24
    }
})