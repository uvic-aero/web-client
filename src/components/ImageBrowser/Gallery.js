import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tile from "./Tile";
import s from "./Gallery.css";

function mapStateToProps(state, props) {
  return {
    images: state.images,
    show: state.imageBrowser.show
  };
}

class Gallery extends Component {
  applyFilters(image, index, arr) {
    return true;
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.images}>
          {this.props.images
            .map(img => <Tile key={img._id} {...img} />)
            .filter(this.applyFilters)
            .reverse()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Gallery);
