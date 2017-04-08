import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import ImageTaggingPopover from './ImageTaggingPopover';
import s from './ImageQueue.css';

import ImageDock from './ImageDock';

import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import FastForward from 'material-ui/svg-icons/av/fast-forward';

import {
  nextImage,
  previousImage,
  gotoFirstImage,
  gotoLastImage
} from '../../actions/ImageQueue';

function mapStateToProps(state, props) {
  return {
	images: state.network.images,
	currentIndex: state.ImageQueue.currentIndex,
	taggedImageIndices: state.ImageQueue.taggedImageIndices,
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

	let imgUrl = this.props.images[this.props.currentIndex] === undefined ? 'images/image.jpg' : this.props.images[this.props.currentIndex].url 
	let backgroundImage = {
	  backgroundImage: 'url(' + imgUrl + ')'
	}

    return (
      <div className={s.root}>
		<div className={s.hero} style={backgroundImage}>
		  <div className={s.buttons}>
			<span>
			  <FastRewind
				onTouchTap={this.props.gotoFirstImage}
			  />
			</span>
			<span>
			  <SkipPrevious
				onTouchTap={this.props.previousImage}
			  />
			</span>
		  </div>
		  <div className={s.buttons}>
			<span>
			  <SkipNext
				onTouchTap={this.props.nextImage}
			  />
			</span>
			<span>
			  <FastForward
				onTouchTap={this.props.gotoLastImage}
			  />
			</span>
		  </div>
		</div>
		<ImageTaggingPopover />
		<ImageDock />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageQueue);
