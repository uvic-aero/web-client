import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import Image from './Image';

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
      <div>
		<FastRewind
		  onTouchTap={this.props.gotoFirstImage}
		/>
		<SkipPrevious
		  onTouchTap={this.props.previousImage}
		/>
        <Image />
		<SkipNext
		  onTouchTap={this.props.nextImage}
		/>
		<FastForward
		  onTouchTap={this.props.gotoLastImage}
		/>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ImageQueue);
