const { login } = require("../src/views/APICall/config")

const location =()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            return {
                lat:position.coords.latitude,
                lng:position.coords.longitude
            }
        });
      } else { 
          return {
            lat: 21.003461,
            lng: 105.8424931
          }
        console.log("Geolocation is not supported by this browser.");
      }
    
}
const checkGeolocation = () =>{
    return navigator.geolocation
}

module.exports ={
    location:location
}