import _ from 'lodash';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import {
  nextImage,
  previousImage,
  gotoImageAtIndex,
} from '../../actions/ImageQueue';

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({
    nextImage,
    previousImage,
	gotoImageAtIndex,
  }, dispatch) }
}

function mapStateToProps(state, props) {
  return {
	images: state.ImageQueue.images,
	currentIndex: state.ImageQueue.currentIndex,
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class ImageDock extends Component {

  render() {

    return (
	  <div style={styles.root}>
		<GridList style={styles.gridList} cols={2.2}>
		  {this.props.images.map((img, i) => (
			<GridTile
			  key={i}
			  title={"an image"}
			  actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
			  titleStyle={styles.titleStyle}
			  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
			>
			  <img src={require(this.props.images[i])} />
			</GridTile>
		  ))}
		</GridList>
	  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDock);
