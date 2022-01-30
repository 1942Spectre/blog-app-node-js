import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

function IndexScreen() {
  const { data, addBlogPost , removeBlogPost , updateBlogPost } = useContext(BlogContext);
  return (
    <>
      <Text>Index Screen</Text>
      <Button onPress={addBlogPost} title="Add Post" />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={{flexDirection:"row" , alignItems:'center' , backgroundColor:'white', margin:8 , justifyContent:'space-evenly'}}>
              <Text>{item.title}</Text>
              <Button title="Remove" onPress={() => removeBlogPost(item.title)}/>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});

export default IndexScreen;
