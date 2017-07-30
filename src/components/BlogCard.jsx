import React, { Component } from 'react';
import { Link } from 'react-router';
import './NewsCard.css';

class BlogCard extends Component {
  render() {
    this.date = new Date(this.props.info.date);
    return (
      <div className="card-wrapper gitem-lg-3 gitem-md-4 gitem-sm-6">
        <div className="news-card">
          <Link to={'/posts/' + this.props.info.id}>
            <p className="mob-cart-title">
              {this.props.info.title}
            </p>
              <div className="img-part">
                <div className="bg-wrap" />
                <img
                  src={this.props.info.image}
                  alt="news"
                />
                <p className="stats">
                  <span className="views">
                    <i className="fa fa-eye" />
                    <span className="n-views">
                      {this.props.info.views}
                    </span>
                  </span>	
                  <time dateTime={this.props.info.date}>
                    {('0' + this.date.getDate()).slice(-2) + '/' + ('0'+(this.date.getMonth()+1)).slice(-2) + '/' +
                  this.date.getFullYear() + ' '}
                  </time>
                </p>
              </div>
            <p className="cart-title">
              {this.props.info.title}
            </p>
            <p
              className="short-cart-desc"
              dangerouslySetInnerHTML={{__html: this.props.info.describe.slice(0, 70) + '...'}}
            >
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default BlogCard;
