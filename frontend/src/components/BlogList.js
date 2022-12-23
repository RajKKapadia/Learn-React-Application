import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  if (blogs.length === 0) {
    return (
      <div className="blog-list">
        <h1>Create your first blog...</h1>
        <Link to={'/new'}>
          <h2>Create blog</h2>
        </Link>
      </div>
    );
  }
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog._id} >
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
