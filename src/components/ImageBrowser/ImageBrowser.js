import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./ImageBrowser.css";

function mapStateToProps(state, props) {
  return {
    images: state.images
  };
}

class ImageBrowser extends Component {
  render() {
    return (
      <div className={s.mainPage}>
        <div>
          {this.props.images
            .map((img, i) => (
              <img
                key={img._id}
                alt={i}
                className={s.imageGrid}
                src={this.props.images[i].url}
              />
            ))
            .reverse()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ImageBrowser);
