import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateNewBlog from './components/CreateNewBlog';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar></Navbar>
        <div className='component'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new' element={<CreateNewBlog />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
