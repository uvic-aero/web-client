import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import ImageService from './ImageService';
import Timelapse from './Timelapse';
import VideoDisplay from './VideoDisplay';

class Services extends Component{
	state = {
	}
	render(){
		return(
			<div className='container'>
				<div className='row'>
					<ImageService />
					<VideoDisplay />
					<Timelapse />
				</div>
			</div>
		);
	}
}

export default Services
