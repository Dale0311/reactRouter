import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Layout from "./components/layout";
import Admin from "./pages/admin"

import Vans from "./pages/vans";
import VansDetail from "./pages/vans/vanDetail";
// host
import HostNav from  "./pages/host/hostNav"
import Dashboard from "./pages/host/dashboard";
import Income from "./pages/host/income";
import Reviews from "./pages/host/reviews";
import HostVans from "./pages/host/vans";
import HostVanDetail from "./pages/host/vanDetailLayout";
import Detail from "./pages/host/vanDetailCom/detail";
import Pricing from "./pages/host/vanDetailCom/pricing";
import Image from "./pages/host/vanDetailCom/image";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* first nested route */}
          <Route element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="admin" element={<Admin />} />
            {/* 2nd nested route */}
            <Route path="host" element={<HostNav/>}>
              <Route index element={<Dashboard/>} />
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews/>} />

              <Route path="vans" element={<HostVans/>} />
              {/* third nested route */}
              <Route path="vans/:id" element={<HostVanDetail/>} >
                <Route index element={<Detail />} />
                <Route path="pricing" element={<Pricing/>} />
                <Route path="image" element={<Image />} />
              </Route>
            </Route>

            <Route path="vans" element={<Vans/>} />
            <Route path="vans/:id" element={<VansDetail />} />

          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
