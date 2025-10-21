import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Home, OurRoles, SoftwareDevelopment } from './screens'
import HowWeHire from './screens/HowWeHire/HowWeHire'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roles/executive-assistant" element={<OurRoles />} />
          <Route path="/roles/software-development" element={<SoftwareDevelopment />} />
          <Route path="/HowWeHire" element={<HowWeHire />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;