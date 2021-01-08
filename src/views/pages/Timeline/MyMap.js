import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,Circle
} from "react-google-maps";
const GPS =[
  {lat: 9.96233, lng: 49.80404},
      {lat: 6.11499, lng: 50.76891},
      {lat: 6.80592, lng: 51.53548},
      {lat: 9.50523, lng: 51.31991},
      {lat: 9.66089, lng: 48.70158}
]
const showMarkers = () => {
  return GPS.map((store, index) => {
    return <Marker key={index} id={index} position={{
     lat: store.lat,
     lng: store.lng
   }}
   onClick={() => console.log("Clicked")} />
  })
}

const MyMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVaEvlieiF16HmdMXDwRtFQ2LLEeWf2zI&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 9.96233
    , lng: 49.80404 }}>
      {
        showMarkers()
      }
    {/* {props.isMarkerShown && (
      <Marker position={{ lat: 21.0035058, lng: 105.84235869999999 }} />
    )} */}
  </GoogleMap>
));

export default MyMap
