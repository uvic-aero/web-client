import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./SideMenu.css";

function mapStateToProps(state, props) {
  return {
    images: state.ImageQueue.images,
    currentIndex: state.ImageQueue.currentIndex
  };
}

class SideMenu extends Component {
  render() {
    return (
      <div className={s.root}>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SideMenu);
