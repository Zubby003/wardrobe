

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import pages
import Home from './pages/Home'
import ProductDetails from "./pages/ProductDetails"
// import components
import Header from'./components/Header'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Product from './components/Product'
import CartItem from "./components/CartItem"

function App() {
 

  return (
    <>
      <h1 className="overflow-hidden">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
          </Routes>
          <Sidebar/>
          <Footer/>
        </Router>
      </h1>
    </>
  )
}

export default App
