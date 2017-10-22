import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import _ from "lodash";
import s from "./ImageQueue.css";

import { tagImageAtIndex } from "../../actions/ImageQueue";

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        tagImageAtIndex
      },
      dispatch
    )
  };
}

function mapStateToProps(state, props) {
  return {
    currentIndex: state.ImageQueue.currentIndex,
    taggedImageIndices: state.ImageQueue.taggedImageIndices
  };
}

class ImageTaggingPopover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  renderTagOption = () => {
    if (this.props.taggedImageIndices.indexOf(this.props.currentIndex) === -1) {
      return "Tag image";
    } else {
      return "Untag image";
    }
  };

  render() {
    return (
      <div>
        <RaisedButton
          className={s.taggingButton}
          onTouchTap={this.handleTouchTap}
          label="Tag Image"
          labelColor="black"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              primaryText={this.renderTagOption()}
              onClick={_.partial(
                this.props.tagImageAtIndex,
                this.props.currentIndex
              )}
            />
            <MenuItem primaryText="Auto-hide this menu" />
            <MenuItem primaryText="Another option" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ImageTaggingPopover
);
