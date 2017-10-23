import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tile from "./Tile";
import s from "./Gallery.css";

function mapStateToProps(state, props) {
  return {
    images: state.images,
    currentIndex: state.ImageQueue.currentIndex
  };
}

class Gallery extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.images}>
          {this.props.images
            .map(img => <Tile key={img._id} {...img} />)
            .reverse()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
