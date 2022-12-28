import React from 'react';


// Component gets data from props and render it to the screen
function DataDisplay(props) {

  return (
    <>
      <div tabIndex={0} aria-label="Returned I P data"      className='data-display'>
        <span className='data-box ip-address'>
          <h1 tabIndex={0} className='data-title'>IP ADDRESS</h1>
          <p tabIndex={0} className='returned-data'>{props.data.ip}</p>
        </span>
        <span className='data-box location'>
          <h2 tabIndex={0} className='data-title'>LOCATION</h2>
          <p tabIndex={0} className='returned-data'>      {props.data.location.region}</p>
        </span>
        <span className='data-box timezone'>
          <h3 tabIndex={0} className='data-title'>TIMEZONE</h3>
          <p tabIndex={0} className='returned-data'>      {props.data.location.timezone}</p>
        </span>
        <span className='data-box isp'>
          <h4 tabIndex={0} className='data-title'>ISP</h4>
          <p tabIndex={0} aria-label={"I S P"} className='returned-data'>{props.data.isp}</p>
        </span>
      </div>
    </>
  )
}

export default DataDisplay