import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Feather } from "@expo/vector-icons";

// import BlogContext from "./context/blog_context";
import { Context } from "../context/blog_context";
const IndexScreen = ({ navigation }) => {
  // const { data, addBlogPost } = useContext(BlogContext);
  // const { data, addBlogPost } = useContext(Context);
  const { state, addBlogPost, deletePost } = useContext(Context);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
            >
              <View style={styles.blogStyle}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    // console.log(item.id);
                    deletePost(item.id);
                  }}
                >
                  <Feather name="trash" color="black" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      {/* <Button title="Add Blog Post" onPress={addBlogPost} /> */}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
  blogStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});

export default IndexScreen;
