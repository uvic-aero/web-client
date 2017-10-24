import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Liveview.css";

import RaisedButton from "material-ui/RaisedButton";

function mapStateToProps(state, props) {
  return {};
}

const LiveviewUrl = "http://127.0.0.1:8080/liveview.jpg";

class Liveview extends Component {
  captureStill() {}

  render() {
    return (
      <div className={s.root}>
        <div className={s.image_container}>
          <img role="presentation" src={LiveviewUrl} className={s.image} />
          <RaisedButton
            onTouchTap={() => this.captureStill()}
            className={s.capture_button}
            label="Capture Still"
            labelColor="black"
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Liveview);
