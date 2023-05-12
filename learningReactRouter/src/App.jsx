import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import NavBar from "./pages/pageUtil/navbar";
import Footer from "./pages/pageUtil/footer";
import { useState, useEffect } from 'react';

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
