import { useEffect, useState } from 'react';
import axios from "axios";


// TODO - add refetch(searchip) function

function useFetchSearch(url) {
    const [searchData, setSearchData] = useState(null);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState(null);


    useEffect(() => {
        setSearchLoading(true);
        axios
            .get(url)
            .then(res => { setSearchData(res.data) })
            .catch((err) => { setSearchError(err) })
            .finally(() => { setSearchLoading(false) })
    }, [url]);


    return { searchData, searchLoading, searchError };
}

export default useFetchSearch