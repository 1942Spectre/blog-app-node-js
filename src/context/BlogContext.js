import React, { useState, useReducer } from "react";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { title: `Blog Post #${state.length + 1}`} ];
    case "delete":
      return [...state].filter((item) => item.title != action.payload);
    case "update":
      return [...state, { title: action.payload.new_title }].filter(
        (item) => item.title != action.payload.title
      );
  }
};

const BlogContext = React.createContext();

// Provides context data to app
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer,[]);

  function addBlogPost() {
    dispatch({type:"add"})
  }

  function removeBlogPost(title){
      dispatch({type:'delete',payload:title})
  }

  function updateBlogPost(title,new_title){
    dispatch({type:'update',payload:{title:title,new_title:new_title}})
}

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost:addBlogPost , removeBlogPost:removeBlogPost , updateBlogPost:updateBlogPost}}  >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
