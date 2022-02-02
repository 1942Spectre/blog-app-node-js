import createDataContext from "./createDataContext";

var id = 0;
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      id = id + 1;
      return [
        ...state,
        {
          id: id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete":
      return state.filter((item) => item.id != action.payload);
    case "update":
      return [
        ...state,
        {
          id:action.payload.id,
          title: action.payload.new_title,
          content: action.payload.new_content,
        },
      ].filter((item) => item.id != action.payload.id);
  }
};

function addBlogPost(dispatch) {
  return (title, content) =>
    dispatch({ type: "add", payload: { title: title, content: content } });
}

function removeBlogPost(dispatch) {
  return (id) => dispatch({ type: "delete", payload: id });
}

function updateBlogPost(dispatch) {
  return (id, title, content) =>
    dispatch({
      type: "update",
      payload: { id: id, new_title: title, new_content: content },
    });
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, removeBlogPost, updateBlogPost },
  []
);
