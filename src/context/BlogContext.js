import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

var id = 0;
const blogReducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;
    case "delete":
      return state.filter((item) => item.id != action.payload);
    case "update":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.new_title,
          content: action.payload.new_content,
        },
      ].filter((item) => item.id != action.payload.id);
  }
};

function getBlogPosts(dispatch) {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    // response.data = [{post} , {post} , {post}...]

    dispatch({ type: "get", payload: response.data });
  };
}

function addBlogPost(dispatch) {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title: title, content: content });
  };
}

function removeBlogPost(dispatch) {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete", payload: id });
  };
}

function updateBlogPost(dispatch) {
  return async (id , title , content ) => {
    await jsonServer.put(`/blogposts/${id}` , {title:title, content:content})
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, removeBlogPost, updateBlogPost },
  []
);
