import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

import useFetch from '../hook/useFetch';

const BlogDetails = () => {
    const { id } = useParams();

    const { data: { blog }, isPending, isError } = useFetch(`${process.env.REACT_APP_DB_URL}/api/blogs/${id}`);
    const [isDone, setIsDone] = useState(false);

    const handleDelete = async () => {
        let response = await fetch(
            `${process.env.REACT_APP_DB_URL}/api/blogs/${blog._id}`,
            {
                method: 'DELETE'
            }
        );

        if (response.ok) {
            setIsDone(true);
        }
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {isError && <div>Fetching data error...</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                </article>
            )
            }
            <button onClick={handleDelete}>Delete</button>
            {isDone && (<Navigate to="/" replace={true} />)}
        </div>
    );
};

export default BlogDetails;
