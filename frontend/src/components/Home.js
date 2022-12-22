import React from 'react';

import useFetch from '../hook/useFetch';
import BlogList from './BlogList';

const Home = () => {

    const { data: { blogs }, isPending, isError } = useFetch(`${process.env.REACT_APP_DB_URL}/api/blogs`);

    return (
        <div className="home">
            {isError && <div>Fetching data error...</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
};

export default Home;
