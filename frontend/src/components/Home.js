import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const handleDelete = async (id) => {
        const response = await fetch(`${process.env.REACT_APP_DB_URL}/api/blogs/${id}`, {
            method: 'DELETE',
            body: JSON.stringify(blogs)
        });

        const json = await response.json();

        if (!response.ok) {
            console.error(json.message);
        }
        if (response.ok) {
            setBlogs(blogs.filter((blog) => blog._id !== json.blog._id));
        }
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(`${process.env.REACT_APP_DB_URL}/api/blogs`);
            const json = await response.json();
            if (response.ok) {
                setBlogs(json.blogs);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'Raj'} handleDelete={handleDelete} />
        </div>
    );
};

export default Home;
