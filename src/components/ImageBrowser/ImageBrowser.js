import React, { Component } from 'react';

var ScrollArea = require('react-scrollbar');

export default class ImageBrowser extends Component {

  render() {

    return (
      <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
          <div>
            Image Browser
          </div>
      </ScrollArea>
    );
  }
}
