import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='component'>
        <Home></Home>
      </div>
    </div>
  );
};

export default App;
