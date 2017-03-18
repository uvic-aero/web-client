import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import cx from 'classnames';
import s from './ImageBrowser.css';

function mapStateToProps(state, props) {
  return {
	images: state.network.images,
	currentIndex: state.ImageQueue.currentIndex,
  }
}

class ImageBrowser extends Component {

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
          return
          {this.props.images.map((img, i) => (
              <img key={i} alt={i} style={todoListMainTheListLi} src={this.props.images[i].url} />
            ))}
          
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
            text: this._inputElement.value,
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
              
            </div>
          </div>
        );
      }
    });


    return (
      <div style={body}>
        <div id="container">
          {this.props.images.map((img, i) => (
              <img key={i} alt={i} style={todoListMainTheListLi} src={this.props.images[i].url} />
            ))}
        </div>
        {destination}
	  </div>
    );
  }
}

export default connect(mapStateToProps)(ImageBrowser);
