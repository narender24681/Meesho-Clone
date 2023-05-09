
import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import Navbar from "./Pages/Navbar";
import Footer from "./Components/Footer";
import Navbar2 from "./Components/DropDown";


function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
