import React, { Component } from 'react';
import s from './AppComponent.css';

export default class AppComponent extends Component {

  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  render() {

    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    );
  }
}
