import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Video() {
  const titleRef = useRef(null)
  const moveRef = useRef(null)
  const wellRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const move = moveRef.current
    const well = wellRef.current
    
    // Initial state - hidden and scaled down
    gsap.set(title, {
      opacity: 0,
      scale: 0.5,
      y: 50
    })
    
    // Animate in with a smooth entrance
    gsap.to(title, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5
    })
    
    // Add a subtle floating animation
    gsap.to(title, {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    })

    // Scroll-triggered animations for MOVE and WELL
    if (move && well) {
      // Initial state - both words together
      gsap.set([move, well], {
        x: 0,
        opacity: 1
      })

      // Scroll down animation - MOVE goes left, WELL goes right
      gsap.to(move, {
        x: -200,
        opacity: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })

      gsap.to(well, {
        x: 200,
        opacity: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full h-full">
        <div className="relative w-full h-screen">
          <video 
            className="w-full h-full object-cover"
            poster=""
            preload="metadata"
            loop
            muted
            autoPlay
            
          >
            <source 
              src="https://movewellgroup.com/wp-content/uploads/2024/06/Movewell-Promotion-Video-1.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black/30 bg-opacity-10"></div>
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 
              ref={titleRef}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white text-center font-docade"
            >
              <span ref={moveRef} className="inline-block">MOVE</span>{' '}
              <span ref={wellRef} className="inline-block">WELL</span>
            </h1>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Video