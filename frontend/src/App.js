import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateNewBlog from './components/CreateNewBlog';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <div className='component'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new' element={<CreateNewBlog />}></Route>
            <Route path='/blogs/:id' element={<BlogDetails />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
