import React from 'react'

// TODO bring in props to make center/Marker position dynamic

// React leaflet imports
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function Map() {
  
  return (
    <>
    <MapContainer className='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
      </MapContainer>
    </>
  )
}

export default Map