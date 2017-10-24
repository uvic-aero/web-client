import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Liveview.css";

function mapStateToProps(state, props) {
  return {};
}

class Liveview extends Component {
  render() {
    return <div className={s.root} />;
  }
}

export default connect(mapStateToProps)(Liveview);
