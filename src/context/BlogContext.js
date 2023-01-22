import createDataContext from '../context/createDefaultContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {

    case 'get_blogposts':
      return action.payload;
    case 'add_blogpost':
      return [...state,
      {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content
      }];
    case 'delete_blogpost':
      return state.filter((blogpost) => blogpost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost;
      });

    default:
      return state;

  }
};

const getBlogPost = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogpost');
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogpost', { title, content })
    //   dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) callback();

  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogpost/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogpost/${id}`, { title, content });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
  []
);


//This is when we use useState we will now use useReducer
// export const BlogProvider = ({ children }) => {
//   const [blogPosts,setBlogPosts] = useState([]);

//   const addBlogPost = () => {
//     setBlogPosts([...blogPosts,{title:`Blog Post #${blogPosts.length + 1}`}]);
//   }

//   return (
//     <BlogContext.Provider value={{data:blogPosts, addBlogPost}}>
//       {children}
//     </BlogContext.Provider>
//   );
// };
//export default BlogContext;
