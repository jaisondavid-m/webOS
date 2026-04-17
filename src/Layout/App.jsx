import React from 'react'
import { BrowserRouter , Routes , Route , Link } from "react-router-dom"
import WebOSDesktop from '../Pages/WebOSDesktop'
import CustomCursor from '../Components/CustomCursor'

function App() {
  return (
    <BrowserRouter basename="/webOS">
    <CustomCursor/>
      <Routes>
        <Route path='/' element={ <WebOSDesktop/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
