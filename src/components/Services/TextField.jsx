import React, { Component } from 'react';

class TextField extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
        
    handleSubmit(event){
		this.props.handleSubmit(event);
	}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onblur=""></input>
            </form>

        );
    }


}

export default TextField
