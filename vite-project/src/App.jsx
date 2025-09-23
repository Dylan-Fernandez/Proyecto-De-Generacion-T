
import './App.css'
import Navbar from './componetes/Navbar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Contacts from './pages/Contacts'
import Downloads from './pages/Downloads'
import History from './pages/History'
import Photos from './pages/Photos'
import Footer from './componetes/Footer'
function App() {


  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Downloads" element={<Downloads />} />
        <Route path="/History" element={<History />} />
        <Route path="/Photos" element={<Photos />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
