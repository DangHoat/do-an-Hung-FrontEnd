import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

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
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 21.0035058
    , lng: 105.84235869999999 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 21.0035058, lng: 105.84235869999999 }} />
    )}
  </GoogleMap>
));

export default MyMap
