import React from 'react';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    const searchData = props.returnedData.data
    return (
        <>
            {/* conditionally render search data/loading/error */}
            {searchData && <DataDisplay key={searchData.ipAddress} data={searchData}/> }
            {searchData && <Map key={searchData.ipAddress} data={searchData} />}
        </>
    )
}

export default Search