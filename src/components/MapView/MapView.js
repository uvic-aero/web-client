/*global google*/
import React, {Component} from "react";
import { connect } from 'react-redux';
import { setCurrentImageID, fetchImages } from '../../actions/mapMarkerImage';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const {defaultMapOptions} = require("./defaultMapOptions");

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={props.avgCoord}
      defaultOptions={defaultMapOptions}
    >
    {props.images.map( (image, idx) => {
    const marker = {
      position: {lat: image.telemetry['lat'], lng: image.telemetry['lon']}
    };

    // Label styles, classes, and values
    const label_class = "marker_label_"+idx;
    let imgUrl = props.currentImage ? props.currentImage.url : undefined;

      return (
        // <div class={'markerWrapper'} style={{height: '500px', width: '500px', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0'}}>
        <MarkerWithLabel
          key={idx}
          position={marker.position}
          labelAnchor={new google.maps.Point(50, 10)}
          labelStyle={{backgroundColor: 'rgba(255,255,255,.7)', borderRadius:'.5', fontSize: "12px", padding: "20px"}}
          labelClass={label_class}
          labelVisible={ idx === props.currentImageId } // display if current image
          onMouseOver={ () => {props.onMarkerMouseOver(idx)}}
          onMouseOut={ () => {props.onMarkerMouseOut(idx)}} 
          // onMouseDown={ () => {props.onMarkerMouseDown(imgUrl)}} 
          zIndex={20000}
        >
          <div>
            <p>Lat: {marker.position.lat} </p>
            <p>Lng: {marker.position.lng} </p>
            <img height={300} width={350} src={imgUrl} />
          </div>
        </MarkerWithLabel>
        // </div>
      );
    })}
    </GoogleMap>
  ))
);

/**
 * MapView uses the mapMarkerImage state from our redux store.
 * Images taken by the PiCam have GPS coordinates attached to them.
 * These images are fetched and stored in redux, and then subsequently mapped to
 * MapView props.
 * MapView also uses redux to set the current image-marker that is being moused over.
 */
class MapView extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentImageId: undefined
    }

    this.onMarkerMouseDown = this.onMarkerMouseDown.bind(this);
    this.onMarkerMouseOver = this.onMarkerMouseOver.bind(this);
    this.onMarkerMouseOut = this.onMarkerMouseOut.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  componentWillMount() {
    window.addEventListener("keydown", this.keyDown, false);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  onMarkerMouseDown(markerID) {
    const markers = this.state.markers;
    markers[markerID].label_visibile = !markers[markerID].label_visibile;
    this.setState({markers});
  }

  onMarkerMouseOver(imageID) {
    this.props.setCurrentImageID(imageID);
  }

  onMarkerMouseOut(markerID) {
    this.props.setCurrentImageID(undefined);
  }

  onMarkerMouseDown(url) {
    window.open(url, "_blank");
  }

  keyDown(event) {
    const key = (event.detail || event.which).toString();
    let curImg = this.props.currentImage;
    if(key == '87' && curImg) {
      window.open(curImg.url, "_blank");
    }
  }
  
  render(){
    return(
       <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        images={this.props.images}
        onMarkerMouseDown={this.onMarkerMouseDown}
        onMarkerMouseOver={this.onMarkerMouseOver}
        onMarkerMouseOut={this.onMarkerMouseOut}
        currentImage={this.props.currentImage}
        currentImageId={this.props.currentImageId}
        avgCoord={this.props.avgCoord}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentImageId: state.mapMarkerImage.currentImageId,
    images: state.mapMarkerImage.images,
    currentImage: state.mapMarkerImage.images[state.mapMarkerImage.currentImageId],
    avgCoord: state.mapMarkerImage.avgCoord
  }
};

export default connect(mapStateToProps, { setCurrentImageID, fetchImages })(MapView);

