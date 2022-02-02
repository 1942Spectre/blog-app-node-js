import React, {useContext} from 'react';
import {Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext , Provider as BlogProvider} from '../context/BlogContext';
import { Ionicons } from "@expo/vector-icons";

function ShowScreen({navigation}){
    const {state} = useContext(BlogContext)
    const postID = navigation.getParam("postID") 
    const post = state.find((item) => item.id == postID )
    return (
        <View>
            <Text style={{textAlign:'center' , fontSize:20, fontWeight:'800'}}>{post.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("Edit" , {postID:navigation.getParam("postID")})}>
            <Ionicons name="pencil-outline" size={30} color="#fff" />
          </TouchableOpacity>
        );
      },
    };
  };

export default ShowScreen