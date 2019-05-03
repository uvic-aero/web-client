import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import ImageService from './ImageService';
import Timelapse from './Timelapse';
import PiCamSettings from './PiCamSettings';

class Services extends Component{
	state = {
	}
	render(){
		return(
			<div className='container'>
				<div className='row'>
					<ImageService />
					<PiCamSettings/>
					<Timelapse />
				</div>
			</div>
		);
	}
}

export default Services
