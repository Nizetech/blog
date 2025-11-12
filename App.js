import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./Src/screens/index_screen";
import { StatusBar } from "expo-status-bar";
// import { BlogProvider } from "./Src/context/blog_context";
import { Provider } from "./Src/context/blog_context";
import ShowScreen from "./Src/screens/show_screen";
import CreateScreen from "./Src/screens/create_screen";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

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
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={({ navigation }) => ({
            // headerTitle: "Blog Posts",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateScreen")}
                style={{ marginRight: 15 }}
              >
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
    // <BlogProvider>
    //   <App />
    // </BlogProvider>
  );
};
