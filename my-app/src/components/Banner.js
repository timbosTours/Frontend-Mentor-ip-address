import React from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';

function Banner() {
  return (<div className='banner' style={{ backgroundImage:`url(${img})` , backgroundRepeat: 'no-repeat'}}>
      <h1 className='title'>IP Address Tracker</h1>
    <form className='input-form'>
      <input type="text" className='input-field' placeholder='Search for any IP address or domain'/>
      <input type="image" alt='submit button' src={arrow} className='input-btn'/>
    </form>
  </div>
  )
}

export default Banner