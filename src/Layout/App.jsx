import React from 'react'
import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import WebOSDesktop from '../Pages/WebOSDesktop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <WebOSDesktop/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
