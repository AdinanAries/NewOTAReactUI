import './App.css';

//components
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TripsPage from "./components/TripsPage";
import LoginPage from './components/LoginPage';


function App() {
  return (
    <div className="">
      <MobileMenu />
      <Header />
      <HomePage />
      <TripsPage />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
