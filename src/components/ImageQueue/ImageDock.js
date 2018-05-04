import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Star from "material-ui/svg-icons/toggle/star";
import s from "./ImageQueue.css";

import {
  gotoImageAtIndex
} from "../../actions/ImageQueue";

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        gotoImageAtIndex
      },
      dispatch
    )
  };
}

function mapStateToProps(state, props) {
  return {
    images: state.images,
    currentIndex: state.ImageQueue.currentIndex,
    taggedImageIndices: state.ImageQueue.taggedImageIndices
  };
}

class ImageDock extends Component {
  renderGridTileStyle = i => {
    if (this.props.currentIndex === i) {
      return {
        boxSizing: "border-box",
        border: "4px solid rgb(0,188,212)"
      };
    } else {
      return {
        boxSizing: "border-box",
        border: "4px solid transparent"
      };
    }
  };

  renderStar = i => {
    if (this.props.taggedImageIndices.indexOf(i) === -1) {
      return null;
    } else {
      return (
        <IconButton>
          <Star color="rgb(0, 188, 212)" />
        </IconButton>
      );
    }
  };

  render() {
    return (
      <div className={s.dock}>
        <GridList className={s.gridList} cols={1} cellHeight={150}>
          {this.props.images.map((img, i) => (
            <GridTile
              className={s.titleStyle}
              key={img._id}
              title=""
              actionIcon={this.renderStar(i)}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              style={this.renderGridTileStyle(i)}
              onTouchTap={_.partial(this.props.gotoImageAtIndex, i)}
            >
              <img src={this.props.images[i].url} role="presentation"/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDock);
