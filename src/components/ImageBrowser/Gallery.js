import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tile from "./Tile";
import s from "./Gallery.css";
import network from "../../network";
import {
  setBrowserLoading
} from "../../actions/imageBrowser";

function mapStateToProps(state, props) {
  return {
    images: state.images,
    show: state.imageBrowser.show,
    loading: state.imageBrowser.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        setBrowserLoading
      },
      dispatch
    )
  };
}


class Gallery extends Component {
  applyFilters(image, index, arr) {
    return true;
  }

  onScroll = e => {
    if (this.props.loading) {
      return;
    }
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 500) {
      // Pass ID of last image we have, and get images that follow that ID
      network.requestNextImages(this.props.images[this.props.images.length-1]._id);
      this.props.setBrowserLoading(true);
    }
  };

  render() {
    return (
      <div className={s.root} onScroll={this.onScroll}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
