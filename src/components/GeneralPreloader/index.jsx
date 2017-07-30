import React from 'react';
import { Preloader } from 'react-materialize';
import './GeneralPreloader.scss';

export default () => {
  return (
    <div className="preloader">
    	<Preloader flashing/>
  	</div>
  );
};
