import React, { Component } from 'react';
import Image from 'C:/Users/Sharon Umute/Desktop/Aerowebclient/src/components/ImageQueue/Image';
import ImageDock from 'C:/Users/Sharon Umute/Desktop/Aerowebclient/src/components/ImageQueue/ImageDock';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import s from 'C:/Users/Sharon Umute/Desktop/Aerowebclient/src/components/ImageQueue/ImageQueue.css';


import FastRewind from 'material-ui/svg-icons/av/fast-rewind';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import FastForward from 'material-ui/svg-icons/av/fast-forward';

import {
  nextImage,
  previousImage,
  gotoFirstImage,
  gotoLastImage
} from 'C:/Users/Sharon Umute/Desktop/Aerowebclient/src/actions/ImageQueue';

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({
    nextImage,
    previousImage,
    gotoFirstImage,
    gotoLastImage,
  }, dispatch) }
}

export default class ImageBrowser extends Component {

  render() {

    var body ={
      padding: 50,
      backgroundColor: "#E9E6E6",
      fontFamily: "sans-serif"
    }
    var listMainHeaderInput ={
      padding: 10,
      fontSize: 16,
      border: 2,
      solid: "#FFF"
    }
    var listMainHeaderButton ={
      padding: 10,
      fontSize: 16,
      margin: 10,
      backgroundColor: "#0066FF",
      color: "#FFF",
      border: 2, 
      solid: "#0066FF"
    }
    
    var todoListMainTheListLi= {
      backgroundColor: "#E9E6E6",
      padding: 30,
      marginBottom: 30,
      width: 300,
      height: 300
    }

    var destination = document.querySelector("#container");

    var TodoItems = React.createClass({
      render: function() {
        var todoEntries = this.props.entries;

        function createTasks(item) {
          return <img key={item.key} alt={item.key} style={todoListMainTheListLi} src={item.text} />
        }
    
        var listItems = todoEntries.map(createTasks);

        return (
          <ul className="theList">
            {listItems.reverse()}
          </ul>
        );
      }
    });

    var TodoList = React.createClass({

      getInitialState: function() {
        return {
          items: [] //accessed via this.state.items
        };
      },

      addItem: function(e) {
        var itemArray = this.state.items;
  
        itemArray.push(
          {
            text: this.props.nextImage,
            key: Date.now()
          }
        );
      
        this.setState({
          items: itemArray
        });
      
        this._inputElement.value = "";
      
        e.preventDefault();
      },

      render: function() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} placeholder="enter image url" style={listMainHeaderInput}>
                </input>
                <button type="submit" style={listMainHeaderButton}>add</button>
              </form>
            </div>
            <TodoItems entries={this.state.items}/>
          </div>
        );
      }
    });


    return (
      <html>
      <head>
        <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>        
      </head>

      <body style={body}>
        <div id="container">
          <TodoList/>
        </div>
        {destination}

        <script type="text/babel">
        </script>
      </body>
      </html>
              
    );
  }
}
