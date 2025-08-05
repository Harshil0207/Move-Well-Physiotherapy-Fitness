import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Treatment() {
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const treatmentsRef = useRef(null)
  const ctaRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const contentRef = useRef([])

  const treatmentData = [
    {
      id: 1,
      title: "Neck Pain Treatment",
      description: "Comprehensive treatment for cervical spine issues, whiplash, and chronic neck pain through manual therapy and targeted exercises.",
      image: "https://i.pinimg.com/736x/77/4b/5f/774b5f5470c17a9cfcaa61342025a8c3.jpg",
      symptoms: ["Stiffness", "Limited Range of Motion", "Headaches", "Tingling Sensations"],
      techniques: ["Manual Therapy", "Neck Exercises", "Posture Correction", "Ergonomic Assessment"],
      duration: "6-8 weeks"
    },
    { 
      id: 2,
      title: "Shoulder Pain Treatment",
      description: "Specialized rehabilitation for rotator cuff injuries, frozen shoulder, and shoulder impingement syndrome.",
      image: "https://i.pinimg.com/736x/8c/a4/c5/8ca4c5827dba4ee883b42935447b0bb7.jpg",
      symptoms: ["Pain with Movement", "Weakness", "Clicking Sounds", "Night Pain"],
      techniques: ["Strengthening Exercises", "Range of Motion", "Manual Therapy", "Ultrasound"],
      duration: "8-12 weeks"
    },
    {
      id: 3,
      title: "Back Pain Treatment",
      description: "Evidence-based treatment for lower back pain, sciatica, and spinal conditions through targeted therapy.",
      image: "https://i.pinimg.com/736x/91/59/95/915995d9d82b117976216fc92d8b5c13.jpg",
      symptoms: ["Sharp Pain", "Radiating Pain", "Muscle Spasms", "Difficulty Standing"],
      techniques: ["Core Strengthening", "Spinal Mobilization", "Pain Management", "Lifestyle Modification"],
      duration: "10-16 weeks"
    },
    {
      id: 4,
      title: "Hip Pain Treatment",
      description: "Comprehensive care for hip arthritis, bursitis, and hip joint dysfunction with personalized rehabilitation.",
      image: "https://i.pinimg.com/1200x/d0/42/85/d042856d443d4b0a82c8f7149ab41b01.jpg",
      symptoms: ["Groin Pain", "Stiffness", "Clicking", "Difficulty Walking"],
      techniques: ["Hip Mobilization", "Strengthening", "Gait Training", "Pain Relief"],
      duration: "8-14 weeks"
    },
    {
      id: 15,
      title: "Wrist Pain Treatment",
      description: "Comprehensive treatment for carpal tunnel syndrome, wrist sprains, tendonitis, and repetitive strain injuries.",
      image: "https://i.pinimg.com/1200x/52/ef/00/52ef00a28ce0b0ccef76c8f15555c892.jpg",
      symptoms: ["Numbness", "Tingling", "Weakness", "Pain with Movement"],
      techniques: ["Wrist Mobilization", "Strengthening Exercises", "Ergonomic Assessment", "Splinting"],
      duration: "6-10 weeks"
    },
    {
      id: 5,
      title: "Knee Pain Treatment",
      description: "Advanced treatment for knee injuries, arthritis, and post-surgical rehabilitation with modern techniques.",
      image: "https://i.pinimg.com/736x/cd/0d/df/cd0ddf4cff6edc287414134ce051c928.jpg",
      symptoms: ["Swelling", "Instability", "Locking", "Stiffness"],
      techniques: ["Knee Strengthening", "Balance Training", "Manual Therapy", "Taping"],
      duration: "6-12 weeks"
    },
    {
      id: 6,
      title: "Ankle & Foot Treatment",
      description: "Specialized care for ankle sprains, plantar fasciitis, and foot conditions with targeted rehabilitation.",
      image: "https://i.pinimg.com/1200x/07/5f/b0/075fb06dc10f6c14b6d5792711b9afc2.jpg",
      symptoms: ["Swelling", "Instability", "Heel Pain", "Difficulty Walking"],
      techniques: ["Balance Training", "Strengthening", "Manual Therapy", "Orthotics"],
      duration: "4-8 weeks"
    },
    {
      id: 7,
      title: "Muscle Pain Treatment",
      description: "Targeted therapy for muscle strains, myofascial pain syndrome, and chronic muscle tension with advanced techniques.",
      image: "https://i.pinimg.com/736x/e5/e5/56/e5e556c941790d4bc230eb4d84aab74e.jpg",
      symptoms: ["Muscle Tension", "Tenderness", "Reduced Flexibility", "Fatigue"],
      techniques: ["Deep Tissue Massage", "Stretching", "Heat Therapy", "Muscle Relaxation"],
      duration: "4-6 weeks"
    },
    {
      id: 8,
      title: "Post-Fracture Exercises",
      description: "Specialized rehabilitation programs for post-fracture recovery, bone healing, and functional restoration.",
      image: "https://i.pinimg.com/736x/d6/46/22/d646227ecdffe6630c1632258288161c.jpg",
      symptoms: ["Limited Mobility", "Weakness", "Stiffness", "Pain with Movement"],
      techniques: ["Gradual Loading", "Range of Motion", "Strengthening", "Functional Training"],
      duration: "8-16 weeks"
    },
    {
      id: 9,
      title: "Speech Therapy",
      description: "Comprehensive speech and language therapy for communication disorders, swallowing difficulties, and voice problems.",
      image: "https://i.pinimg.com/736x/6a/0c/35/6a0c355aec542d1113ac1d671e28d50f.jpg",
      symptoms: ["Speech Difficulties", "Swallowing Problems", "Voice Issues", "Communication Barriers"],
      techniques: ["Articulation Therapy", "Swallowing Exercises", "Voice Training", "Language Development"],
      duration: "12-24 weeks"
    },
    {
      id: 10,
      title: "Dry Needling Therapy",
      description: "Advanced myofascial trigger point therapy using fine needles to release muscle tension and reduce pain.",
      image: "https://i.pinimg.com/736x/9b/85/37/9b853795b15af7db719db71549d34305.jpg",
      symptoms: ["Trigger Points", "Muscle Knots", "Chronic Pain", "Limited Range"],
      techniques: ["Trigger Point Release", "Muscle Stimulation", "Pain Relief", "Functional Restoration"],
      duration: "4-8 weeks"
    },
    {
      id: 11,
      title: "K-Taping Therapy",
      description: "Therapeutic taping technique to support muscles, reduce pain, and improve circulation and lymphatic drainage.",
      image: "https://i.pinimg.com/736x/f9/a6/c0/f9a6c0ed24723b4965a109b66f20190e.jpg",
      symptoms: ["Muscle Weakness", "Swelling", "Pain", "Instability"],
      techniques: ["Muscle Taping", "Ligament Support", "Lymphatic Drainage", "Pain Relief"],
      duration: "2-6 weeks"
    },
    {
      id: 12,
      title: "Cupping Therapy",
      description: "Traditional therapy using suction cups to improve blood flow, reduce muscle tension, and promote healing.",
      image: "https://i.pinimg.com/1200x/ce/e2/ea/cee2eae7f1291b454872a2941f058f75.jpg",
      symptoms: ["Muscle Tension", "Poor Circulation", "Chronic Pain", "Toxins Buildup"],
      techniques: ["Suction Therapy", "Blood Flow Enhancement", "Muscle Relaxation", "Detoxification"],
      duration: "3-6 weeks"
    },
    {
      id: 13,
      title: "Modern Machine Therapy",
      description: "State-of-the-art equipment including ultrasound, TENS, and electrotherapy for advanced pain management.",
      image: "https://i.pinimg.com/1200x/e5/52/c0/e552c0ba32fe9bb64278f232ac45b00b.jpg",
      symptoms: ["Chronic Pain", "Inflammation", "Muscle Weakness", "Poor Circulation"],
      techniques: ["Ultrasound Therapy", "TENS", "Electrotherapy", "Heat Therapy"],
      duration: "6-10 weeks"
    },
    {
      id: 14,
      title: "Birth Defect Rehabilitation",
      description: "Specialized therapy for children with congenital conditions, developmental delays, and birth-related challenges.",
      image: "https://i.pinimg.com/736x/8f/a1/89/8fa189f9af89a0641ffad5dfbf196749.jpg",
      symptoms: ["Developmental Delays", "Motor Issues", "Coordination Problems", "Muscle Weakness"],
      techniques: ["Early Intervention", "Motor Development", "Sensory Integration", "Family Education"],
      duration: "Ongoing"
    },
  ]

  useEffect(() => {
    // Enhanced title animation
    gsap.fromTo(titleRef.current, 
      { 
        y: -100, 
        opacity: 0,
        scale: 0.8,
        filter: "blur(20px)"
      },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2, 
        ease: "back.out(1.7)",
        delay: 0.3
      }
    );

    // Enhanced ScrollTrigger animations
    treatmentData.forEach((_, index) => {
      const card = cardsRef.current[index];
      const content = contentRef.current[index];
      
      if (card && content) {
        // Card animation with modern effects
        gsap.fromTo(card,
          { 
            y: 150, 
            opacity: 0,
            rotationY: index % 2 === 0 ? -15 : 15,
            scale: 0.7,
            filter: "blur(10px)"
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Content animation with stagger
        gsap.fromTo(content,
          { 
            x: index % 2 === 0 ? 100 : -100, 
            opacity: 0,
            y: 30,
            filter: "blur(15px)"
          },
          {
            x: 0,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Smooth scroll behavior
    gsap.to("html, body", {
      scrollBehavior: "smooth",
      duration: 0.1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

     

      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-22 relative overflow-hidden">
        {/* Background Image with enhanced overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/71/24/26/71242673e6dd9296483cfa6b4c494b2e.jpg" 
            alt="Physiotherapy treatment background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Joint Pain <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">Treatment</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive physiotherapy treatments for all body joint pain with evidence-based techniques 
              and personalized care plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/contact-us')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-5 px-10 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => navigate('/treatment/review')}
                className="group bg-white/10 backdrop-blur-sm text-white font-bold py-5 px-10 rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/20 relative overflow-hidden"
              >
                <span className="relative z-10">View Patient Reviews</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section ref={treatmentsRef} className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Treatment</span> Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized treatments for all major joint pain conditions with modern techniques and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentData.map((treatment, index) => (
              <div key={treatment.id} ref={el => cardsRef.current[index] = el} className="treatment-card group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 overflow-hidden relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                   
                    <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {treatment.duration}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div ref={el => contentRef.current[index] = el} className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{treatment.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{treatment.description}</p>

                    {/* Symptoms */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3"></span>
                        Common Symptoms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.symptoms.map((symptom, index) => (
                          <span key={index} className="bg-gradient-to-r from-red-50 to-pink-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium border border-red-200/50 backdrop-blur-sm">
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Treatment Techniques */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></span>
                        Treatment Techniques
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.techniques.map((technique, index) => (
                          <span key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200/50 backdrop-blur-sm">
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => navigate('/contact-us')}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <span className="relative z-10">Book Consultation</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Treatment */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Treatment</span>?</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Our evidence-based approach combines modern physiotherapy techniques with personalized care 
                to ensure optimal recovery and long-term results.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Evidence-Based Treatment</h3>
                    <p className="text-gray-300">All treatments are based on the latest research and clinical evidence.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Personalized Care Plans</h3>
                    <p className="text-gray-300">Each treatment plan is tailored to your specific condition and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Modern Equipment</h3>
                    <p className="text-gray-300">State-of-the-art equipment and facilities for optimal treatment outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Expert Physiotherapists</h3>
                    <p className="text-gray-300">Experienced and certified physiotherapists with specialized training.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl p-12 shadow-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 mx-auto mb-10 flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-sm">
                  <div className="w-32 h-28 relative">
                    <div className="w-8 h-16 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mx-auto shadow-lg"></div>
                    <div className="absolute top-4 right-0 w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 shadow-lg"></div>
                    <div className="absolute bottom-0 left-6 w-6 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full shadow-lg"></div>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-white mb-8">Comprehensive Care</h3>
                <p className="text-gray-200 text-xl leading-relaxed">
                  From initial assessment to full recovery, we provide complete care for all your joint pain needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">Recovery Journey?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed">
            Book your consultation today and take the first step towards pain-free movement and better quality of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate('/contact-us')}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-6 px-12 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Book Your Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => navigate('/treatment/review')}
              className="group bg-white/10 backdrop-blur-sm text-white font-bold py-6 px-12 rounded-2xl hover:bg-white/20 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/20 relative overflow-hidden"
            >
              <span className="relative z-10">View Reviews</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Treatment