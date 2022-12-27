import React from 'react';
import useFetch from '../hooks/useFetch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';



function Home() {

    // get api and key from .env files
    // const api = process.env.REACT_APP_API;
    // const apiKey = process.env.REACT_APP_API_KEY;

    // fetch users ip data
    const { data, loading, error } = useFetch('http://localhost:5000/user');

    // while awaiting data render loading 
    if (loading) return <h1 className='title'>LOADING...</h1>;

    // if theres an error log iit to the console
    if (error) console.log(error);

    return (
        <>
            {/* Conditionally render data/loading/error */}
            {data && <DataDisplay key={data.ipAddress} data={data} />}
            {data &&
                <Map key={data.ipAddress} data={data} />}
            {error &&<div>
                <h1 className='title'>Error... We were not able to search your IP Address. Please enter a valid IP Address in the search bar.</h1>
            </div>}
        </>
    )
}

export default Home