import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

function Testimonials() {
  const navigate = useNavigate()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const heroRef = useRef(null)
  const testimonialsRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Back Pain Patient",
      rating: 5,
      image: "https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg",
      comment: "The physiotherapy treatment at Move Well completely transformed my life. After suffering from chronic back pain for years, I can now move freely without any discomfort. The staff is incredibly professional and caring.",
      treatment: "Back Pain Treatment",
      duration: "8 weeks",
      improvement: "95%"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Sports Injury Recovery",
      rating: 5,
      image: "https://i.pinimg.com/736x/d2/d2/f8/d2d2f8210f500b3e859d8f282e3d0e9b.jpg",
      comment: "As an athlete, I was devastated when I injured my shoulder. The rehabilitation program at Move Well not only helped me recover but also improved my performance. I'm back to competing at my best level!",
      treatment: "Shoulder Rehabilitation",
      duration: "12 weeks",
      improvement: "100%"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Knee Surgery Recovery",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      comment: "Post-surgery rehabilitation was challenging, but the team at Move Well made it so much easier. Their expertise and encouragement helped me regain full mobility. I can now walk, run, and even dance again!",
      treatment: "Knee Rehabilitation",
      duration: "16 weeks",
      improvement: "90%"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Neck Pain Sufferer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      comment: "Chronic neck pain was affecting my work and daily life. The targeted treatment plan at Move Well addressed the root cause, not just the symptoms. I'm pain-free and more productive than ever.",
      treatment: "Neck Pain Treatment",
      duration: "6 weeks",
      improvement: "85%"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Hip Arthritis Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      comment: "Living with hip arthritis was incredibly painful. The comprehensive care at Move Well taught me how to manage my condition and stay active. I can now enjoy my favorite activities again.",
      treatment: "Hip Arthritis Management",
      duration: "10 weeks",
      improvement: "80%"
    },
    {
      id: 6,
      name: "Robert Davis",
      role: "Ankle Injury Recovery",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      comment: "A severe ankle sprain kept me from playing sports for months. The rehabilitation program at Move Well was comprehensive and effective. I'm back on the field and stronger than before!",
      treatment: "Ankle Rehabilitation",
      duration: "8 weeks",
      improvement: "95%"
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Patients", icon: "👥" },
    { number: "98%", label: "Success Rate", icon: "📈" },
    { number: "15+", label: "Years Experience", icon: "🏆" },
    { number: "4.9", label: "Average Rating", icon: "⭐" }
  ]

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

    // Stats animation
    const statItems = statsRef.current?.querySelectorAll('.stat-item')
    if (statItems) {
      gsap.fromTo(statItems, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          delay: 0.5,
          ease: "power3.out"
        }
      )
    }

    // Testimonials animation
    const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card')
    if (testimonialCards) {
      gsap.fromTo(testimonialCards, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.8,
          ease: "power3.out"
        }
      )
    }

    // CTA animation
    gsap.fromTo(ctaRef.current?.querySelector('h2'), 
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

    // Auto-play testimonials
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-22 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/71/24/26/71242673e6dd9296483cfa6b4c494b2e.jpg" 
            alt="Physiotherapy testimonials background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Real stories from our patients about their recovery journey and the life-changing results they achieved
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/treatment')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                View Our Treatments
              </button>
              <button 
                onClick={() => navigate('/contact-us')}
                className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/20"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Featured <span className="text-transparent bg-clip-text bg-blue-400">Success Story</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how our comprehensive treatment approach transforms lives
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[activeTestimonial].comment}"
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonials[activeTestimonial].treatment}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-center">
                    <div className="text-3xl font-bold text-green-600">{testimonials[activeTestimonial].improvement}</div>
                    <div className="text-sm text-gray-600">Improvement</div>
                    <div className="text-sm text-gray-500">{testimonials[activeTestimonial].duration}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section ref={testimonialsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Patient <span className="text-transparent bg-clip-text bg-blue-400">Success Stories</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Read more inspiring stories from our patients who have achieved remarkable recoveries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-sm text-blue-600 font-medium">{testimonial.treatment}</span>
                      <div className="text-xs text-gray-500">{testimonial.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{testimonial.improvement}</div>
                      <div className="text-xs text-gray-500">Improvement</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Recovery Journey?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our satisfied patients and experience the life-changing results of our professional physiotherapy care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact-us')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-6 px-12 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Book Your Consultation
            </button>
            <button 
              onClick={() => navigate('/treatment')}
              className="bg-white text-blue-600 font-bold py-6 px-12 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              View Our Treatments
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials