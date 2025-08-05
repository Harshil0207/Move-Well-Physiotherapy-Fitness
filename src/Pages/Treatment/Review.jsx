import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

function Review() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const galleryRef = useRef(null)
  const modalRef = useRef(null)

  const images = [
    "https://i.pinimg.com/736x/67/f4/0a/67f40a734db6f622f65c9af4fac0c684.jpg",
    "https://i.pinimg.com/736x/45/52/74/4552741afd30f8f5c6e881c979c85a73.jpg",
    "https://i.pinimg.com/736x/28/7a/43/287a434796b8f744c540629118cf031d.jpg",
    "https://i.pinimg.com/1200x/df/e6/60/dfe660f48afae36caf89fcbd8cafd22f.jpg",
    "https://i.pinimg.com/1200x/cb/ab/ce/cbabcea8b373efbb12d2200963e6b5d9.jpg",
    "https://i.pinimg.com/736x/0f/e5/32/0fe5325bc55e6260a2d3bf85cde88d22.jpg",
    "https://i.pinimg.com/736x/c1/3d/9b/c13d9be6daecd5795e30023ef975baa5.jpg",
    "https://i.pinimg.com/736x/b9/fb/4f/b9fb4f7c3e6b3c027bfea11c252cabc3.jpg",
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing physiotherapy treatment! The staff is professional and caring. My back pain improved significantly after just 6 weeks.",
      treatment: "Back Pain Treatment",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Excellent care for my shoulder injury. The exercises and therapy sessions helped me recover faster than expected.",
      treatment: "Shoulder Pain Treatment",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "The knee rehabilitation program was outstanding. I can now walk without pain and even started jogging again!",
      treatment: "Knee Pain Treatment",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      comment: "Professional and effective treatment for my neck pain. The therapists are knowledgeable and the facility is modern.",
      treatment: "Neck Pain Treatment",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Lisa Wang",
      rating: 5,
      comment: "Outstanding care for my hip arthritis. The personalized treatment plan made all the difference in my recovery.",
      treatment: "Hip Pain Treatment",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Robert Davis",
      rating: 5,
      comment: "The ankle rehabilitation was excellent. I'm back to playing sports without any issues. Highly recommended!",
      treatment: "Ankle & Foot Treatment",
      date: "1 month ago"
    }
  ]

  useEffect(() => {
    // Animate gallery items on load
    const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item')
    if (galleryItems) {
      gsap.fromTo(galleryItems, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out"
        }
      )
    }

    // Animate reviews on load
    const reviewItems = galleryRef.current?.querySelectorAll('.review-card')
    if (reviewItems) {
      gsap.fromTo(reviewItems, 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          delay: 0.5,
          ease: "power3.out"
        }
      )
    }
  }, [])

  const openModal = (index) => {
    setSelectedImage(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50" ref={galleryRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 relative overflow-hidden">
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
              Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              See what our patients say about their treatment experience and recovery journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/treatment')}
                className="bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-white/20"
              >
                ← Back to Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Treatment <span className="text-transparent bg-clip-text bg-blue-400">Gallery</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our modern facility and treatment procedures through our comprehensive photo gallery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Treatment gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="font-semibold">Treatment Image {index + 1}</p>
                      <p className="text-sm opacity-90">Click to view larger</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Patient <span className="text-transparent bg-clip-text bg-blue-400">Testimonials</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from our patients about their recovery journey and treatment experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-gray-600">{review.treatment}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-gray-600 text-sm">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">{review.comment}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{review.treatment}</span>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Recovery Journey?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join our satisfied patients and experience the difference our professional care can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
             onClick={() => navigate('/contact-us')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-6 px-12 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Book Your Consultation
            </button>
            <button className="bg-white text-blue-600 font-bold py-6 px-12 rounded-2xl hover:bg-gray-100 transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105">
              View More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <img 
                src={images[selectedImage]} 
                alt={`Treatment gallery ${selectedImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                ref={modalRef}
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="text-center mt-4 text-white">
              <p className="text-lg">Image {selectedImage + 1} of {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Review