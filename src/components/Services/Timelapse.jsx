import React, { Component } from 'react';
import { getStatus, getStart, getStop } from "../../api";
import 'bootstrap/dist/css/bootstrap.min.css';

class Timelapse extends Component{
	state = {
		app:'/imageService',
		status: 'Disconnected',
	}
	constructor(){
		super();
		this.handleStart = this.handleStart.bind(this)
		this.handleStatus = this.handleStatus.bind(this)
		this.handleStop = this.handleStop.bind(this)

	}
	async	handleStart() {
		var result = await getStart(this.state.app).then().catch(error=>console.log(error));
		this.setState({ status: result.action });	
	}
	async	handleStop(){
		var result = await getStop(this.state.app).then().catch(error=>console.log(error));
		this.setState({ status: result.action });
	}
	async handleStatus(){
		var result = await getStatus(this.state.app).then().catch(error=>console.log(error));
		this.setState({ status: result.status });	
	}
		render(){
		return(
			<div className='col-sm m-3 border'>
				<p className='h1'>Timelapse</p>
				<span className='h4 fluid'>Status: {this.state.status}</span>
				<button type='button' onClick={this.handleStart} className='btn btn-success btn-block m-2'> Start </button> 
				<button type='button' onClick={this.handleStop} className='btn btn-danger btn-block m-2'> Stop </button>
				<button type='button' onClick={this.handleStatus} className='btn btn-primary btn-block m-2'> Reload Status </button> 
			</div>
		);
	}
}

export default Timelapse 
