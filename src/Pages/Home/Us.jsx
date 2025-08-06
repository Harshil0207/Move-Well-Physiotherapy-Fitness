import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Us() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [counters, setCounters] = useState({
    successRate: 0,
    patients: 0,
    experience: 0,
    support: 0
  });
  const containerRef = useRef(null);
  const featuresRef = useRef([]);
  const statsRef = useRef([]);
  const testimonialRef = useRef(null);
  const backgroundRef = useRef(null);
  const floatingElementsRef = useRef([]);

  const features = [
    {
      
      title: "નિષ્ણાત સારવાર",
      description: "અમારી પ્રમાણિત ફિઝિયોથેરાપિસ્ટ્સની ટીમ વર્ષોના અનુભવ અને વિશેષ તાલીમ સાથે તમને ઉચ્ચતમ ગુણવત્તાની સારવાર પૂરી પાડે છે.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      
      title: "ઝડપી પુનઃપ્રાપ્તિ",
      description: "ઉન્નત સારવાર તકનીકો અને વ્યક્તિગત સારવાર યોજનાઓ તમને ઝડપથી સાજા થવામાં મદદ કરે છે અને તમારા સક્રિય જીવનશૈલીમાં પાછા આવવામાં મદદ કરે છે.",
      color: "from-green-500 to-emerald-500"
    },
    {
      
      title: "વ્યક્તિગત સારવાર",
      description: "દરેક સારવાર યોજના તમારી વિશિષ્ટ જરૂરિયાતો માટે કસ્ટમાઇઝ કરવામાં આવે છે, જે શ્રેષ્ઠ પરિણામો અને લાંબા ગાળે સુખાકારી સુનિશ્ચિત કરે છે.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "સાબિત પરિણામો",
      description: "95% સફળતા દર અને હજારો સંતુષ્ટ દર્દીઓ સાથે, અમારી પદ્ધતિઓ અસાધારણ પરિણામો આપવા માટે સાબિત થઈ છે.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: 95, label: "સફળતા દર", icon: "📈", suffix: "%" },
    { number: 5000, label: "સંતુષ્ટ દર્દીઓ", icon: "😊", suffix: "+" },
    { number: 15, label: "વર્ષોનો અનુભવ", icon: "⭐", suffix: "+" },
    { number: 24, label: "સમર્થન ઉપલબ્ધ", icon: "🔄", suffix: "/7" }
  ];

  const testimonials = [
    {
      name: "રાજેશ પટેલ",
      role: "ક્રીકેટ ખેલાડી",
      content: "મારા ઘૂંટણની ઈજા પછી, મૂવવેલે મને માત્ર 6 અઠવાડિયામાં દોડવા પાછા આવવામાં મદદ કરી. તેમનો વ્યક્તિગત અભિગમ બધો ફરક લાવ્યો.",
      rating: 5
    },
    {
      name: "પ્રિયા શર્મા",
      role: "ઓફિસ પ્રોફેશનલ",
      content: "ક્રોનિક પીઠનો દુખાવો મારા કામને અસર કરી રહ્યો હતો. મૂવવેલની ટીમે માત્ર મારો દુખાવો ઓછો કર્યો જ નહીં, પણ તેને કેવી રીતે રોકવો તે પણ શીખવ્યું.",
      rating: 5
    },
    {
      name: "અમિત કુમાર",
      role: "ફિટનેસ ટ્રેનર",
      content: "ટ્રેનર તરીકે, મારે ટોપ કન્ડિશનમાં રહેવાની જરૂર છે. મૂવવેલની સ્પોર્ટ્સ થેરાપીમાં નિષ્ણાતતા મને મારા શ્રેષ્ઠ પ્રદર્શનમાં રાખે છે.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Background animation setup
    const backgroundElement = backgroundRef.current;
    const floatingElements = floatingElementsRef.current;

    // Parallax background effect
    gsap.to(backgroundElement, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: backgroundElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Floating elements animation
    floatingElements.forEach((element, index) => {
      if (element) {
        // Continuous floating animation
        gsap.to(element, {
          y: index % 2 === 0 ? -30 : 30,
          x: index % 3 === 0 ? -20 : 20,
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 8 + index * 2,
          ease: "none",
          repeat: -1,
          yoyo: true
        });

        // Parallax effect on scroll
        gsap.to(element, {
          y: index % 2 === 0 ? -100 : 100,
          x: index % 3 === 0 ? -50 : 50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    // Animate features on scroll
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(feature,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: feature,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate stats with counter
    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(stat,
        {
          opacity: 0,
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Start counter animation when element enters viewport
              const targetNumber = stats[index].number;
              const duration = 2; // 2 seconds
              const steps = 60; // 60 steps for smooth animation
              const increment = targetNumber / steps;
              let currentStep = 0;
              
              const counterInterval = setInterval(() => {
                currentStep++;
                const currentValue = Math.floor(increment * currentStep);
                
                setCounters(prev => ({
                  ...prev,
                  [Object.keys(prev)[index]]: Math.min(currentValue, targetNumber)
                }));
                
                if (currentStep >= steps) {
                  clearInterval(counterInterval);
                  setCounters(prev => ({
                    ...prev,
                    [Object.keys(prev)[index]]: targetNumber
                  }));
                }
              }, duration * 1000 / steps);
            }
          }
        }
      );
    });

    // Animate testimonial
    if (testimonialRef.current) {
      gsap.fromTo(testimonialRef.current,
        {
          opacity: 0,
          y: 60,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        
        {/* Animated floating elements */}
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[3] = el}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[4] = el}
          className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-35"
        ></div>
        
        {/* Additional smaller floating elements */}
        <div 
          ref={el => floatingElementsRef.current[5] = el}
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[6] = el}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
        ></div>
        <div 
          ref={el => floatingElementsRef.current[7] = el}
          className="absolute top-3/4 left-1/6 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-15"
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative z-10 container-responsive section-padding">
        {/* Hero Section */}
        <div className="text-center section-margin">
          <h1 className="text-responsive-h1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 mb-6 p-3">
            શા માટે મૂવવેલ પસંદ કરવું?
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto shadow-lg mb-6 sm:mb-8"></div>
          <p className="text-responsive-body text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            અમારી આધુનિક ફિઝિયોથેરાપી સેવાઓ, વ્યક્તિગત સારવાર અને સાબિત પરિણામો સાથે 
            તફાવત અનુભવો જે તમને તમારા પ્રિય કાર્યો કરવા પાછા લાવે છે.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-responsive section-margin">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className={`group relative card-responsive bg-gradient-to-br ${feature.color}/20 border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
              onClick={() => setActiveFeature(index)}
            >
              <div className="text-3xl sm:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 section-margin">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={el => statsRef.current[index] = el}
              className="group text-center p-4 sm:p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl sm:rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-xl sm:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {counters[Object.keys(counters)[index]]}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">
                {stat.label}
              </div>
              <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div ref={testimonialRef} className="section-margin">
          <h2 className="text-responsive-h2 font-bold text-center text-white mb-8 sm:mb-12">
            અમારા દર્દીઓ શું કહે છે
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group card-responsive bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-blue-500/30 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              તમારી પુનઃપ્રાપ્તિની યાત્રા શરૂ કરવા તૈયાર છો?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              હજારો સંતુષ્ટ દર્દીઓ સાથે જોડાઓ જેઓએ મૂવવેલની નિષ્ણાત ફિઝિયોથેરાપી સારવારથી તેમના જીવનને બદલી નાખ્યું છે.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => {
                window.location.href = '/contact-us'
              }} className="btn-responsive bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                સલાહ માટે બુક કરો
              </button>
              <button className="btn-responsive border-2 border-blue-500 text-blue-400 font-semibold rounded-xl sm:rounded-2xl hover:bg-blue-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                વધુ જાણો
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Us;