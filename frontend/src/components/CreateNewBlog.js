import { useState } from "react";
import { Navigate } from "react-router-dom";


const CreateNewBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [isDone, setIsDone] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        let blog = {
            title,
            body,
            author
        };

        setIsPending(true);

        const response = await fetch(
            `${process.env.REACT_APP_DB_URL}/api/blogs`,
            {
                method: 'POST',
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
                {!isPending && <button onClick={handleSubmit}>Add</button>}
                {isPending && <button disabled onClick={handleSubmit}>Adding blog...</button>}
            </form>
            {isDone && (<Navigate to="/" replace={true} />)}
        </div>
    );
};

export default CreateNewBlog;