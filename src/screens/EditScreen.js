import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context, Provider } from "../context/BlogContext";

function EditScreen({navigation}) {
  const postID = navigation.getParam('postID')
  const {state} = useContext(Context)
  const post = state.find((item) => item.id == postID)
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const { updateBlogPost } = useContext(Context);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Edit Blog Post</Text>
      <Text>Title</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.titleInput}
      />
      <Text>Content</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.contentInput}
      />

      <Button
        title="Finish Editing"
        onPress={() =>{
          navigation.navigate('Index');
          updateBlogPost(postID , title, content)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    backgroundColor: "#dfe3ee",
    borderColor: "black",
    borderWidth: 3,
    height: 40,
    width: "80%",
    marginVertical: 50,
    flexDirection: "column",
  },
  contentInput: {
    width: "80%",
    height: 160,
    backgroundColor: "#dfe3ee",
    borderColor: "black",
    borderWidth: 3,
  },
});

export default EditScreen;
