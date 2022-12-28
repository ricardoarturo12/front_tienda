import { useState, useEffect} from 'react';

function Util() {
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([]);

    const getData = async () => {
      try {
        const response = await fetch('api/v1/products', {
          'mode': 'no-cors',
          'method': 'GET',
          'cache': 'no-cache',
          'credentials': 'include',
          "sec-fetch-mode": "navigate",
          'headers': {
              "Access-Control-Allow-Headers" : "Content-Type",
              'Access-Control-Allow-Origin': '*'
              }
      })
        if (response.ok) {
          const json = await response.json()
          setData(json)
        } else {
          alert("Error al traer datos del servidor")
        }

      } catch (error) {
        console.error(error)
      }
    }

    useEffect(() => {
      getData();
    }, [])

    return {
        setFilter,
        filter,
        data
    }
}

export { Util }