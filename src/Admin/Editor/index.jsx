import { connect } from 'react-redux';
import axios from 'axios';
import PostEditor from './../components/PostEditor';
import { createPost } from './../actions';
import { 
  fetchBlogPostsIfNeeded,
  updatePostById,
} from './../../Blog/actions';


const mapStateToProps = (state) => {
  const notEmptyPosts = state.blog.posts.items.filter((item) => item !== null);
  notEmptyPosts.forEach((post) => post.link = `posts/${post.id}`);
  return {
    posts: notEmptyPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (data) => dispatch(createPost(data)),
    updatePostById: (data, id) => dispatch(updatePostById(data, id)),
  };
};

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostEditor);

export default Editor;
