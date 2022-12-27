import React from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    
    // get search IP Address from props
    // let ipAddress = props.searchIp.ipAddress

    // get api and key from .env files
    // const api = process.env.REACT_APP_API;
    // const apiKey = process.env.REACT_APP_API_KEY

    // fetch search IP Address data
    const { searchData, searchLoading, searchError } = useFetchSearch('http://localhost:5000/search');

    // while awaiting data render loading
    if (searchLoading) return <h1 className='title'>LOADING...</h1>;
    
    // if theres an error in the search log t to the console
    if (searchError) console.log(searchError);


    return (
        <>
            {/* conditionally render search data/loading/error */}
            {searchData && <DataDisplay key={searchData.ipAddress} data={searchData}/> }
            {searchData && <Map key={searchData.ipAddress} data={searchData} />}
            {searchError && 
            <div>
            <h1 className='title'>Error... Please enter valid email address or domain</h1>
            </div>}
        </>
    )
}

export default Search