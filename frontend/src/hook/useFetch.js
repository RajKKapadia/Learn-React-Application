import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        const fetchBlogs = async (signal) => {
            try {
                const response = await fetch(url, { signal: signal });
                if (response.ok) {
                    const json = await response.json();
                    setData(json.blogs);
                    setIsPending(false);
                } else {
                    setIsPending(false);
                    setIsError(true);
                }
            } catch (error) {
                console.log('Fetch wa aborted.');
            }

        };
        fetchBlogs(abortCont.signal);
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, isError };
};

export default useFetch;