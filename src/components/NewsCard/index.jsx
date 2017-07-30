import React, { Component } from 'react';
import styles from './NewsCard.scss';

class NewsCard extends Component {
  render() {
    return (
      <div className="gitem-lg-3 gitem-md-4 gitem-sm-6">
        <a
          href={this.props.info.link}
          target='_blank'
        >
          <div className={styles.newsCard}>
            <p className={styles.mobCartTitle}>
              {this.props.info.title}
            </p>
            <div className={styles.imgPart}>
              <div className={styles.bgWrap} />
              <img src={this.props.info.image} alt="news" />
            </div>
            <p className={styles.cartTitle}>
              {this.props.info.title}
            </p>
            <p className={styles.shortCartDesc}>
              {this.props.info.describe}
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default NewsCard;
