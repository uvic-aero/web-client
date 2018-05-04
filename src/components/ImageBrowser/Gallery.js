import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tile from "./Tile";
import s from "./Gallery.css";
import network from "../../network";

function mapStateToProps(state, props) {
  return {
    images: state.images,
    show: state.imageBrowser.show
  };
}

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextLoad: Date.now()
    };
  }

  applyFilters(image, index, arr) {
    return true;
  }

  onScroll = e => {
    if (this.state.nextLoad > Date.now()) {
      return;
    }
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= 0.8 * target.scrollHeight) {
      // Pass ID of last image we have, and get images that follow that ID
      network.requestNextImages(this.props.images[this.props.images.length-1]._id);
      this.setState({nextLoad: Date.now() + 2000});
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

export default connect(mapStateToProps)(Gallery);
