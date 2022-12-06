import React from 'react';

// TODO - conditional rendering??

function DataDisplay(props) {
  const data = props.data;
  const loading = props.loading;
  const error = props.error;

  return (
    <>
        <div className='data-display'>
        <h1 className='data-title'>IP ADDRESS</h1>
        <p className='returned-data'>{data.ip}</p>
        <h2 className='data-title'>LOCATION</h2>
        <p className='returned-data'>{ data.location.region}</p>
        <h3 className='data-title'>TIMEZONE</h3> 
        <p className='returned-data'>{ data.location.timezone }</p>
        <h4 className='data-title'>ISP</h4>
        <p className='returned-data'>{ data.isp }</p> 
        </div>
    </>
  )
}

export default DataDisplay