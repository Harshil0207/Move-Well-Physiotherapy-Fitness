import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'
import medicineAnimation from '../../assets/Doctor, Medical, Surgeon, Healthcare Animation.json'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function Video() {
  const containerRef = useRef(null)
  const backgroundRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const background = backgroundRef.current
    const leftContent = leftContentRef.current
    const rightContent = rightContentRef.current

    // Create floating particles
    const createParticles = () => {
      const particles = []
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div')
        particle.className = 'floating-particle'
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 8 + 4}px;
          height: ${Math.random() * 8 + 4}px;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899);
          border-radius: 50%;
          opacity: ${Math.random() * 0.6 + 0.2};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          pointer-events: none;
        `
        background.appendChild(particle)
        particles.push(particle)
      }
      particlesRef.current = particles
      return particles
    }

    const particles = createParticles()

    // Advanced GSAP Timeline for entrance
    const tl = gsap.timeline()

    // Set initial states
    gsap.set(container, { opacity: 0, scale: 0.95 })
    gsap.set(leftContent, { opacity: 0, x: -100, y: 50 })
    gsap.set(rightContent, { opacity: 0, x: 100, scale: 0.8 })
    gsap.set(particles, { scale: 0, rotation: 0 })

    // Entrance animation sequence
    tl.to(container, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    })
    .to(leftContent, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    }, "-=1")
    .to(rightContent, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.4,
      ease: "elastic.out(1, 0.8)"
    }, "-=0.8")
    .to(particles, {
      scale: 1,
      rotation: 360,
      duration: 2,
      ease: "power2.out",
      stagger: 0.1
    }, "-=1.5")

    // Continuous particle animation
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: `+=${Math.random() * 200 + 100}`,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: Math.random() * 10 + 8,
        ease: "none",
        repeat: -1,
      yoyo: true,
        delay: index * 0.2
      })
      
      gsap.to(particle, {
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 3 + 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      })
    })

    // Scroll-triggered parallax effects
    ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
          scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.to(particles, {
          y: progress * -100,
          rotation: progress * 180,
          duration: 0.3,
          ease: "none"
        })
        gsap.to(leftContent, {
          y: progress * -30,
          duration: 0.3,
          ease: "none"
        })
        gsap.to(rightContent, {
          y: progress * 20,
          duration: 0.3,
          ease: "none"
        })
      }
    })

    // Hover effects for interactive elements
    const button = container.querySelector('button')
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: "0 10px 20px rgba(59, 130, 246, 0.1)",
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      tl.kill()
      particles.forEach(particle => particle.remove())
    }
  }, [])
  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center py-8 sm:py-20 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-pink-500/30 to-purple-900/70"
        style={{ zIndex: 1 }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div ref={leftContentRef} className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-12 font-bold text-gray-900 leading-tight font-docade">
                <span className=" bg-gradient-to-r from-blue-600 to-cyan-600  bg-clip-text text-transparent">
                  MOVE
                </span>{' '}
                <span className=" bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  WELL
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Your journey to better health starts here. Experience personalized healthcare 
                with our innovative digital wellness platform.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700">24/7 Online Consultations</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700">Personalized Health Plans</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-base sm:text-lg text-gray-700">Expert Medical Guidance</p>
              </div>
            </div>
            
            <div className="pt-4 sm:pt-6">
              <button 
              onClick={() => navigate('/about')}
              className=" bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
          
          {/* Right Side - Larger Lottie Animation */}
          <div ref={rightContentRef} className="flex justify-center lg:justify-end mt-[-24px] lg:mt-0">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <Lottie 
                animationData={medicineAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  minHeight: '300px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .floating-particle {
          filter: blur(0.5px);
          mix-blend-mode: multiply;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .floating-particle {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Video