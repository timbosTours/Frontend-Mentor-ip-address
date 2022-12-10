import React, {useState} from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';

// TODO add onSubmit handler function(hook) to  form element too search ip address
// .env api key

function Navbar() {
  const [ipAddress, setIpAddress] = useState('');

  return (
    <>
      <div className='banner' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
        <h1 className='title'>IP Address Tracker</h1>
        <form
          type="submit"
          className='input-form'>
          <input
            type="text"
            onChange={(e)=>{setIpAddress(e.target.value)}} 
            value={ipAddress}
            className='input-field'
            placeholder='Search for any IP address or domain' />
          <input
            type="image"
            alt='submit button'
            src={arrow} className='input-btn' />
        </form>
        
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Search" element={<Search key={ ipAddress } ipAddress={ipAddress}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Navbar