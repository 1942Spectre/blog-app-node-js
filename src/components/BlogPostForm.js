import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput,Button } from "react-native";
import { Context } from "../context/BlogContext";

function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const id = initialValues.id;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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

      <Button title="Save Blog Post" onPress={id == null ? () => onSubmit(title,content):onSubmit(id,title,content)} />
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

export default BlogPostForm;
