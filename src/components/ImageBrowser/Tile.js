import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./Tile.css";
import { browserHistory } from "react-router";
import IconButton from "material-ui/IconButton";
import Star from "material-ui/svg-icons/toggle/star";

function mapStateToProps(state, props) {
  return {};
}

class Tile extends Component {
  showInQueue = () => {
    browserHistory.push("/");
  };

  render() {
    return (
      <div className={s.root} onClick={this.showInQueue}>
        <div className={s.image}>
          <img key={this.props._id} alt={this.props._id} src={this.props.url} />
          {this.props.tagged && (
            <IconButton>
              <Star color="rgb(0, 188, 212)" viewBox="0 0 24 24" />
            </IconButton>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Tile);
