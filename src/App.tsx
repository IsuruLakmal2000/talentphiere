import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components'
import { Home, OurRoles, SoftwareDevelopment } from './screens'
import HowWeHire from './screens/HowWeHire/HowWeHire'
import Pricing from './screens/Pricing/Pricing'
import HireForm from './screens/HireForm/HireForm'
import './App.css'

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHireFormPage = location.pathname === '/hire';

  return (
    <div className="app">
      {!isHireFormPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles/executive-assistant" element={<OurRoles />} />
        <Route path="/roles/software-development" element={<SoftwareDevelopment />} />
        <Route path="/how-we-hire" element={<HowWeHire />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/hire" element={<HireForm />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;