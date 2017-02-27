import React, { Component } from 'react';
import { connect } from 'react-redux'
import s from './ImageQueue.css';

function mapStateToProps(state, props) {
  return {
	images: state.ImageQueue.images,
	currentIndex: state.ImageQueue.currentIndex,
  }
}

class Image extends Component {

  render() {

    return (
	  <div className={s.image}>
		<img alt="sample" src={require(this.props.images[this.props.currentIndex])}></img>
	  </div>
    );
  }
}

export default connect(mapStateToProps)(Image);
