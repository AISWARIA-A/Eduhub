import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home/Home";
import LayoutRoutes from "./LayoutRoutes/LayoutRoutes";


function App() {
  return (
    <>
    <LayoutRoutes />
    </>
  );
}

export default App;
