import React, { useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function EditScreen({ navigation }) {
  const { state } = useContext(Context);
  const postID = navigation.getParam("postID");
  const post = state.find((item) => item.id == postID);

  const { updateBlogPost } = useContext(Context);

  // Error Below, variable post somehow contains two undefined variables alongside the post object
  console.log(post);

  return (
    <>
      <BlogPostForm
        initialValues={{
          id: post.id,
          title: post.title,
          content: post.content,
        }}
        onSubmit={(title, content) => {
          navigation.navigate("Index");
          updateBlogPost(post.id,title, content);
        }}
      />
    </>
  );
}

export default EditScreen;
