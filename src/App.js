import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import RoadMap from "./component/RoadMap/RoadMap";
import Followus from "./component/FollowUs/Followus";
import ChooseUs from "./component/ChooseUs/ChooseUs";
import Footer from "./component/Footer/Footer";
import AboutUs from "./component/AboutUs/AboutUs";
import ContactUs from "./component/ContactUs/ContactUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-500">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header /> <ChooseUs /> <RoadMap />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Followus />
      <Footer />
    </div>
  );
}

export default App;
