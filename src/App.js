import './App.css';

//components
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <div className="">
      <MobileMenu />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
