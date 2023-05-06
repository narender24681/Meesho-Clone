import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import Navbar from "./Pages/Navbar";
import Footer from './Components/Footer';
import { NavBar } from './Components/NavBar';
import SimpleSidebar from './Components/SideBar';
import SingleProductPage from './Components/SingleProductPage';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <NavBar />
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
