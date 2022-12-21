import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setData(json.blogs);
                setIsPending(false);
            } else {
                setIsPending(false);
                setIsError(true);
            }
        };
        fetchBlogs();
    }, [url]);

    return { data, isPending, isError };
};

export default useFetch;