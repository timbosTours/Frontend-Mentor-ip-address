import React, {useState} from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import DataDisplay from './DataDisplay';

function Banner() {
  const [ipAddress, setIpAddress] = useState('');

  return (
    <>
    <div className='banner' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
    <h1 className='title'>IP Address Tracker</h1>
    <form className='input-form'>
      <input
        type="text"
        value={ipAddress}
        className='input-field'
        placeholder='Search for any IP address or domain' />
      <input
        type="image"
        alt='submit button'
        src={arrow} className='input-btn'
        onClick={(e) => { setIpAddress(e.target.value) }} />
    </form>
    <DataDisplay key={ipAddress}/>
  </div>
  </>
  )
}

export default Banner