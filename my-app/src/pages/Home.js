import React from 'react';
import useFetch from '../hooks/useFetch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';

function Home() {
    const { data, loading, error } = useFetch('https://geo.ipify.org/api/v2/country?apiKey=at_8GE1HPonrAAGY0ggGjL3YAuoxACZ1');
    
    if (loading) return <h1>LOADING...</h1>;
    if (error) console.log(error);
    if (data) console.log(data)

    return (
        <>
            {data && <DataDisplay key={data} data={data} />}
            <Map />
        </>
    )
}

export default Home