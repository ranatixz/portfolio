import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const GetMap = ()=>{
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(GetMap))

const MapComp = () =>{

    return (
       <div className="col-xl-9 mx-auto my-5">
           <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
       </div>
    )
}

export default MapComp
