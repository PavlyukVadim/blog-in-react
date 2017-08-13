import React, { Component } from 'react';
import { Link } from 'react-router';
import GeneralPreloader from '../../../components/GeneralPreloader';
import PostCard from './../PostCard';
import styles from './PostCards.scss';

class PostCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deletePostById = this.deletePostById.bind(this);
  }

  componentDidMount() {
    this.props.getPosts()
      .then(json => this.setState({ posts: json.reverse() }))
  }

  deletePostById(id) {
    this.props.deletePostById(id)
      .then(json => this.setState({ posts: json.reverse() }))
      .then(() => this.props.updateBlogPosts());
  }

  render() {
    console.log(this.props);
    let postCards = <GeneralPreloader />
      if (this.state.posts) {
        postCards = this.state.posts.map((post) => {
          if (post) {
            return (
            <div
              key={post.id}
              className="col-lg-3"
            >
              <PostCard
                post={post}
                deletePostById={this.deletePostById}
              />
            </div>
            )
          }
        });
      }

    return (
      <div className="row">
        {postCards}
        <Link
          className={styles.buttonAdd}
          to={`/admin/edit`}
        >
          +
        </Link>
      </div> 
    );
  }
}

export default PostCards;
