import Navbar from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Coin from "./Pages/Coin";
import Footer from "./Components/Navbar/Footer/Footer"
import HeatMap from "./Components/Navbar/HeatMap/Heatmap";
import Blog from "./Components/Navbar/Blog/Blog";



function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:coinId" element={<Coin />} component={Coin}></Route>
        <Route path="/heatmap" element={<HeatMap />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App;