import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components'
import { Home, OurRoles, SoftwareDevelopment, InfrastructureOperations, DigitalMarketingGrowth, BrandStrategy } from './screens'
import SuccessStory from './screens/SuccessStory/SuccessStory'
import HowToGuide from './screens/HowToGuide/HowToGuide'
import HowWeHire from './screens/HowWeHire/HowWeHire'
import Pricing from './screens/Pricing/Pricing'
import HireForm from './screens/HireForm/HireForm'
import TrueClassicStory from './screens/SuccessStory/Story1'
import NikSharmaPlaybook from './screens/HowToGuide/NickStory'
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
        <Route path="/roles/infrastructure-operations" element={<InfrastructureOperations />} />
        <Route path="/roles/digital-marketing-growth" element={<DigitalMarketingGrowth />} />
        <Route path="/roles/brand-strategy" element={<BrandStrategy />} />
        <Route path="/how-we-hire" element={<HowWeHire />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/hire" element={<HireForm />} />
        <Route path="/success-story" element={<SuccessStory />} />
        <Route path="/how-to-guide" element={<HowToGuide />} />
        <Route path="/success-story/Story1" element={<TrueClassicStory />} />
        <Route path="/guides/NickStory" element={<NikSharmaPlaybook/>} />
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