import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { 
  nextImage, 
  previousImage, 
  gotoFirstImage, 
  gotoLastImage 
} from '../../actions/ImageQueue';

function mapStateToProps(state, props) {
  return {
	images: state.ImageQueue.images,
	currentIndex: state.ImageQueue.currentIndex,
  }
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({
    nextImage,
    previousImage,
    gotoFirstImage,
    gotoLastImage,
  }, dispatch) }
}

class Image extends Component {
  render() {

    return (
	  <div>
		<img alt="sample" src={require(this.props.images[this.props.currentIndex])}></img>
	  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);
