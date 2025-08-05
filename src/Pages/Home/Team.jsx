import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpotlightCard from '../../Components/utils/SpotlightCard'
import TextType from '../../Components/utils/TextType'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Team() {
  const teamRef = useRef(null)
  const cardsRef = useRef([])

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Lead Physiotherapist",
      specialization: "Sports Rehabilitation",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in sports injuries and post-operative rehabilitation with a focus on personalized treatment plans."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Senior Physiotherapist",
      specialization: "Neurological Rehabilitation",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      description: "Expert in neurological conditions and stroke rehabilitation, helping patients regain mobility and independence."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Pediatric Physiotherapist",
      specialization: "Child Development",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to helping children with developmental delays and physical challenges reach their full potential."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      position: "Orthopedic Specialist",
      specialization: "Joint & Spine Care",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in orthopedic conditions, joint replacements, and spine rehabilitation with advanced techniques."
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      position: "Geriatric Physiotherapist",
      specialization: "Senior Care",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      description: "Focused on improving mobility and quality of life for elderly patients through gentle, effective therapies."
    },
    {
      id: 6,
      name: "Dr. David Park",
      position: "Cardiopulmonary Specialist",
      specialization: "Respiratory Care",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in respiratory conditions and cardiac rehabilitation, helping patients improve breathing and endurance."
    }
  ]

  useEffect(() => {
    const cards = cardsRef.current

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotationY: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom top",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animate team section title
    gsap.fromTo('.team-title',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.team-title',
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animate subtitle
    gsap.fromTo('.team-subtitle',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.team-subtitle',
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  return (
    <div ref={teamRef} className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900  min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="team-title text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent ml-4">
              Expert Team
            </span>
          </h2>
          <div className="team-subtitle ">
            <TextType
              text={[
                "Dedicated professionals committed to your recovery journey",
                "Experienced specialists in every aspect of physiotherapy",
                "Compassionate care with cutting-edge treatment approaches"
              ]}
              as="p"
              className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
              typingSpeed={50}
              pauseDuration={3000}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="text-blue-400"
            />
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={addToCardsRef}
              className="group"
            >
              <SpotlightCard
                className="h-full transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-blue-400/60 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">
                    {member.position}
                  </p>
                  <p className="text-teal-300 text-sm mb-4">
                    {member.specialization}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-gray-700">
                    <button className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team is here to provide personalized care and support you every step of the way. 
              Book your consultation today and take the first step towards better health.
            </p>
            <button 
            onClick={()=>{
              window.location.href = '/contact-us'
            }}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team