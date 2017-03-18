import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImageTaggingPopover from './ImageTaggingPopover';
import s from './ImageQueue.css';

function mapStateToProps(state, props) {
  return {
	images: state.ImageQueue.images,
	currentIndex: state.ImageQueue.currentIndex,
	taggedImageIndices: state.ImageQueue.taggedImageIndices,
  }
}

class Image extends Component {
  render() {
    return (
	  <div className={s.image}>
		<img alt="sample" src={require(this.props.images[this.props.currentIndex])} />
		<ImageTaggingPopover />
	  </div>
    );
  }
}

export default connect(mapStateToProps)(Image);
