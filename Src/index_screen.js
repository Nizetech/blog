import { View, Text, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "./context/blog_context";
const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>indexScreen</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
      <Button title="Add Blog Post" onPress={addBlogPost} />
    </View>
  );
};

export default IndexScreen;
