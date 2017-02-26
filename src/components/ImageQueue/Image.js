import React, { Component } from 'react';
import image from './image.jpg';

export default class Image extends Component {

  render() {

    return (
	  <div>
		<img alt="sample" src={image}></img>
	  </div>
    );
  }
}
