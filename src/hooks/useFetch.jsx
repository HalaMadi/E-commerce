import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url,options={}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const getData = async () => {
        try {
            const { data } = await axios({
                url,
                method: options.method || 'GET',
                headers: options.headers || {},
            });
            setData(data);
            setError(null)
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return { data, isLoading, error }
}

export default useFetch