import React, { Component, Fragment } from "react";
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
import RaisedButton from "material-ui/RaisedButton";

import {
  nextImage,
  previousImage,
  gotoFirstImage,
  gotoLastImage,
  setQueueAutoscroll,
  openCurrentImageAsTab
} from "../../actions/ImageQueue";

function mapStateToProps(state, props) {
  return {
    images: state.images,
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
        setQueueAutoscroll,
        openCurrentImageAsTab
      },
      dispatch
    )
  };
}

class ImageQueue extends Component {
  componentDidMount() {
    document.addEventListener("keypress", this.handleInput.bind(this));
  }

  componentWillMount() {
    document.removeEventListener("keypress", this.handleInput.bind(this));
  }

  handleInput = ev => {
    console.log(ev.keyCode);
    switch (ev.keyCode) {
      case 37: // Left arrow
        this.props.previousImage(this.props.images);
        break;
      case 39: // Right arrow
        this.props.nextImage(this.props.images);
        break;
      default:
        break;
    }
  };

  render() {
    const current_image = this.props.images[this.props.currentIndex];
    const telemetry = current_image ? current_image["telemetry"] : undefined;
    const time = current_image ? new Date(current_image.timestamp) : undefined;

    let imgUrl =
      current_image === undefined ? "images/image.jpg" : current_image.url;
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
        {current_image && (
          <div className={s.info_container}>
            <div className={s.info_key}>Taken:</div>
            <div className={s.info_value}>
              {time.getHours() < 10 ? 0 : ""}
              {time.getHours()}:{time.getMinutes() < 10 ? 0 : ""}
              {time.getMinutes()}:{time.getSeconds() < 10 ? 0 : ""}
              {time.getSeconds()}
            </div>
            {telemetry && (
              <span>
                <div className={s.info_key}>Lat:</div>
                <div className={s.info_value}>{telemetry.lat}</div>
                <div className={s.info_key}>Lon:</div>
                <div className={s.info_value}>{telemetry.lon}</div>
                <div className={s.info_key}>Alt:</div>
                <div className={s.info_value}>{telemetry.alt}m</div>
              </span>
            )}
          </div>
        )}
        <div className={s.hero} style={backgroundImage}>
          <div className={s.actions}>
            <RaisedButton
              onTouchTap={() => window.open(imgUrl, "_blank")}
              label="Open Tab"
              labelColor="black"
              disabled={this.props.images.length === 0}
            />
          </div>
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
            <span
              onTouchTap={() => this.props.previousImage(this.props.images)}
              style={leftMargins}
            >
              <ChevronLeft />
            </span>
          </div>
          <div className={s.buttons}>
            <span
              onTouchTap={() => this.props.nextImage(this.props.images)}
              style={rightMargins}
            >
              <ChevronRight />
            </span>
            <span
              onTouchTap={() => this.props.gotoLastImage(this.props.images)}
              style={rightMargins}
            >
              <LastPage />
            </span>
          </div>
        </div>
        <ImageDock />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageQueue);
