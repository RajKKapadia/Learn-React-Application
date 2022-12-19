import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {
            title: 'Test 1',
            body: 'Test body for the blog.',
            author: 'Test',
            id: 1
        },
        {
            title: 'Test 2',
            body: 'Test body for the blog.',
            author: 'Test',
            id: 2
        },
        {
            title: 'Test 3',
            body: 'Test body for the blog.',
            author: 'Test',
            id: 3
        }
    ]);

    const handleDelete = (id) => {
        let newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'Raj'} handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
