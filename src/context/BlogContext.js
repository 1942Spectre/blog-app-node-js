import createDataContext from "./createDataContext";

var id = 0
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      id = id+1
      return [...state, { id:id , title: `Blog Post #${state.length + 1}`} ]
    case "delete":
      return state.filter((item) => item.id != action.payload);
    case "update":
      return [...state, { title: action.payload.new_title }].filter(
        (item) => item.id != action.payload.id
      );
  }
};

function addBlogPost(dispatch) {
  return () => dispatch({ type: "add" });
}

function removeBlogPost(dispatch) {
  return (id) => dispatch({ type: "delete", payload: id });
}

function updateBlogPost(dispatch) {
  return (id,title) => dispatch({
    type: "update",
    payload: { id: id, new_title: title },
  });
}


export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost,removeBlogPost,updateBlogPost},[])
