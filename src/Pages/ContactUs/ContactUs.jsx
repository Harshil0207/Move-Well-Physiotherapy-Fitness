import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Refs for GSAP animations
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)
  const faqRef = useRef(null)
  const mapRef = useRef(null)
  const contactItemsRef = useRef(null)

  // GSAP Animations
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      }
    )

    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
      }
    )

    // Contact info animations
    gsap.fromTo(contactInfoRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Form animations
    gsap.fromTo(formRef.current,
      { opacity: 0, x: 50, scale: 0.95 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // FAQ animations
    gsap.fromTo(faqRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Map animations
    gsap.fromTo(mapRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Contact items stagger animation
    const contactItems = contactItemsRef.current?.querySelectorAll('.contact-item')
    if (contactItems) {
      gsap.fromTo(contactItems,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactItemsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

    // Hover animations for contact items
    contactItems?.forEach(item => {
      const icon = item.querySelector('.contact-icon')
      const text = item.querySelector('.contact-text')

      item.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(text, {
          x: 10,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(text, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Form input focus animations
    const formInputs = formRef.current?.querySelectorAll('input, select, textarea')
    formInputs?.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out"
        })
      })

      input.addEventListener('blur', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out"
        })
      })
    })

    // Button hover animations
    const submitButton = formRef.current?.querySelector('button[type="submit"]')
    if (submitButton) {
      submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    return () => {
      // Cleanup ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });

      // Animate success message
      gsap.fromTo('.success-message',
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );

      // Reset success message after 5 seconds
      setTimeout(() => {
        gsap.to('.success-message', {
          opacity: 0,
          scale: 0.8,
          y: -20,
          duration: 0.3,
          onComplete: () => setSubmitSuccess(false)
        });
      }, 5000);
    }, 2000);
  };

  const services = [
    'Physiotherapy',
    'Sports Therapy',
    'Rehabilitation',
    'Wellness Care',
    'Pain Management',
    'Post-Surgery Recovery'
  ];

  return (
    <div className="min-[300vh] bg-gray-50 relative">
      <div className="glow-line absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transform scale-x-0 origin-left">
      </div>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-22 relative">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div> */}
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
            Contact Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Move Well</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Ready to start your journey to better health? Book an appointment or get in touch with our team.
            </p>
          </div>
        </div>
      </section>
     

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're here to help you on your wellness journey. Contact us for any questions or to schedule your appointment.
              </p>
            </div>

            {/* Contact Details */}
            <div ref={contactItemsRef} className="space-y-6">
              <div className="contact-item flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                <div className="contact-icon w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">123 Wellness Street, Health District<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                <div className="contact-icon w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600 ">+91 9876543210</p>
                  <p className="text-gray-600 ">+91 9876543211</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                <div className="contact-icon w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="text-2xl font-semibold text-gray-800  mb-1">Email</h3>
                  <p className="text-gray-600">info@movewell.com</p>
                  <p className="text-gray-600">appointments@movewell.com</p>
                </div>
              </div>

              <div className="contact-item flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                <div className="contact-icon w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
           
          </div>

          {/* Book Appointment Form */}
          <div ref={formRef} className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Appointment</h2>
              <p className="text-gray-600">Schedule your consultation with our expert physiotherapists</p>
            </div>

            {submitSuccess && (
              <div className="success-message mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your appointment request has been submitted successfully. We'll contact you soon to confirm.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black  focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black  focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black  focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 text-black  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your condition or any specific concerns..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    
      {/* Map Section with Gujarati Text */}
      <div className="w-full mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              અમને ગૂગલ મેપ પર શોધો
            </span>
          </h2>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14874.622987715764!2d72.88914872488407!3d21.245495506301964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdc934902cf%3A0xc4fa3c089b990c3!2sMove%20Well%20Physiotherapy%20%26%20Fitness%20Center!5e0!3m2!1sen!2sin!4v1716465940611!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Move Well Physiotherapy & Fitness Center Location"
            className="w-full h-[70vh]"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What should I bring to my first appointment?</h3>
                <p className="text-gray-600">Please bring your ID, insurance information, any relevant medical reports, and a list of current medications.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a typical session last?</h3>
                <p className="text-gray-600">Initial consultations typically last 60-90 minutes, while follow-up sessions are usually 45-60 minutes.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you accept insurance?</h3>
                <p className="text-gray-600">Yes, we accept most major insurance plans. Please contact us to verify your coverage before your appointment.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I cancel or reschedule my appointment?</h3>
                <p className="text-gray-600">Yes, you can cancel or reschedule up to 24 hours before your appointment. Please call us to make changes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs