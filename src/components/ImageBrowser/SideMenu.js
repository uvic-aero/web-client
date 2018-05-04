import _ from "lodash";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import s from "./SideMenu.css";

import Checkbox from "material-ui/Checkbox";

import { setFilter } from "../../actions/imageBrowser";

function mapStateToProps(state, props) {
  return {
    filters: state.imageBrowser.filters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(
      {
        setFilter
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
              checked={this.props.filters.untagged}
              onCheck={(ev, checked) => this.props.setFilter('untagged', checked)}
            />
            <Checkbox
              label="Tagged"
              checked={this.props.filters.tagged}
              onCheck={(ev, checked) => this.props.setFilter('tagged', checked)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
