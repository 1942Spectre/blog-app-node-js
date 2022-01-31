import React, {useContext} from 'react';
import {Text, View , StyleSheet} from 'react-native';
import {Context as BlogContext , Provider as BlogProvider} from '../context/BlogContext';

function ShowScreen({navigation}){
    const {state} = useContext(BlogContext)
    const postID = navigation.getParam("id") 
    const post = state.find((item) => item.id == postID )
    return (
        <View>
            <Text style={{textAlign:'center' , fontSize:20, fontWeight:'800'}}>{post.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ShowScreen