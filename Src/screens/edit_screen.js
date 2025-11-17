import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context } from "../context/blog_context";
import BlogPostForm from "../components/blog_post_form";

const EditScreen = ({ route, navigation }) => {
  const { id } = route.params || {};
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  if (!blogPost) {
    return null;
  }

  console.log(`===> id: ${id} blogPost: ${blogPost.title} ${blogPost.content}`);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      label="Edit Blog Post"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: "black",
    marginBottom: 15,
  },
});
export default EditScreen;
