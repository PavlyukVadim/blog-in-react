import React, { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import styles from './PostCard.scss';

class PostCard extends Component {
  render() {
    const date = new Date(this.props.post.date);
    return (
      <div className={styles.PostCard}>
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
              <Moment format="DD/MM/YYYY">
                {date}
              </Moment>
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

export default PostCard;
