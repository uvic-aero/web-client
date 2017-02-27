import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import s from './ImageQueue.css';

import Image from './Image';
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
      <div className={s.root}>
		<div className={s.hero}>
		  <div className={s.buttons}>
			<FastRewind
			  onTouchTap={this.props.gotoFirstImage}
			/>
			<SkipPrevious
			  onTouchTap={this.props.previousImage}
			/>
		  </div>
		  <Image />
		  <div className={s.buttons}>
			<SkipNext
			  onTouchTap={this.props.nextImage}
			/>
			<FastForward
			  onTouchTap={this.props.gotoLastImage}
			/>
		  </div>
		</div>
		<ImageDock />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ImageQueue);
