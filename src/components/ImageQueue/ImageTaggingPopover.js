import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import s from './ImageQueue.css';

import {
  tagImageAtIndex,
} from '../../actions/ImageQueue';

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({
    tagImageAtIndex,
  }, dispatch) }
}

function mapStateToProps(state, props) {
  return {
	currentIndex: state.ImageQueue.currentIndex,
	taggedImageIndices: state.ImageQueue.taggedImageIndices,
  }
}

class ImageTaggingPopover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
		  className={s.taggingButton}
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal:"right",vertical:"bottom"}}
          targetOrigin={{horizontal:"right",vertical:"top"}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageTaggingPopover);
