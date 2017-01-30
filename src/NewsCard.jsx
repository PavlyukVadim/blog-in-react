import React, { Component } from 'react';
import './NewsCard.scss';

class NewsCard extends Component {
  render() {
    return (
      <div className="card-wrapper gitem-lg-3 gitem-md-4 gitem-sm-6">
      	<div className="news-card">
			<p className="mob-cart-title">Не вставляйте в консоль скопированный из Интернета код!</p>
			<div className="img-part">
				<div className="bg-wrap"></div>
				<img src="https://tproger2.azureedge.net/wp-content/uploads/2017/01/linux-console-300x105.jpg" alt="news"></img>
				<p className="stats">
					<span className="views">
						<i className="fa fa-eye"></i>
						<span className="n-views">215</span>
					</span>	
					
					<time dateTime="2011-09-08">08.09.2011</time>
				</p>
			</div>
      		<p className="cart-title">Не вставляйте в консоль скопированный из Интернета код!</p>
      		<p className="short-cart-desc">Когда нам нужно быстро найти, как решить какую-то задачу в консоли, мы обычно не задумываясь копируем нужные команды и вставляем их в терминал.</p>
      	</div>
      </div>
    );
  }
}

export default NewsCard;
