import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

 const index = () => {
    return (
        <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDVaEvlieiF16HmdMXDwRtFQ2LLEeWf2zI"  
      >
        <GoogleMap
	       zoom={8}
           center={{ lat: -34.397, lng: 150.644 }}
          
        >
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        </GoogleMap>
      </LoadScript>
    )
}

export default index