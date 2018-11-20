/*global google*/
import React, {Component} from "react";

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const {getMarkers} = require("../../api");
const {defaultMapOptions} = require("./defaultMapOptions");

//Get Average lat and avg long from markers to calculate the center of map
var lat = 48.508814;
var long = -71.652456;

const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

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
          position={marker.position}
          labelAnchor={new google.maps.Point(0, 0)}
          // labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
          labelClass={label_class}
          // labelVisible={false}
          onMouseDown={ (event) => {
            console.log('yes lawd');
            // const display = document.getElementsByClassName(id)[0].style.display;
            // document.getElementsByClassName(id)[0].style.display = display == 'block' ? 'none' : 'block';
          }}
        >
          <div>Hello There!</div>
        </MarkerWithLabel>
      );
    } )}
    

    </GoogleMap>
  ))
);

class MapView extends Component{

  constructor(props){
    super();
    this.state = {
      markers:[
        {}
      ],
    }
  }

  componentDidMount() {

    var dumbData = {markers:[
      {
        position:{
          lat: 48.508814,
          lng:-71.652456,
          },
      },
      {
        position:{
          lat: 48.508824,
          lng:-71.633466,
        },
      },
    ]};

    // make api call to retrieve markers
    getMarkers()
    .then(data => {
      console.log(JSON.stringify(data));
      console.log(data);
      this.setState(data);
    })
    .catch(error => console.error(error));
  }

  render(){
    return(
       <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.state.markers}
      />
    );
  }
}


export default MapView;