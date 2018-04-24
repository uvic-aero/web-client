import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Liveview.css";

import { captureStill, zoomIn, zoomOut } from "../../api";

import RaisedButton from "material-ui/RaisedButton";

function mapStateToProps(state, props) {
  return {};
}

const liveviewUrl = "http://127.0.0.1:8000/liveview.jpg";

class Liveview extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.image_container}>
          <img role="presentation" src={liveviewUrl} className={s.image} />
          <div className={s.buttons}>
            <RaisedButton
              onTouchTap={() => zoomOut()}
              className={s.capture_button}
              label="Zoom out"
              labelColor="black"
            />
            <RaisedButton
              onTouchTap={() => zoomIn()}
              className={s.capture_button}
              label="Zoom in"
              labelColor="black"
            />
            <RaisedButton
              onTouchTap={() => captureStill()}
              className={s.capture_button}
              label="Capture Still"
              labelColor="black"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Liveview);
