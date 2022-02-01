import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Context, Provider } from "../context/BlogContext";

function CreateScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Create Blog Post</Text>
      <View style={styles.titleInput}>
        <Text>Title</Text>
        <TextInput style={{ textAlign: "center" }} />
      </View>

      <View style={styles.contentInput}>
        <Text>Content</Text>
        <TextInput style={{ height: 160 }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    backgroundColor: "#dfe3ee",
    height: 40,
    width: "80%",
    marginVertical: 50,
    flexDirection: "column",
  },
  contentInput: {
    width: "80%",
    height: 160,
    backgroundColor: "#dfe3ee",
  },
});

export default CreateScreen;
