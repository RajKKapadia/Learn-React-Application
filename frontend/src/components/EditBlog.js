import { useState } from "react";
import { Navigate } from "react-router-dom";


const EditBlog = ({ blog }) => {

    const [title, setTitle] = useState(blog.title);
    const [body, setBody] = useState(blog.body);
    const [author, setAuthor] = useState(blog.author);
    const [isPending, setIsPending] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const id = blog._id;

    const handleSubmit = async (e) => {

        e.preventDefault();

        let blog = {
            title,
            body,
            author
        };

        setIsPending(true);

        const response = await fetch(
            `${process.env.REACT_APP_DB_URL}/api/blogs/${id}`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            });

        if (response.ok) {
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('');
            setIsDone(true)
        }
    }

    return (
        <div className="create">
            <h2>Add a new blog:</h2>
            <form>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea type='text' required value={body} onChange={(e) => setBody(e.target.value)} />
                <label>Blog author:</label>
                <input type='text' required value={author} onChange={(e) => setAuthor(e.target.value)} />
                {!isPending && <button onClick={handleSubmit}>Update</button>}
                {isPending && <button disabled >Updating blog...</button>}
            </form>
            {isDone && (<Navigate to="/" replace={true} />)}
        </div>
    );
};

export default EditBlog;
