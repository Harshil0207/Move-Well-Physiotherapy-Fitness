import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const hideTimeoutRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const navbarRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state for background
      setIsScrolled(currentScrollY > 20)
      
      // Clear existing timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      
      // Auto-hide navbar logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar after small delay
        hideTimeoutRef.current = setTimeout(() => {
          setIsNavbarVisible(false)
        }, 150)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar immediately
        setIsNavbarVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [lastScrollY])

  // Animate navbar on mount
  useEffect(() => {
    gsap.fromTo(navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
  }, [])

  // Animate mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      })
    }
  }, [isMobileMenuOpen])

  const handleNavigation = (path) => {
    if (path === '/') {
      // If already on home page, scroll to top
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // If on different page, navigate to home
        navigate('/')
      }
    } else {
      navigate(path)
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/treatment', label: 'Treatment' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact-us', label: 'Contact Us' }
  ]

  return (
          <nav 
        ref={navbarRef}
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md shadow-xl ${
          isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          !isScrolled 
            ? 'bg-white/10 backdrop-blur-md shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
            onClick={() => handleNavigation('/')}
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-5 h-6 sm:w-6 sm:h-8 lg:w-7 lg:h-9 relative">
                  {/* Human figure */}
                  <div className="w-1.5 h-3 sm:w-2 sm:h-4 lg:w-2.5 lg:h-5 bg-white rounded-full mx-auto"></div>
                  {/* Arms */}
                  <div className="absolute top-1 left-0 w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white transform -rotate-45"></div>
                  <div className="absolute top-1 right-0 w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white transform rotate-45"></div>
                  {/* Legs */}
                  <div className="absolute bottom-0 left-1 w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white transform rotate-12"></div>
                  <div className="absolute bottom-0 right-1 w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white transform -rotate-12"></div>
                </div>
              </div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 animate-ping opacity-20"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Move Well
              </h1>
              <p className="text-xs lg:text-sm text-gray-100 font-semibold">
                Physiotherapy & Fitness
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Move Well
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/60 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`relative font-semibold transition-all text-lg lg:text-xl duration-300 group ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-gray-100 hover:text-blue-600'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 group-hover:w-full"></div>
                {/* Active state underline */}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Book Appointment Button - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavigation('/contact-us')}
              className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="relative z-10">Book Appointment</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-blue-300 hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className="lg:hidden overflow-hidden bg-white/95   rounded-b-2xl shadow-xl border-t border-gray-200"
          style={{ height: 0 }}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`w-full text-left px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Book Appointment Button - Mobile */}
            <div className="px-6 pt-4 pb-2">
              <button
                onClick={() => handleNavigation('/contact-us')}
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar