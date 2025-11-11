// import React, { useState } from "react"; // => using useState hook
import React, { useReducer } from "react"; // => using useReducer hook

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  //? Using useState hook
  // const [blogPosts, setBlogPosts] = useState([]); // => using useState hook

  // const addBlogPost = () => {
  //   setBlogPosts([
  //     ...blogPosts,
  //     { title: `Blog Post #${blogPosts.length + 1}` }, //
  //   ]);
  // };

  //? Using useReducer hook
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
