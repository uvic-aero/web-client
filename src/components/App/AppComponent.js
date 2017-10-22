import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar";
import s from "./AppComponent.css";

import Paper from "material-ui/Paper";

export default class AppComponent extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={s.root}>
        <Paper className={s.sidebar} zDepth={3}>
          <Sidebar />
        </Paper>
        <div className={s.child}>{this.props.children}</div>
      </div>
    );
  }
}
