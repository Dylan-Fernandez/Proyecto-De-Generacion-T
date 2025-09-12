import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Information from './pages/Information.jsx'
import './index.css'
import App from './App.jsx'
import Header from './componetes/Header.jsx'
import Footer from './componetes/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <App />
    <Information />
    <Footer/>
  </StrictMode>
)
