import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context, Provider } from "../context/BlogContext";

function CreateScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Create Blog Post</Text>
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
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
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

export default CreateScreen;
