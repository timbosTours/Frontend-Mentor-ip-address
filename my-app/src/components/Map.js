import React from 'react'

// TODO bring in props to make center/Marker position dynamic

// React leaflet imports
import {MapContainer, TileLayer, Marker} from 'react-leaflet'

function Map(props) {
  // get lattitude and longitude from props
  let lat = props.data.location.lat
  let lng = props.data.location.lng

  return (
    <>
    <MapContainer className='map' center={[lat, lng]} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lng]}>
  </Marker>
      </MapContainer>
    </>
  )
}

export default Map