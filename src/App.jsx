import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import WhyUs from './Pages/Home/WhyUs'
import Treatment from './Pages/Home/Treatment'
import Specialities from './Pages/Home/Specialities'
import Team from './Pages/Home/Team'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import Testimonials from './Pages/Testimonials/Testimonials'
import ContactUs from './Pages/ContactUs/ContactUs'
import TreatmentPage from './Pages/Treatment/Treatment'
import Video from './Pages/Home/Video'
import Review from './Pages/Treatment/Review'
import Us from './Pages/Home/Us'

function App() {
  const [velocity] = useState(100);

  return (
    <Router>
      <div className='flex flex-col min-h-screen w-full'>
        {/* <Header /> */}
        <Navbar />
        <main className='flex-1 '>
          <Routes>
            <Route path="/" element={
              <>
                <Video />
                <Us />
                <WhyUs />
                <Treatment />
                <Specialities />
                <Team />
              </>
            } />
            <Route path="/about" element={
              <>
                <AboutUs />
              </>
            } />
            <Route path="/treatment" element={<TreatmentPage />} />
            <Route path="/treatment/review" element={<Review />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

