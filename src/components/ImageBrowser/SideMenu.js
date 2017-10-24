import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./SideMenu.css";

import Checkbox from "material-ui/Checkbox";

import { setShowUntagged } from "../../actions/imageBrowser";

function mapStateToProps(state, props) {
  return {
    show: state.imageBrowser.show
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        setShowUntagged
      },
      dispatch
    )
  };
}

class SideMenu extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.menu_group}>
          <div className={s.menu_title}>Show</div>
          <div className={s.menu_content}>
            <Checkbox
              label="Untagged"
              checked={this.props.show.untagged}
              onCheck={(ev, checked) => this.props.setShowUntagged(checked)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
