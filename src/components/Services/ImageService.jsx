import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { getStatus, getStart, getStop } from "../../api";
import 'bootstrap/dist/css/bootstrap.min.css';

class ImageService extends Component{
	state = {
		status: 'Disconnected',
		response: 'Null'
	}
	
	handleStart(){
		console.log('starting ImageService');
		getStart('/imageService');
	}
	handleStop(){
		console.log('Stopping ImageService');
		getStop('/imageService');
	}
	handleStatus(){
		console.log('Refreshing Status');
		getStatus('/imageService');
	}
	
	render(){
		return(
			<div className='col-sm m-3 border'>
				<p className='h1'>Image Service</p>
				<span className='h4 fluid'>Status: {this.state.status}</span>
				<button type='button' onClick={this.handleStart} className='btn btn-success btn-block m-2'> Start </button> 
				<button type='button' onClick={this.handleStop} className='btn btn-danger btn-block m-2'> Stop </button>
				<button type='button' onClick={this.handleStatus} className='btn btn-primary btn-block m-2'> Reload Status </button> 
			</div>
		);
	}
} 

export default ImageService
