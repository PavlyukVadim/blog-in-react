import React, { Component } from 'react';
import styles from './PostEditor.scss';

class PostEditor extends Component {
  static getPostByPostId(posts, postId) {
    let i = 0;
    for (; i < posts.length; i++) {
      if (posts[i].id == postId) {
        return posts[i];
      }
    }
  }

  constructor(props) {
    super(props);
    this.postId = this.props.params.postId;
    if(this.postId) {
      this.state = {
        ...PostEditor.getPostByPostId(this.props.posts, this.postId),
      };
    } else {
      this.state = {};  
    }
    this.updateMode = this.props.params.postId;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    const postId = nextProps.params.postId;
    if(postId) {
      this.setState({...PostEditor.getPostByPostId(nextProps.posts, postId)});
    }
  }

  handleTitleChange(e) {
    const newState = Object.assign(
      this.state,
      {
        title: e.target.value,
      }
    );
    this.setState(newState);
  }

  handleTextChange(e) {
    const newState = Object.assign(
      this.state,
      {
        describe: e.target.value,
      }
    );
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const postParams = {
      title: this.state.title,
      describe: this.textInput.textContent,
      image: 'http://mustaqbilpakistan.pk/img/img.png',
      views: this.state.views,
      date: this.state.date,
    };

    if(!this.updateMode) {
      this.props.createPost(postParams)
        .then(() => alert('Post sent !!!'))
        .then(() => this.context.router.push('/admin'));
      } else {
      this.props.updatePostById(this.props.params.postId, postParams)
        .then(() => alert('Post sent !!!'))
        .then(() => this.context.router.push('/admin'));
    }
  }

  render() {
    return (
      <div className={styles.postEditor}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text" 
              required="required"
              value={this.state.title || ''}
              onChange={this.handleTitleChange}
            />
            <label
              className={styles.controlLabel}
              htmlFor="input"
            >
              Title
            </label>
            <i className={styles.bar} />
          </div>
          <div className={styles.formGroup}>
            <textarea
              required="required"
              ref={(input) => { this.textInput = input; }}
              value={this.state.describe}
              onChange={this.handleTextChange}
            />
            <label
              className={styles.controlLabel}
              htmlFor="textarea"
            >
              Text
            </label>
            <i className={styles.bar} />
          </div>
          <div className={styles.checkbox}>
            <label>
              <input type="checkbox" />
              <i className={styles.helper} />
              Update date
            </label>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              type="submit"
            >
              <span>Submit</span>
            </button> 
          </div>
        </form>
      </div>
    );
  }
}

PostEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PostEditor;
