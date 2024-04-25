import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'

import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
