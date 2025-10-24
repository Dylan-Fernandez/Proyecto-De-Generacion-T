
import './App.css'
import Navbar from './componetes/Navbar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Product from './pages/Product'
import Downloads from './pages/Downloads'
import History from './pages/History'
import Photos from './pages/Photos'
import Footer from './componetes/Footer'
import Sesion from './cliente/sesion'
import Carrito from './carrito/carrito'
function App() {


  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/History" element={<History />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path='/Sesion'element={<Sesion/>}/>
         <Route path='/Carrito'element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
