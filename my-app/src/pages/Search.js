import React from 'react';
import useFetchSearch from '../hooks/useFetchSearch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    let ipAddress = props.ipAddress
    const { searchData, searchLoading, searchError } = useFetchSearch(`https://geo.ipify.org/api/v2/country?apiKey=at_8GE1HPonrAAGY0ggGjL3YAuoxACZ1&ipAddress=${props?.ipAddress}`);

    if (searchLoading) return <h1>LOADING...</h1>;
    
    if (searchError) console.log(searchError);

    if (searchData) console.log(searchData)

    return (
        <>
            {searchData && <DataDisplay key={searchData} data={searchData} />}
            <Map />
        </>
    )
}

export default Search