import React, {useState} from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import {useFormik} from "formik"
import Home from '../pages/Home';
import Search from '../pages/Search';


function Navbar() {
  const [searchIp, setSearchIp] = useState('')

  // Formik form library
  const formik = useFormik({
    initialValues: {
      ipAddress: ""
    },
    onSubmit: (values) => {
      setSearchIp(values)
    }
  })

  return (
    <>
      <div className='banner' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
        <h1 tabIndex={0} className='title'>IP Address Tracker</h1>
        <form onSubmit={formik.handleSubmit}
          >
          <input
            type="text"
            name='ipAddress'
            onChange={formik.handleChange}
            value={formik.values.ipAddress}
            className='input-field'
            placeholder='Search for any IP address or domain' />
          <input
            type="image"
            alt='submit'
            src={arrow} className='input-btn' />
            
            
        </form>

        {/* Conditional rendering. Checks if searchIp has state from user input. if so renders search page with search ip data. if not it defaults to home page */}
        {searchIp ? <Search searchIp={searchIp} /> : <Home/>}

      </div>
    </>
  )
}

export default Navbar