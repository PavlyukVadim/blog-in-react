import React, { Component } from 'react';
import { Link } from 'react-router';
import GeneralPreloader from '../GeneralPreloader';
import styles from './AdminPosts.scss';

class PostElement extends Component {
  render() {
    this.date = new Date(this.props.post.date);
    return (
      <div className={styles.adminPosts}>
        <div>
          <p className={styles.title}>
            {this.props.post.title}
          </p>
          <div>
            <div className={styles.bgWrap} />
            <p className={styles.stats}>
              <span className={styles.views}>
                <i className="fa fa-eye" />
                <span className={styles.nViews}>
                  {this.props.post.views}
                </span>
              </span>
              <time dateTime={this.props.post.date}>
                { 
                  ('0' + this.date.getDate()).slice(-2) + '/' + ('0' + (this.date.getMonth() + 1)).slice(-2) + '/' +
                  this.date.getFullYear() + ' '
                }
              </time>
            </p> 
            <ul className={styles.controlPanel}>
              <li
                className={styles.delete}
                onClick={() => this.props.deletePostById(this.props.post.id)}
              >
                <Link>Delete</Link>
              </li>
              <li>
                <Link to={`/admin/edit/${this.props.post.id}`}>Edit</Link>
              </li>
              <li>
                <Link to={`/posts/${this.props.post.id}`}>View</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class AdminPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deletePostById = this.deletePostById.bind(this);
  }

  componentDidMount() {
    this.props.APIAccess.getPosts()
      .then(json => this.setState({ posts: json.reverse() }))
  }

  deletePostById(id) {
    this.props.APIAccess.deletePostById(id)
      .then(json => this.setState({ posts: json.reverse() }))
      .then(() => this.props.updateBlogPosts());
  }

  render() {
    let postElements = < GeneralPreloader / >
      if (this.state.posts) {
        postElements = this.state.posts.map((post) => {
          if (post) {
            return (
              <PostElement
                key={post.id}
                post={post}
                deletePostById={this.deletePostById}
              />
            )
          }
        });
      }

    return (
      <div className="full-grid">
        {postElements}
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

export default AdminPosts;
