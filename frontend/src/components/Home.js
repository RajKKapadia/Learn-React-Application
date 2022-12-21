import useFetch from '../hook/useFetch';
import BlogList from './BlogList';

const Home = () => {

    const {data: blogs, isPending, isError} = useFetch(`${process.env.REACT_APP_DB_URL}/api/blogs`);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'Raj'} />
            {isPending && <div>Loading...</div>}
            {isError && <div>Facing Error...</div>}
        </div>
    );
};

export default Home;
