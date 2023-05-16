import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import NavBar from "./pages/pageUtil/navbar";
import Footer from "./pages/pageUtil/footer";
import Vans from "./pages/vans";
import VansDetail from "./pages/vansUtil/vansDetail";
import Admin from "./pages/admin"
function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans/>} />
          <Route path="/vans/:id" element={<VansDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
