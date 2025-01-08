import './App.css'
import Header from './elements/header/header'
import HomePage from './pages/Home/Home'
import Footer from './elements/footer/footer'
import PortfolioPage from './pages/Portfolio/Portfolio'
import ServicesPage from './pages/Services/Services'
import ContactPage from './pages/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import InformtionPage from './pages/Information/Information'

const App: React.FC = () => {

  return (
    <>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/portfolio/:id' element={<InformtionPage/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
