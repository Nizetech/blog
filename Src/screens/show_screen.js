import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/blog_context";

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  console.log(id);
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  if (!blogPost) {
    return (
      <View>
        <Text>Blog post not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
