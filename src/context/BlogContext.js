import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    case "delete":
      return [...state].filter((item) => item.title != action.payload);
    case "update":
      return [...state, { title: action.payload.new_title }].filter(
        (item) => item.title != action.payload.title
      );
  }
};

function addBlogPost() {
  dispatch({ type: "add" });
}

function removeBlogPost(title) {
  dispatch({ type: "delete", payload: title });
}

function updateBlogPost(title, new_title) {
  dispatch({
    type: "update",
    payload: { title: title, new_title: new_title },
  });
}


export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost,removeBlogPost,updateBlogPost},[])
