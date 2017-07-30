import React, { Component } from 'react';
import './NewsCard.css';

class NewsCard extends Component {
  render() {
    return (
      <div className="card-wrapper gitem-lg-3 gitem-md-4 gitem-sm-6">
        <a
          href={this.props.info.link}
          target='_blank'
        >
          <div className="news-card">
            <p className="mob-cart-title">{this.props.info.title}</p>
            <div className="img-part">
              <div className="bg-wrap" />
              <img src={this.props.info.image} alt="news" />
            </div>
            <p className="cart-title">{this.props.info.title}</p>
            <p className="short-cart-desc">{this.props.info.describe}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default NewsCard;
