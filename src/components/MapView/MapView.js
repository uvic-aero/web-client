import React, {Component} from "react";
import { connect } from 'react-redux';
import { setCurrentImageID } from '../actions/mapMarkerImage';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const {getMarkers} = require("../../api");
const {defaultMapOptions} = require("./defaultMapOptions");

//Get Average lat and avg long from markers to calculate the center of map
var lat = 48.508814;
var long = -71.652456;

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: lat, lng: long }}
      defaultOptions={defaultMapOptions}
    >

    {props.markers.map( function(marker, idx) {
      const label_class = "marker_label_"+idx;
      return (
        <MarkerWithLabel
          key={idx}
          position={marker.position}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
          labelClass={label_class}
          labelVisible={marker.label_visibile}
          onMouseOver={ () => {props.onMarkerMouseOver(idx)}}
          onMouseOut={ () => {props.onMarkerMouseOut(idx)}}
        >
          <div>Hello There! I am Marker Number {idx}</div>
        </MarkerWithLabel>
      );
    } )}
    </GoogleMap>
  ))
);

class MapView extends Component{

  constructor(props) {
    super();
    this.state = {
      markers:[
        {}
      ],
    };

    this.onMarkerMouseDown = this.onMarkerMouseDown.bind(this);
    this.onMarkerMouseOver = this.onMarkerMouseOver.bind(this);
    this.onMarkerMouseOut = this.onMarkerMouseOut.bind(this);
  }

  componentDidMount() {

    var dumbData = {markers:[
      {
        label_visibile: false,
        position:{
          lat: 48.508814,
          lng:-71.652456,
          },
      },
      {
        label_visibile: false,
        position:{
          lat: 48.508824,
          lng:-71.633466,
        },
      },
    ]};

    // make api call to retrieve markers
    getMarkers()
    .then(data => {
      console.log(data);
      this.setState(dumbData);
    })
    .catch(error => console.error(error));
  }

  onMarkerMouseDown(markerID) {
    const markers = this.state.markers;
    markers[markerID].label_visibile = !markers[markerID].label_visibile;
    this.setState({markers});
  }

  onMarkerMouseOver(markerID) {
    const markers = this.state.markers;
    markers[markerID].label_visibile = true;
    this.setState({markers});
  }

  onMarkerMouseOut(markerID) {
    const markers = this.state.markers;
    markers[markerID].label_visibile = false;
    this.setState({markers});
  }

  render(){
    return(
       <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.state.markers}
        onMarkerMouseDown={this.onMarkerMouseDown}
        onMarkerMouseOver={this.onMarkerMouseOver}
        onMarkerMouseOut={this.onMarkerMouseOut}
      />
    );
  }
} export default connect(null, { setCurrentImageID })(MapView);