import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/blog_context";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);
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
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.goBack();
          });
          // navigation.navigate("IndexScreen");
          //? why we are not using navigation.navigate("IndexScreen") here?
          //? because we are not waiting for the addBlogPost to complete before navigating to the index screen
          //? so we are using a callback function to navigate to the index screen after the addBlogPost is complete
          //? this is a better practice because we are not waiting for the addBlogPost to complete before navigating to the index screen
          //? this is a better practice because we are not waiting for the addBlogPost to complete before navigating to the index screen
        }}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
