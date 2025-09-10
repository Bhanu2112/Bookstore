import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TestFile from './components/TestFile';
import Home from './pages/Home';
import CategoryCard from './pages/CategoryCard';
import CatSlider from './pages/CatSlider';
import CategoryBooks from './pages/CategoryBooks';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App dark:bg-gray-900 dark:text-white pb-4">
      <Header /> 
      <AllRoutes/>
      <Footer />



    </div>
  );
}

export default App;
