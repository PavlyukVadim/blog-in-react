import React from 'react';
import { Preloader } from 'react-materialize';
import './GeneralPreloader.css';

export default () => {
  return (
    <div className="preloader">
    	<Preloader flashing/>
	</div>
  );
};