import React from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    let ipAddress = props.searchIp.ipAddress
    const { searchData, searchLoading, searchError } = useFetchSearch(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`);

    if (searchLoading) return <h1>LOADING...</h1>;
    
    if (searchError) console.log(searchError);

    if (searchData) console.log(searchData)

    console.log('You rendered Search component')
    console.log(props.searchIp.ipAddress)

    return (
        <>
            {searchData && <DataDisplay key={searchData} data={searchData} />}
            <Map />
        </>
    )
}

export default Search