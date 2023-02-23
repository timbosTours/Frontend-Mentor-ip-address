import React from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import {useFormik} from "formik"
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';


function Navbar({ setReturnedData }) {
  const navigate = useNavigate();

  // Formik form library
  const formik = useFormik({
    initialValues: {
      inputValue: '',
    },
    onSubmit:
      async (values) => {
        
        try {
        const resp = await axios.post('https://colorful-teal-dungarees.cyclic.app/search', qs.stringify({ values })).then();
        setReturnedData(resp)
        navigate('/search')
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
            name='inputValue'
            id='inputValue'
            onChange={formik.handleChange}
            value={formik.values.inputValue}
            className='input-field'
            placeholder='Search for any IP address or domain' />
          <input
            type="image"
            alt='submit'
            onChange={formik.handleChange}
            src={arrow} className='input-btn' />
            
        </form>
      </div>
    </>
  )
}

export default Navbar