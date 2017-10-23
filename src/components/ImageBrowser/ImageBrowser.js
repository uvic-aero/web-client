import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import Gallery from "./Gallery";
import SideMenu from "./SideMenu";
import s from "./ImageBrowser.css";

function mapStateToProps(state, props) {
  return {};
}

class ImageBrowser extends Component {
  render() {
    return (
      <div className={s.root}>
        <SideMenu />
        <Gallery />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ImageBrowser);
