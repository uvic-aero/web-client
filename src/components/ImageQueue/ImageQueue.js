import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ImageTaggingPopover from "./ImageTaggingPopover";
import s from "./ImageQueue.css";

import ImageDock from "./ImageDock";

import Checkbox from "material-ui/Checkbox";
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import FirstPage from "material-ui/svg-icons/navigation/first-page";
import LastPage from "material-ui/svg-icons/navigation/last-page";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";

import {
  nextImage,
  previousImage,
  gotoFirstImage,
  gotoLastImage,
  setQueueAutoscroll
} from "../../actions/ImageQueue";

function mapStateToProps(state, props) {
  return {
    images: state.ImageQueue.images,
    currentIndex: state.ImageQueue.currentIndex,
    taggedImageIndices: state.ImageQueue.taggedImageIndices,
    autoscroll: state.ImageQueue.autoscroll
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        nextImage,
        previousImage,
        gotoFirstImage,
        gotoLastImage,
        setQueueAutoscroll
      },
      dispatch
    )
  };
}

class ImageQueue extends Component {
  render() {
    let imgUrl =
      this.props.images[this.props.currentIndex] === undefined
        ? "images/image.jpg"
        : this.props.images[this.props.currentIndex].url;
    let backgroundImage = {
      backgroundImage: "url(" + imgUrl + ")"
    };

    let leftMargins = {
      marginLeft: "5px"
    };

    let rightMargins = {
      marginRight: "5px"
    };

    return (
      <div className={s.root}>
        <div className={s.hero} style={backgroundImage}>
          <div className={s.options}>
            <Checkbox
              label="Auto scroll"
              checked={this.props.autoscroll}
              onCheck={(_ev, checked) => this.props.setQueueAutoscroll(checked)}
            />
          </div>
          <div className={s.buttons}>
            <span onTouchTap={this.props.gotoFirstImage} style={leftMargins}>
              <FirstPage />
            </span>
            <span onTouchTap={this.props.previousImage} style={leftMargins}>
              <ChevronLeft />
            </span>
          </div>
          <div className={s.buttons}>
            <span onTouchTap={this.props.nextImage} style={rightMargins}>
              <ChevronRight />
            </span>
            <span onTouchTap={this.props.gotoLastImage} style={rightMargins}>
              <LastPage />
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
