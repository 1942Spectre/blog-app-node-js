import React, {useContext} from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context);

  return (
    <>
      <BlogPostForm
        initialValues={{ id: null, title: "", content: "" }}
        onSubmit={(title, content) => {
          navigation.navigate("Index");
          addBlogPost(title, content);
        }}
      />
    </>
  );
}

export default CreateScreen;
