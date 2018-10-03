import React, {Component} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

//axios is imported to assist with http requests
import axios from 'axios'

//import get from "../../api";
const marker_url = 'http://192.168.0.110:24002/markers'

//Request Markers From Ground Station 
var markers = [];

//Get Average lat and avg long from markers to calculate the center of map
var lat = 48.508814;
var long = -71.652456;
  


const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: lat, lng: long }}
      defaultOptions={{
        mapTypeId: 'terrain', 
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >

    {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}
    

    </GoogleMap>
  ))
);




class MapView extends Component{

// These 2 markers serve as dummy markers, request markers with const marker_url and fill in necesarry values




  constructor(props){
    super();
    this.state = {

      markers:[{
        position:{
          lat: 48.508814,
          lng:-71.652456,
          },
        icon: 'https://khms1.googleapis.com/kh?v=810&hl=en&x=44837&y=104704&z=18',
        },
        {
          position:{
            lat: 48.508824,
            lng:-71.633466,
            }
          },
      ]

    }
  }


  render(){
    return(
      <CustomSkinMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.state.markers}
      >

      </CustomSkinMap>

    );
  }
}


export default MapView;