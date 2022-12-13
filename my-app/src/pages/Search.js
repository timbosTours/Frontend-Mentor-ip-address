import React from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    let ipAddress = props.searchIp.ipAddress
    const api = process.env.REACT_APP_API;
    const apiKey = process.env.REACT_APP_API_KEY

    const { searchData, searchLoading, searchError } = useFetchSearch(`${api}apiKey=${apiKey}&ipAddress=${ipAddress}`);

    if (searchLoading) return <h1>LOADING...</h1>;
    
    if (searchError) console.log(searchError);

    // if (searchData) console.log(searchData)

    console.log('You rendered Search component')


    return (
        <>
            {searchData && <DataDisplay key={searchData.ipAddress} data={searchData}/> }
            {searchData && <Map key={searchData.ipAddress} data={searchData} />}
        </>
    )
}

export default Search