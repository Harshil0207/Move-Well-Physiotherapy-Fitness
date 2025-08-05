import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Treatment() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const contentRef = useRef([]);
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const treatmentData = [
    {
      image: "https://i.pinimg.com/736x/ef/d6/66/efd6668b3bc8f2d76e22464c5e5386ff.jpg",
      title: "ઘૂંટણનો દુખાવો",
      description: "ઘૂંટણના દુખાવા માટે વ્યાપક ફિઝિયોથેરાપી ટ્રીટમેન્ટ્સ જે મોબિલિટી પુનઃસ્થાપિત કરવા, દુખાવો ઘટાડવા અને એકંદર કાર્યમાં સુધારો કરવા માટે ડિઝાઇન કરેલા છે. અમારા નિષ્ણાત થેરાપિસ્ટ્સ ઇવિડન્સ-બેઝ્ડ તકનીકોનો ઉપયોગ કરે છે જેથી તમે ઝડપથી પુનઃપ્રાપ્તિ કરી શકો અને ભવિષ્યના ઇજાઓને રોકી શકો.",
      features: [
        "મેન્યુઅલ થેરાપી તકનીકો",
        "વ્યાયામ પ્રિસ્ક્રિપ્શન",
        "દુખાવો વ્યવસ્થાપન",
        "ઇજા નિવારણ"
      ],
      
      gradient: "from-orange-400 to-red-500"
    },
    {
      image: "https://i.pinimg.com/1200x/f3/97/2c/f3972c0bf357924c9eea5650b781cf06.jpg",
      title: "પીઠનો દુખાવો",
      description: "પીઠના દુખાવા માટે વિશેષ પુનઃસ્થાપના કાર્યક્રમો. અમે તમને શિખર કામગીરી પર પાછા ફેરવવા પર ધ્યાન કેન્દ્રિત કરીએ છીએ જ્યારે ટાર્ગેટેડ મજબૂતીકરણ અને કન્ડિશનિંગ કાર્યક્રમો દ્વારા ફરીથી ઇજા થવાથી રોકીએ છીએ.",
      features: [
        "પોસ્ચર કોરેક્શન",
        "સ્ટ્રેન્ગ્થેનિંગ એક્સરસાઇઝ",
        "પેઈન રિલિફ ટેકનિક્સ",
        "પ્રિવેન્ટિવ કેર"
      ],
      
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      image: "https://i.pinimg.com/736x/b6/6d/b1/b66db1bbc79ecff2822c271c24ec2470.jpg",
      title: "ગરદનનો દુખાવો",
      description: "ગરદનના દુખાવા માટે વિશેષ ફિઝિયોથેરાપી ટ્રીટમેન્ટ્સ. અમારા નિષ્ણાત થેરાપિસ્ટ્સ ગરદનના દુખાવા માટે ઇવિડન્સ-બેઝ્ડ તકનીકોનો ઉપયોગ કરે છે જે મોબિલિટી સુધારવા અને દુખાવો ઘટાડવામાં મદદ કરે છે.",
      features: [
        "નેક એક્સરસાઇઝ",
        "સ્ટ્રેચિંગ ટેકનિક્સ",
        "મેન્યુઅલ થેરાપી",
        "પોસ્ચર ટ્રેનિંગ"
      ],
      
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  // Modern card variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Feature list animation
  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  useEffect(() => {
    // Modern GSAP animations
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

    // Enhanced parallax effect
    gsap.to(".parallax-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [treatmentData.length]);

  return (
    <div ref={containerRef} className='w-full min-h-[280vh] bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden'>
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30 parallax-bg">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Modern title with gradient and animation */}
      <motion.div 
        ref={titleRef}
        className="relative z-10 text-center pt-20 pb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              ઉપલબ્ધ
            </span>
            <span className="text-white ml-4">ઉપચારો</span>
          </motion.h1>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 pb-20">
        {treatmentData.map((treatment, index) => (
          <div key={index} className="mb-32">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Card Section */}
              <motion.div 
                ref={el => cardsRef.current[index] = el}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="relative group cursor-pointer">
                  {/* Modern card with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20"></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-3xl">
                    <motion.img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-[500px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    
        </div>

                  {/* Card content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {treatment.title}
                    </motion.h3>
                    <motion.div 
                      className={`w-24 h-1 bg-gradient-to-r ${treatment.gradient} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    />
          </div>

                  {/* Hover effect glow */}
                  <AnimatePresence>
                    {isHovered === index && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                ref={el => contentRef.current[index] = el}
                className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="space-y-6">
              <motion.h2 
                    className={`text-4xl font-bold mb-6 bg-gradient-to-r ${treatment.gradient} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                    {treatment.title}
              </motion.h2>
              
              <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                    {treatment.description}
              </motion.p>

              <motion.div 
                    className="space-y-6"
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h4 className="text-2xl font-semibold text-white mb-6">મુખ્ય લક્ષણો:</h4>
                    <ul className="space-y-4">
                      {treatment.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                          className="flex items-center text-gray-300 text-lg group"
                          variants={featureItemVariants}
                        >
                          <motion.div 
                            className={`w-3 h-3 bg-gradient-to-r ${treatment.gradient} rounded-full mr-4 group-hover:scale-125 transition-transform`}
                            whileHover={{ scale: 1.2 }}
                          />
                          <span className="group-hover:text-white transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

                  {/* Modern CTA button */}
                  <motion.button
                    className={`mt-8 px-8 py-4 bg-gradient-to-r ${treatment.gradient} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    વધુ જાણો
                  </motion.button>
                </div>
            </motion.div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Treatment;