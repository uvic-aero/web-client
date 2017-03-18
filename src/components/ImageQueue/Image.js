import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImageTaggingPopover from './ImageTaggingPopover';
import s from './ImageQueue.css';

function mapStateToProps(state, props) {
  return {
	images: state.network.images,
	currentIndex: state.ImageQueue.currentIndex,
	taggedImageIndices: state.ImageQueue.taggedImageIndices,
  }
}

class Image extends Component {

  renderImage = () => {
	if (this.props.images[this.props.currentIndex] === undefined) {
	  return (<span>No Images Have Been Received From the Groundstation</span>)
	}
	else {
	  return (<img alt="sample" src={this.props.images[this.props.currentIndex].url} />)
	}
  }

  render() {
    return (
	  <div className={s.image}>
		{ this.renderImage() }
		<ImageTaggingPopover />
	  </div>
    );
  }
}

export default connect(mapStateToProps)(Image);
