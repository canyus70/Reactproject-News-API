
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Fetch from './pages/Fetch'
import Details from './components/Details'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/fetch" element={<Fetch/>}/>
      <Route path="/details" element={<Details/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
