import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        const fetchBlogs = async () => {
            try {
                const response = await fetch(url, { signal: abortCont.signal });
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                    setIsPending(false);
                } else {
                    setIsPending(false);
                    setIsError(true);
                }
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted...');
                } else {
                    setIsPending(false);
                    setIsError(true);
                }
            }
        };
        fetchBlogs();
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, isError };
};

export default useFetch;
