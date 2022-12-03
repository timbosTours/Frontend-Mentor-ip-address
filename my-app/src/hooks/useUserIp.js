import { useEffect } from 'react'

function useUserIp() {
    useEffect(() => {
        fetch(
            'https://geo.ipify.org/api/v2/country,city?apiKey=at_8GE1HPonrAAGY0ggGjL3YAuoxACZ1&ipAddress=8.8.8.8',
            {   method: 'GET',
                headers: { 'Content-Type': "application/json" }
            })
            .then(res => {
            return res.json()
            })
            .then((data) => {
            console.log(data);
        })
    }, [])
  
}

export default useUserIp