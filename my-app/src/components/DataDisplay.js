import React from 'react';

function DataDisplay(props) {
  const data = props.data;

  console.log(data)
  return (
    <>
        <div className='data-display'>
          <h1 className='data-title'>IP ADDRESS</h1>
          <p>{ props.data.ip }</p>
        <h2 className='data-title'>LOCATION</h2>
        <p>{ props.data.location.region}</p>
        <h3 className='data-title'>TIMEZONE</h3> 
        <p>{ props.data.location.timezone }</p>
        <h4 className='data-title'>ISP</h4>
        <p>{ props.data.isp }</p>
        </div>
    </>
  )
}

export default DataDisplay