import React, {useState} from 'react';
import img from '../images/pattern-bg.png';
import arrow from '../images/icon-arrow.svg';
import DataDisplay from './DataDisplay';
import Map from './Map';
import useFetch from '../hooks/useFetch';
import useFetchSearch from '../hooks/useFetchSearch';

// TODO add onSubmit handler function(hook) to  form element too search ip address
// .env api key

function Banner() {
  const [ipAddress, setIpAddress] = useState('');

  const { data, loading, error } = useFetch('https://geo.ipify.org/api/v2/country?apiKey=at_8GE1HPonrAAGY0ggGjL3YAuoxACZ1');

  const {searchData, searchLoading, searchError} = useFetchSearch(`https://geo.ipify.org/api/v2/country?apiKey=at_8GE1HPonrAAGY0ggGjL3YAuoxACZ1&ipAddress=${ipAddress}`)

  if (loading) return <h1>LOADING...</h1>;
  if (searchLoading) return <h1>LOADING...</h1>;

  if (error) console.log(error);
  if (searchError) console.log(error);

  if (data) console.log(data)
  if (searchData) console.log(searchData)
  
  return (
    <>
      <div className='banner' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
        <h1 className='title'>IP Address Tracker</h1>
        <form
          onSubmit={useFetchSearch}
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
        {data && <DataDisplay key={data} data={data} />}
        {searchData && <DataDisplay key={searchData} data={searchData} />}
          <Map />
      </div>
    </>
  )
}

export default Banner