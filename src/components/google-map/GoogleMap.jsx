import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const styles = {
    position: 'relative',
    height: '90%',
    width: '100%',
    marginTop: '5%'
}
const GoogleMap = (props) =>{
    return (
        <Map 
            style={ styles }
            initialCenter={{lat: 7.066102, lng: 125.603413}}
             google={props.google} zoom={15}
        >
            <Marker 
                position={{lat: 7.066102, lng: 125.603413}}
                title={"Vincent's location"}
                name={"Vincent's location"}
            />
      </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCn7J6zugK04Xr168EV7ekICBFAuzDw36Q")
})(GoogleMap)
