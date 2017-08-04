import React, { Component } from 'react';
import styles from './PostCard.scss';

class PostCard extends Component {
  render() {
    this.date = new Date(this.props.info.date);
    return (
      <div className="gitem-lg-3 gitem-md-4 gitem-sm-6">
        <a
          href={this.props.info.link}
        >
          <div className={styles.postCard}>
            <p className={styles.mobCartTitle}>
              {this.props.info.title}
            </p>
            <div className={styles.imgPart}>
              <div className={styles.bgWrap} />
              <img
                src={this.props.info.image}
                alt="news"
              />
              { this.props.info.views && this.props.info.date &&
                <p className={styles.postStats}>
                  <span className={styles.views}>
                    <i className="fa fa-eye" />
                    <span className={styles.nViews}>
                      {this.props.info.views}
                    </span>
                  </span> 
                  <time dateTime={this.props.info.date}>
                    {('0' + this.date.getDate()).slice(-2) + '/' + ('0'+(this.date.getMonth()+1)).slice(-2) + '/' +
                  this.date.getFullYear() + ' '}
                  </time>
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
        </a>
      </div>
    );
  }
}

export default PostCard;
