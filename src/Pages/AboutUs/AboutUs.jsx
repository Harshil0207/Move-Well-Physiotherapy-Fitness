import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function AboutUs() {
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)
  const facilitiesRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current.querySelector('h1'), 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    gsap.fromTo(heroRef.current.querySelector('p'), 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    )

    // Mission section animation
    gsap.fromTo(missionRef.current.querySelector('.mission-content'), 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
    gsap.fromTo(missionRef.current.querySelector('.mission-image'), 
      { x: 100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Values section animation
    const valueCards = valuesRef.current.querySelectorAll('.value-card')
    valueCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Team section animation
    const teamMembers = teamRef.current.querySelectorAll('.team-member')
    teamMembers.forEach((member, index) => {
      gsap.fromTo(member, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Facilities section animation
    gsap.fromTo(facilitiesRef.current.querySelector('.facilities-content'), 
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: facilitiesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
    gsap.fromTo(facilitiesRef.current.querySelector('.facilities-image'), 
      { x: 100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: facilitiesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // CTA section animation
    gsap.fromTo(ctaRef.current.querySelector('h2'), 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )
    gsap.fromTo(ctaRef.current.querySelector('button'), 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Glow line */}
      <div className="glow-line absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transform scale-x-0 origin-left">
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-22 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/71/24/26/71242673e6dd9296483cfa6b4c494b2e.jpg" 
            alt="Physiotherapy background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Move Well</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in physiotherapy and fitness, dedicated to helping you move better, 
              feel stronger, and live a healthier life.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="mission-content">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Our <span className="text-transparent bg-clip-text bg-blue-400">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Move Well, we believe that movement is medicine. Our mission is to empower individuals 
                to achieve optimal physical function through evidence-based physiotherapy treatments, 
                personalized fitness programs, and compassionate care.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We are committed to helping our patients recover from injuries, manage chronic conditions, 
                and prevent future problems through comprehensive assessment, treatment, and education.
              </p>
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl border border-blue-100">
                <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Evidence-Based Treatment</span>
              </div>
            </div>
            <div className="mission-image">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-red-100 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-white mx-auto mb-8 flex items-center justify-center shadow-xl">
                    <div className="w-24 h-20 relative">
                      <div className="w-6 h-12 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
                      <div className="absolute top-3 right-0 w-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform rotate-45"></div>
                      <div className="absolute bottom-0 left-4 w-4 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Move Well Philosophy</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    &ldquo;Movement is not just about exercise—it&apos;s about living life to the fullest, 
                    free from pain and limitations.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Core <span className="text-transparent bg-clip-text bg-blue-400">Values</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do at Move Well
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="value-card bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-blue-600 text-3xl">💙</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Compassion</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We treat every patient with empathy, understanding, and respect, 
                recognizing that each person&apos;s journey is unique.
              </p>
            </div>
            <div className="value-card bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-red-600 text-3xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Excellence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We maintain the highest standards of care through continuous learning, 
                evidence-based practice, and state-of-the-art equipment.
              </p>
            </div>
            <div className="value-card bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-green-600 text-3xl">🤝</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Partnership</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We work collaboratively with our patients, involving them in their 
                treatment plans and empowering them to take control of their health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Meet Our <span className="text-transparent bg-clip-text bg-blue-400">Expert Team</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced physiotherapists and fitness specialists are dedicated to your recovery and wellness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="team-member text-center group">
              <div className="relative mb-8">
                <div className="w-56 h-56 bg-gradient-to-br from-blue-100 to-red-100 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img src="https://i.pinimg.com/736x/ad/6c/b0/ad6cb07e44a5e63ffc89d7723b181052.jpg" alt="Dr. Sarah Johnson" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dr. Sarah Johnson</h3>
              <p className="text-red-600 font-semibold mb-4 text-lg">Lead Physiotherapist</p>
              <p className="text-gray-600 leading-relaxed">
                15+ years of experience in sports rehabilitation and orthopedic physiotherapy
              </p>
            </div>
            <div className="team-member text-center group">
              <div className="relative mb-8">
                <div className="w-56 h-56 bg-gradient-to-br from-blue-100 to-red-100 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img src="https://i.pinimg.com/1200x/4a/b0/ce/4ab0ceaad47b4219304029437f4424f2.jpg" alt="Mike Chen" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mike Chen</h3>
              <p className="text-red-600 font-semibold mb-4 text-lg">Senior Physiotherapist</p>
              <p className="text-gray-600 leading-relaxed">
                Specializes in neurological rehabilitation and geriatric care
              </p>
            </div>
            <div className="team-member text-center group">
              <div className="relative mb-8">
                <div className="w-56 h-56 bg-gradient-to-br from-blue-100 to-red-100 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img src="https://i.pinimg.com/736x/73/55/2b/73552b7ed30adc2ed9e467351803dad2.jpg" alt="Emma Rodriguez" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Emma Rodriguez</h3>
              <p className="text-red-600 font-semibold mb-4 text-lg">Fitness Specialist</p>
              <p className="text-gray-600 leading-relaxed">
                Certified personal trainer with expertise in injury prevention and strength training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="facilities-content">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">State-of-the-Art <span className="text-transparent bg-clip-text bg-blue-400">Facilities</span></h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our modern facility is equipped with the latest technology and equipment to provide 
                the best possible care for our patients.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <span className="text-xl text-gray-700 font-medium">Advanced diagnostic equipment</span>
                </div>
                <div className="flex items-center space-x-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <span className="text-xl text-gray-700 font-medium">Private treatment rooms</span>
                </div>
                <div className="flex items-center space-x-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <span className="text-xl text-gray-700 font-medium">Modern gym and rehabilitation area</span>
                </div>
                <div className="flex items-center space-x-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <span className="text-xl text-gray-700 font-medium">Comfortable waiting areas</span>
                </div>
              </div>
            </div>
            <div className="facilities-image">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-red-100 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full bg-white mx-auto mb-8 flex items-center justify-center shadow-xl">
                    <div className="w-24 h-20 relative">
                      <div className="w-6 h-12 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
                      <div className="absolute top-3 right-0 w-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform rotate-45"></div>
                      <div className="absolute bottom-0 left-4 w-4 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Modern Equipment</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Cutting-edge technology for accurate diagnosis and effective treatment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Better Health?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of patients who have transformed their lives with Move Well&apos;s 
            comprehensive physiotherapy and fitness programs.
          </p>
          <button 
           onClick={() => navigate('/contact-us')}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-6 px-12 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105">
            Book Your Appointment Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutUs