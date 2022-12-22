import { useParams } from "react-router-dom";

import useFetch from '../hook/useFetch';

const BlogDetails = () => {
    const { id } = useParams();

    const { data: { blog }, isPending, isError } = useFetch(`${process.env.REACT_APP_DB_URL}/api/blogs/${id}`);

    return (
        <div>
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
        </div>
    );
};

export default BlogDetails;
