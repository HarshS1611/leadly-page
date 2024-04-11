
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Products from './components/Products';

const App = () => {


  return (
    <div className="">
      <Navbar />
      <div className="bg-image">

        <Hero />
      </div>
      <Brands />
      <Products/>
     
    </div>
  );
};

export default App;
