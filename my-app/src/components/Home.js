import React from 'react';
import useFetch from '../hooks/useFetch';
import useFetchSearch from '../hooks/useFetchSearch';
import Map from './Map';
import DataDisplay from './DataDisplay';



function Home() {

    // get api and key from .env files
    // const api = process.env.REACT_APP_API;
    // const apiKey = process.env.REACT_APP_API_KEY;

    // fetch users ip data
    const { data, loading, error } = useFetch('http://localhost:5000/user');
    
    const { searchData, searchLoading, searchError } = useFetchSearch('http://localhost:5000/search');

// 
    // while awaiting data render loading 
    if (searchLoading) return <h1 className='title'>LOADING...</h1>;
    if (loading) return <h1 className='title'>LOADING...</h1>;

    // if theres an error log iit to the console
    if (searchError) console.log(searchError);
    if (error) console.log(error);

    return (
        <>
            {/* Conditionally render data/loading/error */}
            {searchData && <DataDisplay key={searchData.ipAddress} data={searchData} />}
            {data && <DataDisplay key={data.ipAddress} data={data} />}
            {searchData &&
                <Map key={searchData.ipAddress} data={searchData} />}
            {data &&
                <Map key={data.ipAddress} data={data} />}
            {error &&<div>
                <h1 className='title'>Error... We were not able to search your IP Address. Please enter a valid IP Address in the search bar.</h1>
            </div>}
        </>
    )
}

export default Home