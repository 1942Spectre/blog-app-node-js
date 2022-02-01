import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Ionicons } from "@expo/vector-icons";

function IndexScreen({ navigation }) {
  const { state, addBlogPost, removeBlogPost, updateBlogPost } =
    useContext(BlogContext);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#dfe3ee",
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: "#0055a4",
                    marginVertical: 15,
                    marginHorizontal: 30,
                    justifyContent: "space-between",
                    height: 100,
                    overflow: "hidden",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "60%",
                    }}
                  >
                    <Ionicons name="reader-outline" size={24} color="#0055a4" />
                    <Text style={{ color: "#0055a4" }}>
                      {item.title} , {item.id}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "30%",
                      alignItems: "center",
                      height: "60%",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#0055a4",
                        height: "95%",
                        width: "40%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons
                        name="pencil-outline"
                        size={24}
                        color="#ffffff"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => removeBlogPost(item.title)}
                      style={{
                        backgroundColor: "#0055a4",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40%",
                        height: "95%",
                      }}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={24}
                        color="#ffffff"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({});

export default IndexScreen;
