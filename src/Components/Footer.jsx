import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

// Add CSS for glowing line animation
const glowLineStyle = `
  @keyframes glowLine {
    0% {
      opacity: 0;
      transform: scaleX(0);
      box-shadow: 0 0 0px rgba(59, 130, 246, 0);
    }
    50% {
      opacity: 1;
      transform: scaleX(1);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    }
  }
`;

// Inject the CSS
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = glowLineStyle;
  document.head.appendChild(styleSheet);
}

function Footer() {
  const footerRef = useRef(null)
  const logoRef = useRef(null)
  const contactRef = useRef(null)
  const pagesRef = useRef(null)
  const hoursRef = useRef(null)

  useEffect(() => {
    const footer = footerRef.current
    const logo = logoRef.current
    const contact = contactRef.current
    const pages = pagesRef.current
    const hours = hoursRef.current
    const glowLine = footer?.querySelector('.glow-line')

    // Initial animation for footer entrance
    gsap.fromTo(footer,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Glowing line animation
    if (glowLine) {
      gsap.fromTo(glowLine,
        {
          scaleX: 0,
          opacity: 0,
          boxShadow: "0 0 0px rgba(59, 130, 246, 0)"
        },
        {
          scaleX: 1,
          opacity: 1,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Staggered animation for sections
    gsap.fromTo([logo, contact, pages, hours],
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Hover animations for links
    const links = footer.querySelectorAll('a, li')
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.05,
          color: "#3B82F6",
          duration: 0.3,
          ease: "power2.out"
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          color: "#9CA3AF",
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Logo hover animation
    const logoElement = logo.querySelector('img')
    if (logoElement) {
      logoElement.addEventListener('mouseenter', () => {
        gsap.to(logoElement, {
          scale: 1.1,
          rotation: 5,
          duration: 0.4,
          ease: "back.out(1.7)"
        })
      })

      logoElement.addEventListener('mouseleave', () => {
        gsap.to(logoElement, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        })
      })
    }

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white relative">
      {/* Glowing Line Animation */}
      <div className="glow-line absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transform scale-x-0 origin-left">
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Logo Section */}
          <div ref={logoRef} className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://movewell.in/images/footer-logo.png" 
                alt="MoveWell Logo" 
                className="h-66 w-50 ml-15 mb-4 transition-all duration-300"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner in physiotherapy and rehabilitation. 
                We are committed to helping you move better, feel better, and live better.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div ref={contactRef} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-xl">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>202, આસ્થા મેડીકેર, અબ્રામા રોડ, તાપી આર્કડની સામે, મોટા વરાછા, સુરત.</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@movewell.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Emergency: +91 98765 43211</span>
              </li>
            </ul>
          </div>

          {/* Our Pages */}
          <div ref={pagesRef} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Our Pages</h3>
            <ul className="space-y-5 text-gray-300 text-xl">
              <li><a href="/" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</a></li>
              <li><a href="/treatment" className="hover:text-blue-400 transition-colors duration-300">Treatments</a></li>
              <li><a href="/testimonials" className="hover:text-blue-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="/contact-us" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div ref={hoursRef} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Clinic Hours</h3>
            <ul className="space-y-3 text-gray-300 text-xl">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-blue-400">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-blue-400">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-blue-400">10:00 AM - 4:00 PM</span>
              </li>
            </ul>
            <div className="mt-18 p-4 bg-blue-900/30 rounded-lg border border-blue-500/20">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">Emergency Care</h4>
              <p className="text-xs text-gray-300">Available 24/7 for urgent physiotherapy needs</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MoveWell. All rights reserved. | Designed with ❤️ for better health
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          title="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
    </footer>
  )
}

export default Footer