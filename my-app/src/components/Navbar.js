import React from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import {useFormik} from "formik"
import axios from 'axios';
import qs from 'qs';
import Home from './Home'

function Navbar() {

  // Formik form library
  const formik = useFormik({
    initialValues: {
      ipAddress: ""
    },
    onSubmit:
      async (values) => {
      // setSearchIp(values)

      try {
        const resp = await axios.post('http://localhost:5000/search', qs.stringify({ values }));
        console.log(resp)
      } catch (error) {
        console.log(error.response)
      }
    }
  })


  return (
    <>
      <div className='banner' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
        <a className='title-link' href="/"><h1 tabIndex={0} className='title'>IP Address Tracker</h1></a>
        <form onSubmit={formik.handleSubmit}
          >
          <input
            type="text"
            name='ipAddress'
            id='ipAddress'
            onChange={formik.handleChange}
            value={formik.values.ipAddress}
            className='input-field'
            placeholder='Search for any IP address or domain' />
          <input
            type="image"
            alt='submit'
            onChange={formik.handleChange}
            src={arrow} className='input-btn' />
            
        </form>

        {/* Conditional rendering. Checks if searchIp has state from user input. if so renders search page with search ip data. if not it defaults to home page
        {values ? <Search searchIp={searchIp} /> : <Home/>} */}
        <Home/>
      </div>
    </>
  )
}

export default Navbar