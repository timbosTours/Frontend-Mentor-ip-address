import React from 'react';
import useFetch from '../hooks/useFetch';
import Map from '../components/Map';
import DataDisplay from '../components/DataDisplay';



function Home() {
    const api = process.env.REACT_APP_API;
    const apiKey = process.env.REACT_APP_API_KEY;

    const { data, loading, error } = useFetch(`${api}apiKey=${apiKey}`);

    // console.log(process.env.REACT_APP_API_KEY)
    
    if (loading) return <h1>LOADING...</h1>;
    if (error) console.log(error);
    // if (data) console.log(data)

    console.log('You rendered Home component')

    return (
        <>
            {data && <DataDisplay key={data} data={data} />}
            {data && <Map key={data} data={data} />}
        </>
    )
}

export default Home