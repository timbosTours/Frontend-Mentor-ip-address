import React from 'react'

// React leaflet imports
import {MapContainer, TileLayer, Marker} from 'react-leaflet'

function Map(props) {
  // get lattitude and longitude from props
  let lat = props.data.location.lat
  let lng = props.data.location.lng
  let city = props.data.location.city
  let region = props.data.location.region

  return (
    <>
    <MapContainer className='map' center={[lat, lng]} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        <Marker tabindex={0} position={[lat, lng]} title={`${city}, ${region}`}>
  </Marker>
      </MapContainer>
    </>
  )
}

export default Map