
import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import Navbar from "./Pages/Navbar";
import Footer from "./Components/Footer";
import { NavBar } from "./Pages/Navbar";
import SimpleSidebar from "./Components/SideBar";
import SingleProductPage from "./Components/SingleProductPage";
import Home from "./Pages/Home";
import Navbar2 from "./Components/DropDown";



function App() {
  return (
    <div>

      <Navbar/>
     <Navbar2/>
     <AllRoutes/>

    </div>
  );
}

export default App;
