import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues, label }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title={label} onPress={() => onSubmit(title, content)} />
    </View>
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
export default BlogPostForm;
