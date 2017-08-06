import React, { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'react-moment';
import styles from './PostCard.scss';

class PostCard extends Component {
  render() {
    this.date = new Date(this.props.info.date);
    return (
      <div className="gitem-lg-3 gitem-md-4 gitem-sm-6">
        <Link to={this.props.info.link}>
          <div className={styles.postCard}>
            <p className={styles.mobCartTitle}>
              {this.props.info.title}
            </p>
            <div className={styles.imgPart}>
              <div className={styles.bgWrap} />
              <img
                src={this.props.info.image}
                alt="post"
              />
              { this.props.info.views && this.props.info.date &&
                <p className={styles.postStats}>
                  <span className={styles.views}>
                    <i className="fa fa-eye" />
                    <span className={styles.nViews}>
                      {this.props.info.views}
                    </span>
                  </span>
                  <Moment format="DD/MM/YYYY">
                    {this.props.info.date}
                  </Moment>
                </p>
              }
            </div>
            <p className={styles.cartTitle}>
              {this.props.info.title}
            </p>
            <p
              className={styles.shortCartDesc}
              dangerouslySetInnerHTML={{__html: this.props.info.describe.slice(0, 70) + '...'}}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default PostCard;
