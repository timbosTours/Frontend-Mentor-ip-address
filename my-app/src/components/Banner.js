import React from 'react';
import img from '../images/pattern-bg.png'

function Banner() {
  return (<div className='banner' style={{ backgroundImage:`url(${img})` , backgroundRepeat: 'no-repeat'}}>
      <h1>IP ADDRESS TRACKER</h1>
      <input type="text" />
  </div>
  )
}

export default Banner