import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import s from './ImageQueue.css';

import {
  tagImageAtIndex,
} from '../../actions/ImageQueue';

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({
    tagImageAtIndex,
  }, dispatch) }
}

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
		<img alt="sample" src={require(this.props.images[this.props.currentIndex])}></img>
	  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Image);
