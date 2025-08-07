import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Add CSS for smooth, light animations optimized for mobile
const treatmentStyle = `
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUpMobile {
    0% { opacity: 0; transform: translateY(15px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .treatment-animate {
    animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .treatment-card-animate {
    animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .treatment-content-animate {
    animation: fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .smooth-hover {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .smooth-hover:hover {
    transform: translateY(-3px);
  }
  .card-smooth {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .card-smooth:hover {
    transform: translateY(-5px) scale(1.01);
  }
  .text-smooth {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .button-smooth {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .button-smooth:hover {
    transform: translateY(-1px);
  }
  
  /* Mobile optimizations */
  @media (max-width: 768px) {
    .treatment-animate {
      animation: fadeInUpMobile 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .treatment-card-animate {
      animation: fadeInUpMobile 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .treatment-content-animate {
      animation: fadeInUpMobile 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .smooth-hover:hover {
      transform: translateY(-2px);
    }
    .card-smooth:hover {
      transform: translateY(-3px) scale(1.005);
    }
    .button-smooth:hover {
      transform: translateY(-1px);
    }
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .treatment-animate, .treatment-card-animate, .treatment-content-animate {
      animation: none;
    }
    .smooth-hover:hover, .card-smooth:hover, .button-smooth:hover {
      transform: none;
    }
  }
  
  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .card-smooth:hover {
      transform: none;
    }
    .smooth-hover:hover {
      transform: none;
    }
    .button-smooth:hover {
      transform: none;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = treatmentStyle;
  document.head.appendChild(styleSheet);
}

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
      image: "https://www.acesportsclinic.com.au/wp-content/uploads/2022/06/Untitled-21.jpg",
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

  // Mobile-optimized card variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -5,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Mobile-optimized content variants
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Mobile-optimized feature variants
  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const featureItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 8
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div ref={containerRef} className='w-full min-h-[280vh] bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden treatment-animate'>
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      {/* Reduced particles for mobile performance */}
      <div className="absolute inset-0 opacity-20 parallax-bg">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Modern title with gradient and animation */}
      <motion.div 
        ref={titleRef}
        className="relative z-10 text-center pt-16 sm:pt-20 pb-12 sm:pb-16 treatment-animate"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              ઉપલબ્ધ
            </span>
            <span className="text-white ml-2 sm:ml-4">ઉપચારો</span>
          </motion.h1>
          <motion.div 
            className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 pb-16 sm:pb-20">
        {treatmentData.map((treatment, index) => (
          <div key={index} className="mb-20 sm:mb-32 ">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16  items-center min-h-screen ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Card Section */}
              <motion.div 
                ref={el => cardsRef.current[index] = el}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''} treatment-card-animate`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-30px" }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="relative group cursor-pointer card-smooth">
                  {/* Modern card with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/20"></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                    <motion.img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

                  {/* Card content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <motion.h3 
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {treatment.title}
                    </motion.h3>
                    <motion.div 
                      className={`w-16 sm:w-24 h-1 bg-gradient-to-r ${treatment.gradient} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
          </div>

                  {/* Hover effect glow */}
                  <AnimatePresence>
                    {isHovered === index && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                ref={el => contentRef.current[index] = el}
                className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''} treatment-content-animate`}
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="space-y-4 sm:space-y-6">
              <motion.h2 
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${treatment.gradient} bg-clip-text text-transparent text-smooth`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                    {treatment.title}
              </motion.h2>
              
              <motion.p 
                    className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-smooth"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                    {treatment.description}
              </motion.p>

              <motion.div 
                    className="space-y-4 sm:space-y-6"
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">મુખ્ય લક્ષણો:</h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {treatment.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                          className="flex items-center text-gray-300 text-sm sm:text-base lg:text-lg group smooth-hover"
                          variants={featureItemVariants}
                        >
                          <motion.div 
                            className={`w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${treatment.gradient} rounded-full mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-200`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                          />
                          <span className="group-hover:text-white transition-colors duration-200">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

                  {/* Modern CTA button */}
                  <motion.button
                    className={`mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${treatment.gradient} text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl button-smooth text-sm sm:text-base`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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