/*global google*/
import React, {Component} from "react";

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const {getMarkers} = require("../../api");
const {defaultMapOptions} = require("./defaultMapOptions");

//Get Average lat and avg long from markers to calculate the center of map
var lat = 48.508814;
var long = -71.652456;

const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}

const StyledMapWithAnInfoBox = compose(
  // withProps({
  //   googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc",
  //   loadingElement: <div style={{ height: `100%` }} />,
  //   containerElement: <div style={{ height: `100vh` }} />,
  //   mapElement: <div style={{ height: `100%` }} />,
  //   center: { lat: 25.03, lng: 121.6 },
  //   markers: this.state.markers,
  // }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={props.center}
    defaultOptions={defaultMapOptions} // defined in ./defaultMapOptions
  >
    <InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          Hello, Taipei!
        </div>
      </div>
    </InfoBox>
    {props.markers.map(marker => (
      <Marker
        // key={ generateKey(marker.position.lat) }>
        {...marker}
      >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>}
      </Marker>
    ))}
    {/* <Marker
      position={{ lat: 22.6273, lng: 120.3014 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>}
    </Marker> */}
  </GoogleMap>
);

// const CustomSkinMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={13}
//       defaultCenter={{ lat: lat, lng: long }}
//       defaultOptions={defaultMapStyles}
//     >
//     <InfoBox
//       // defaultPosition={{ lat: lat, lng: long }}
//       options={{ closeBoxURL: ``, enableEventPropagation: true }}
//     >
//       <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
//         <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
//           Hello, Taipei!
//         </div>
//       </div>
//     </InfoBox>
    // {props.markers.map(marker => (
    //   <Marker
    //     {...marker}
    //   />
    // ))}
    
//     </GoogleMap>
//   ))
// );

class MapView extends Component{

  constructor(props){
    super();
    this.state = {
      // These 2 markers serve as dummy markers, request markers with const marker_url and fill in necesarry values
      // markers:[
      //   {
      //     position:{
      //       lat: 48.508814,
      //       lng:-71.652456,
      //       },
      //     icon: 'https://khms1.googleapis.com/kh?v=810&hl=en&x=44837&y=104704&z=18',
      //   },
        // {
        //   position:{
        //     lat: 48.508824,
        //     lng:-71.633466,
        //   }
        // },
      // ]
      markers:[
        {}
      ]
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
      this.setState(dumbData);
    })
    .catch(error => console.error(error));
  }

  render(){
    return(
      <StyledMapWithAnInfoBox 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        center={{ lat: 25.03, lng: 121.6 }}
        markers={this.state.markers}  
      />
       //<CustomSkinMap
        // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfJEYOe-QHAbvKTaH_JSZ4cKtIxSiLMUc"
        // loadingElement={<div style={{ height: `100%` }} />}
        // containerElement={<div style={{ height: `100vh` }} />}
        // mapElement={<div style={{ height: `100%` }} />}
        // markers={this.state.markers}
      // >

      // </CustomSkinMap>

    );
  }
}


export default MapView;