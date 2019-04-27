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

//Get Average lat and avg long from markers to calculate the center of map
var lat = 48.541883;
var long = -123.372747;

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: lat, lng: long }}
      defaultOptions={defaultMapOptions}
    >
    {props.images.map( (image, idx) => {
    console.log(idx);
    // idx-=1; // index starts at 1 for some dumb reason
    const marker = {
      position: {lat: image.telemetry['lat'], lng: image.telemetry['lon']}
    };
    console.log(marker);
    const label_class = "marker_label_"+idx;
    let imgUrl = props.currentImage ? props.currentImage.url : undefined;
	  console.log(props.currentImage);
      return (
        <MarkerWithLabel
          key={idx}
          position={marker.position}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "white", fontSize: "12px", padding: "2px"}}
          labelClass={label_class}
          labelVisible={ idx === props.currentImageId } // display if current image
          onMouseOver={ () => {props.onMarkerMouseOver(idx)}}
          onMouseOut={ () => {props.onMarkerMouseOut(idx)}} 
        >
          <div>
		    <p>Lon: {marker.position.lng} </p>
		    <p>Lat: {marker.position.lat} </p>
		    <p>Alt: {marker.alt} </p>
		    <p>Img Path: {imgUrl} </p>
			  <img height={300} width={350} src={imgUrl}/>
		  </div>
        </MarkerWithLabel>
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
    // this.forceUpdate();
    console.log(this.props.currentImageId);
  }

  onMarkerMouseOut(markerID) {
    this.props.setCurrentImageID(undefined);
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
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentImageId: state.mapMarkerImage.currentImageId,
    images: state.mapMarkerImage.images,
    currentImage: state.mapMarkerImage.images[state.mapMarkerImage.currentImageId],
  }
};

export default connect(mapStateToProps, { setCurrentImageID, fetchImages })(MapView);

