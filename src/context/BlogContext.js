import React, { useState } from "react";

const BlogContext = React.createContext();

// Provides context data to app
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  function addBlogPost() {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
