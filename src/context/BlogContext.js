import React from "react";


// Provides context data to app
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    )
}
