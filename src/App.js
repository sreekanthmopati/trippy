import { DiAndroid } from "react-icons/di";

import './App.css';
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
