import React, { Component } from 'react';
import './NewsCard.scss';

class NewsCard extends Component {
  render() {
    return (
      <div className="card-wrapper gitem-lg-3 gitem-md-4 gitem-sm-6">
      	<div className="news-card">
			<img src="https://tproger2.azureedge.net/wp-content/uploads/2017/01/linux-console-300x105.jpg"></img>
      		<p className="cart-title">Не вставляйте в консоль скопированный из Интернета код!</p>
      		<p className="short-cart-desc">Когда нам нужно быстро найти, как решить какую-то задачу в консоли, мы обычно не задумываясь копируем нужные команды и вставляем их в терминал.</p>
      	</div>
      </div>
    );
  }
}

export default NewsCard;
