import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tile from "./Tile";
import s from "./Gallery.css";
import network from "../../network";
import { setBrowserLoading } from "../../actions/imageBrowser";

function mapStateToProps(state, props) {
  return {
    images: state.images,
    filters: state.imageBrowser.filters,
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
  applyFilters = (image, index, arr) => {
    if (this.props.filters.untagged && !image.tagged) {
      return true;
    }

    if (this.props.filters.tagged && image.tagged) {
      return true;
    }

    return false;
  };

  onScroll = e => {
    if (this.props.loading) {
      return;
    }
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 500) {
      // Pass ID of last image we have, and get images that follow that ID
      network.requestNextImages(
        this.props.images[this.props.images.length - 1]._id
      );
      this.props.setBrowserLoading(true);
    }
  };

  render() {
    return (
      <div className={s.root} onScroll={this.onScroll}>
        <div className={s.images}>
          {this.props.images
            .filter(this.applyFilters)
            .map(img => <Tile key={img._id} {...img} />)
            .reverse()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
