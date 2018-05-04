import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import s from "./Liveview.css";

import { captureStill, zoomIn, zoomOut, getMode, setMode } from "../../api";

import RaisedButton from "material-ui/RaisedButton";

function mapStateToProps(state, props) {
  return {};
}

const liveviewUrl = "http://127.0.0.1:5000";

const mode2str = mode =>
  mode === 0 ? "None" : mode === 1 ? "Still" : mode === 2 ? "Live" : "Unknown";

class Liveview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusTimer: null,
      statusCall: false,
      currentMode: mode2str(-1),
      wantedMode: mode2str(-1)
    };
  }

  handleInput = ev => {
    ev.preventDefault();
    switch (ev.keyCode) {
      case 38: // Up arrow
        zoomIn();
        break;
      case 40: // Down arrow
        zoomOut();
        break;
      case 13: // Enter
        captureStill();
        break;
      default:
        break;
    }
  };

  statusHandler() {
    if (this.state.statusCall) {
      return;
    }

    getMode()
      .then(modes =>
        this.setState({
          statusCall: false,
          currentMode: mode2str(modes.current),
          wantedMode: mode2str(modes.wanted)
        })
      )
      .catch(() =>
        this.setState({
          currentMode: mode2str(-1),
          wantedMode: mode2str(-1),
          statusCall: false
        })
      );

    this.setState(() => ({
      statusCall: true
    }));
  }

  componentDidMount() {
    const statusTimer = setInterval(this.statusHandler.bind(this), 2000);
    this.setState(() => ({ statusTimer }));
    document.addEventListener("keypress", this.handleInput.bind(this));
  }

  componentWillUnmount() {
    clearInterval(this.state.statusTimer);
    document.removeEventListener("keypress", this.handleInput.bind(this));
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.status_container}>
          <div className={s.status_block}>
            <div className={s.status_header}>Current Mode</div>
            <div className={s.status_content}>{this.state.currentMode}</div>
          </div>
          <div className={s.status_block}>
            <div className={s.status_header}>Target Mode</div>
            <div className={s.status_content}>{this.state.wantedMode}</div>
          </div>
        </div>
        <div className={s.image_container}>
          <img role="presentation" src={liveviewUrl} className={s.image} />
          <div className={s.buttons}>
            <RaisedButton
              onTouchTap={() => setMode(1)}
              className={s.capture_button}
              label="Set Still Mode"
              labelColor="black"
            />
            <RaisedButton
              onTouchTap={() => setMode(2)}
              className={s.capture_button}
              label="Set Live Mode"
              labelColor="black"
            />
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
