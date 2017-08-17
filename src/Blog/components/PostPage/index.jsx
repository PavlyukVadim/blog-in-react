import React, { Component } from 'react';
import Moment from 'react-moment';
import GeneralPreloader from './../../../components/GeneralPreloader';
import styles from './PostPage.scss';

class PostPage extends Component {
  static getPostByPostId(posts, postId) {
    let i = 0;
    for (; i < posts.length; i++) {
      if (Number(posts[i].id) === postId) {
        return posts[i];
      }
    }
  }

  constructor(props) {
    super(props);
    this.postId = Number(this.props.params.postId);
    this.post = PostPage.getPostByPostId(this.props.posts, this.postId);
    this.state = {
      ...this.post,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.post = PostPage.getPostByPostId(this.props.posts, this.postId);
    this.setState({...this.post});
  }

  componentWillUnmount() {
    this.post.views++;
    this.props.updatePostById(
      this.postId,
      this.post
    );
  }

  render() {
    const date = new Date(this.state.date);
    if (!this.state.title) {
      return <GeneralPreloader />
    }
    
    return (
      <div className={`${styles.postPage} col-lg-9`}>
        <div>
          <p className={styles.title}>
            {this.state.title}
          </p>
          <div>
            <div className={styles.bgWrap} />
            <img src={this.state.image} alt="news" />
            <p className={styles.stats}>
              <span className={styles.views}>
                <i className="fa fa-eye" />
                <span className={styles.nViews}>
                  {this.state.views}
                </span>
              </span>
              <Moment format="DD/MM/YYYY">
                {date}
              </Moment>
            </p>
          </div>
          <pre className={styles.newsDesc}>
            {this.state.describe}
          </pre>
        </div>
      </div>
    );
  }
}

export default PostPage;
