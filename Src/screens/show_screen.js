import React, { useContext, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/blog_context";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  //   console.log(id);
  const { state } = useContext(Context);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditScreen", {
              id: id,
            })
          }
          style={{ marginRight: 15 }}
        >
          <EvilIcons name="pencil" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, id]);

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
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;
