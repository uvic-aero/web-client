import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Image from './Image';

import SkipNext from 'material-ui/svg-icons/av/skip-next';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';

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

class ImageQueue extends Component {

  render() {

    return (
      <div>
		<SkipPrevious
		  label='Previous Image'
		  onTouchTap={this.props.previousImage}
		/>
        <Image />
		<SkipNext
		  label='Next Image'
		  onTouchTap={this.props.nextImage}
		/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageQueue);
