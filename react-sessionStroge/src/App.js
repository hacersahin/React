import React from "react";
import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
// import "./App.css";
import Anasayfa from "./components/Anasayfa";
import Kayit from "./components/Kayit";
import Giris from "./components/Giris";
import Portal from "./components/Portal";
import Basvuru_form from "./components/Basvuru_form";
import Basvuru_kontrol from "./components/Basvurularim"




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/giris" element={<Giris />} />
        <Route path="/kayit" element={<Kayit />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/Basvuru_form" element={<Basvuru_form/>} />
        <Route path="/portal/Basvurularim" element={<Basvuru_kontrol/>} />
      </Routes>
    </Router>
       
      </header>
    </div>
  );
}

export default App;
