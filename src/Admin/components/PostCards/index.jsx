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
    this.props.getPosts();
  }

  deletePostById(id) {
    this.props.deletePostById(id);
  }

  render() {
    let postCards = <GeneralPreloader />
      if (this.props.posts) {
        postCards = this.props.posts.map((post) => {
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
