import axios from 'axios';
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const getData = async () => {
        try {
            const { data } = await axios.get(url);
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