import React, {useState} from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import {useFormik} from "formik"
import Home from '../pages/Home';
import Search from '../pages/Search';

// TODO add onSubmit handler function(hook) to  form element too search ip address
// .env api key

function Navbar() {
  const [searchIp, setSearchIp] = useState('')

  // Formik form lib
  const formik = useFormik({
    initialValues: {
      ipAddress: ""
    },
    onSubmit: (values) => {
      setSearchIp(values)
      // console.log(values)
    }
  })

  // console.log(formik.values)

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
            alt='submit button'
            src={arrow} className='input-btn' />
            
            
        </form>

        {searchIp ? <Search searchIp={searchIp} /> : <Home/>}

      </div>
    </>
  )
}

export default Navbar