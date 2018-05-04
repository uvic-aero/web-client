import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./Tile.css";
import { browserHistory } from "react-router";
import IconButton from "material-ui/IconButton";
import Star from "material-ui/svg-icons/toggle/star";
import { gotoImageAtIndex } from "../../actions/ImageQueue";

function mapStateToProps(state, props) {
  return { images: state.images };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        gotoImageAtIndex
      },
      dispatch
    )
  };
}

class Tile extends Component {
  showInQueue = () => {
    this.props.gotoImageAtIndex(
      this.props.images.findIndex(el => el._id === this.props._id)
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
