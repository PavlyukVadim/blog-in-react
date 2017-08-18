import React, { Component } from 'react';
import styles from './PostEditor.scss';

class PostEditor extends Component {
  static getPostByPostId(posts, postId) {
    let i = 0;
    for (; i < posts.length; i += 1) {
      if (Number(posts[i].id) === postId) {
        return posts[i];
      }
    }
    return 0;
  }

  constructor(props) {
    super(props);
    this.postId = this.props.params.postId;
    if (this.postId) {
      this.post = PostEditor.getPostByPostId(this.props.posts, Number(this.postId));
      this.state = {
        ...this.post,
      };
    } else {
      this.state = {};
    }
    this.postUpdateMode = this.props.params.postId;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleUpdateDate = this.handleUpdateDate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.postUpdateMode) {
      this.post = PostEditor.getPostByPostId(nextProps.posts, this.postId);
      this.state = {
        ...this.post,
      };
    }
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleTextChange(e) {
    this.setState({
      describe: e.target.value,
    });
  }

  handleUpdateDate() {
    this.setState((prevState) => ({
      updateDate: !prevState.updateDate,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const postParams = {
      title: this.state.title,
      describe: this.textInput.textContent,
      image: 'http://mustaqbilpakistan.pk/img/img.png',
      views: this.state.views,
      date: this.state.updateDate ? Date.now() : this.state.date,
    };

    if (!this.postUpdateMode) {
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
          { this.postUpdateMode &&
            <div className={styles.checkbox}>
              <label htmlFor="updateDate">
                <input
                  id="updateDate"
                  type="checkbox"
                  onChange={this.handleUpdateDate}
                />
                <i className={styles.helper} />
                Update date
              </label>
            </div>
          }
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
  router: React.PropTypes.object.isRequired,
};

export default PostEditor;
