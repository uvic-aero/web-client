import React, { Component } from 'react';
import { getStatus, getStart, getStop } from "../../api";
import TextField from './TextField'

class PiCamSettings extends Component{
	state = {
		app:'/piCam',
		status: 'Disconnected',
	}
	
	constructor(){
		super();
		this.handleStatus = this.handleStatus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleStatus(){
		var result = await getStatus(this.state.app).then().catch(error=>console.log(error));
		this.setState({ status: result.status });	
	}

	async handleSubmit(event){
		console.log(event);
	}
	render(){
		return(
			<TextField handleSubmit={this.handleSubmit}/>
		);
	}
} 

export default PiCamSettings
