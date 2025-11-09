import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./Src/index_screen";
import { StatusBar } from "expo-status-bar";
import { BlogProvider } from "./Src/context/blog_context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="IndexScreen"
        screenOptions={{
          title: "Blog",
        }}
      >
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
