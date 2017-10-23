import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./Tile.css";

function mapStateToProps(state, props) {
  return {};
}

class Tile extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.image}>
          <img key={this.props._id} alt={this.props._id} src={this.props.url} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Tile);
