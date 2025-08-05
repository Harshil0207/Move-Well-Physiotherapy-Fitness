import React, { useEffect, useRef } from 'react'
import BlurText from '../../Components/utils/BlurText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const floatingDot1Ref = useRef(null);
  const floatingDot2Ref = useRef(null);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  useEffect(() => {
    // Text content animation on scroll
    const textElements = document.querySelectorAll('.text-content');
    gsap.fromTo(textElements,
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textElements[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats animation on scroll
    const statElements = document.querySelectorAll('.stat-card');
    gsap.fromTo(statElements,
      {
        opacity: 0,
        y: 30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statElements[0],
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );



    // Floating elements animation
    const floatingElements = [floatingDot1Ref.current, floatingDot2Ref.current];
    floatingElements.forEach((element, index) => {
      if (element) {
        gsap.fromTo(element,
          {
            opacity: 0,
            scale: 0,
            y: 30,
            rotation: index % 2 === 0 ? -180 : 180
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            delay: 0.5 + (index * 0.2),
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Enhanced hover animations
    const imageElement = imageRef.current;
    const containerElement = imageContainerRef.current;
    const dot1Element = floatingDot1Ref.current;
    const dot2Element = floatingDot2Ref.current;
    
    const handleMouseEnter = () => {
      // Container shadow enhancement with glow
      gsap.to(containerElement, {
        boxShadow: "0 35px 60px -15px rgba(59, 130, 246, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.4)",
        duration: 0.6,
        ease: "power2.out"
      });

      // Enhanced floating dots animation
      gsap.to(dot1Element, {
        scale: 1.8,
        y: -15,
        rotation: 360,
        duration: 0.5,
        ease: "back.out(1.7)"
      });

      gsap.to(dot2Element, {
        scale: 1.6,
        y: 15,
        rotation: -360,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      // Reset container shadow
      gsap.to(containerElement, {
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.6,
        ease: "power2.out"
      });

      // Reset floating dots with rotation
      gsap.to(dot1Element, {
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(dot2Element, {
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Enhanced mouse move effect for floating elements only
    const handleMouseMove = (e) => {
      const rect = imageElement.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      // Floating elements follow mouse
      gsap.to(dot1Element, {
        x: x * 20,
        y: y * 20,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(dot2Element, {
        x: -x * 15,
        y: -y * 15,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeaveMove = () => {
      // Reset floating elements
      gsap.to(dot1Element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(dot2Element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    imageElement.addEventListener('mouseenter', handleMouseEnter);
    imageElement.addEventListener('mouseleave', handleMouseLeave);
    imageElement.addEventListener('mousemove', handleMouseMove);
    imageElement.addEventListener('mouseleave', handleMouseLeaveMove);

    // Cleanup
    return () => {
      imageElement.removeEventListener('mouseenter', handleMouseEnter);
      imageElement.removeEventListener('mouseleave', handleMouseLeave);
      imageElement.removeEventListener('mousemove', handleMouseMove);
      imageElement.removeEventListener('mouseleave', handleMouseLeaveMove);
    };
  }, []);

  const textContent = [
    "શા માટે તમારે ફિઝિયોથેરાપિસ્ટની મુલાકાત લેવાની જરૂર છે",
    "95 ટકા ખુશ ગ્રાહકોએ જણાવ્યું હતું કે મૂવવેલથી તેઓ અપેક્ષા કરતા વધુ ઝડપથી સાજા થઈ જાય છે. મૂવવેલમાં, અમે તમને જે રાહત આપવાને લાયક છો તે પૂરી પાડીએ છીએ અને તમને ગમતી વસ્તુઓ કરવા માટે તમને પાછા લાવીએ છીએ.",
    "મૂવવેલ ખાતે, અમે અનુભવી વ્યાવસાયિકોની એક ટીમ પૂરી પાડીએ છીએ જેઓ વિવિધ થેરાપ્યુટિક પદ્ધતિઓમાં નિષ્ણાત છે. અમારા ઉચ્ચ પ્રશિક્ષિત ચિકિત્સકો તમારી અનન્ય જરૂરિયાતોનું મૂલ્યાંકન કરશે અને તમારા ઉપચારને ઝડપી બનાવવા માટે એક વ્યક્તિગત સારવાર યોજના વિકસાવશે.",
    "અમારા ફિઝિયોથેરાપિસ્ટ અને સ્પોર્ટ્સ થેરાપિસ્ટને વ્યાવસાયિક રૂપે તાલીમ આપવામાં આવે છે જેથી તમે તમારા દુખાવાને રાહત આપી શકો, પછી ભલે તે કોઈ લાંબી સમસ્યા અથવા ઈજા હોય."
  ];

  return (
    <div className="py-24  bg-gradient-to-br from-slate-900 via-black to-slate-900  relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
    
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <BlurText
              text="અમારી સેવાઓ"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl  md:text-6xl font-bold text-blue-400 bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"
            />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto shadow-lg"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
            Professional physiotherapy services with proven results and personalized care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="mb-8">
              <div className="space-y-8">
                <div className="text-content bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/30 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {textContent[0]}
                  </h2>
                  <div className="space-y-6">
                    {textContent.slice(1).map((text, index) => (
                      <p key={index} className="text-lg text-gray-200 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="stat-card group text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">95%</div>
                <div className="text-sm text-gray-300 font-medium">સંતુષ્ટ ગ્રાહકો</div>
                <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="stat-card group text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">ઝડપી</div>
                <div className="text-sm text-gray-300 font-medium">પુનઃપ્રાપ્તિ</div>
                <div className="w-8 h-1 bg-green-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div ref={imageContainerRef} className="flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 group">
              <img 
                ref={imageRef}
                src="https://i.pinimg.com/736x/bb/51/a9/bb51a97e5e72791da3e81cec87b8ff1a.jpg" 
                alt="Physiotherapy treatment" 
                className="w-full h-auto object-cover transition-all duration-500 cursor-pointer group-hover:scale-110"
                style={{ 
                  minHeight: '500px',
                  maxWidth: '600px',
                  width: '100%'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Enhanced floating elements */}
              <div 
                ref={floatingDot1Ref}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl transition-all duration-300 group-hover:scale-110"
              >
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <div 
                ref={floatingDot2Ref}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl transition-all duration-300 group-hover:scale-110"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute top-1/2 left-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-300 group-hover:scale-110">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              </div>
              <div className="absolute top-1/3 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-300 group-hover:scale-110">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs