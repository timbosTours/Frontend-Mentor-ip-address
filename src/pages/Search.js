import React from 'react';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Search(props) {
    const searchData = props.returnedData.data
    return (
        <>
            {/* conditionally render search data/
                use backticks with date.now() to avoid name collisions so map component renders on every search
            */}
            {searchData &&
                <DataDisplay key={`data-display-${searchData.ipAddress}-${Date.now()}`} data={searchData}/>}
            {searchData && <Map key={`map-${searchData.ipAddress}-${Date.now()}`} data={searchData} /> }
        </>
    )
}

export default Search