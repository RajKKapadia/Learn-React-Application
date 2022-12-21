import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Raj Kapadia blog</h1>
            <div className="Link">
                <Link to="/">Home</Link>
                <Link to="/new">Create new blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;