import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CountryForm from "./components/crudCountry/CountryCreationForm.jsx";
import CountryManagementForm from './components/crudCountry/CountryManagementForm.jsx';
import Countries from './components/apis/Countries.jsx';
import SideBar from "./components/sideBar/SideBar.jsx";
import SerchBar from "./components/serchBar/SerchBar.jsx";
import SerchBarPrueba from "./components/serchBar/Prueba.jsx";

export default function App() {
  return (
    <Router>
      {/* <SerchBar/> */}
      {/* <SerchBarPrueba/> */}
      {/* <div className="app--container"> */}
      <div className="container-app">
        <SideBar />
        {/* <div className="app--container--two"> */}
        <div className="routes">
          <Routes>
            <Route path="/Home" element={<Countries />} />
            <Route path="/crear" element={<CountryForm />} />
            <Route path="/gestionar" element={<CountryManagementForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
