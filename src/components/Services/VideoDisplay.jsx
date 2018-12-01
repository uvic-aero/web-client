import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

class VideoDisplay extends Component{
	state = {
		status:'Disconnected'
	}
	render(){
		return(
			<div className='col-sm m-3 border'>
				<p className='h1'>Video Display</p>
				<span className='h4 fluid'>Status: {this.state.status}</span>
				<button type='button' onClick={this.handleStart} className='btn btn-success btn-block m-2'> Start </button> 
				<button type='button' onClick={this.handleStart} className='btn btn-danger btn-block m-2'> Stop </button>
				<button type='button' onClick={this.handleStart} className='btn btn-primary btn-block m-2'> Reload Status </button> 
			</div>
		);
	}
} 

export default VideoDisplay
