import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import meditationAnimation from '../../assets/Meditation.json';
import Physiotherapy from '../../assets/physiotherapy.json'

function Specialities() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants with mobile-specific slower durations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 1.4 : 0.8,
        staggerChildren: isMobile ? 0.4 : 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 1.2 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 1.4 : 0.8,
        ease: "easeOut"
      }
    }
  };

  const reverseTextVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 1.2 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const reverseAnimationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 1.4 : 0.8,
        ease: "easeOut"
      }
    }
  };

  // Specialities data
  const specialitiesData = [
    "7 વર્ષથી બહોળો અનુભવ ધરાવતા સંચાલક ડો. નિધિ લખાણી",
    "જામનગર સિવિલ હોસ્પિટલ, નાણાવટી મેક્સ, મુંબઈ જેવી મોટી હોસ્પિટલોમાંં કામ કરીને અનુભવ મેળવ્યો છે.",
    "સ્ટ્રેચર લિફ્ટની સુવિધા ઉપલબ્ધ",
    "અનુભવી અને નિષ્ણાંત થેરાપિસ્ટ દ્વારા સારવાર",
    "એડવાન્સ મશીનો દ્વારા આપવામાં આવતી સારવાર"
  ];

  const physiotherapyData =[
    "પીડાને તમારા માર્ગમાં આવવા દેવાનું બંધ કરો!",
    "પીડા સાથે સંઘર્ષ કરી રહ્યા છો?",
    "અમારા ફિઝિયોથેરાપિસ્ટ અને સ્પોર્ટ્સ થેરાપિસ્ટને વ્યાવસાયિક રૂપે તાલીમ આપવામાં આવે છે જેથી તમે તમારા દુખાવાને રાહત આપી શકો, પછી ભલે તે કોઈ લાંબી સમસ્યા અથવા ઈજા હોય."
  ]

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden"
    >
      <div className="glow-line absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transform scale-x-0 origin-left">
      </div>
      {/* Background particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
      </div>

      {/* First Section - Specialities */}
      <div className="container-responsive section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen"
        >
          {/* Left Side - Text Content */}
          <motion.div 
            variants={textVariants}
            className="space-y-8"
          >
            <motion.h2 
              className="text-responsive-h2 font-bold mb-8 sm:mb-12 p-4 sm:p-8 lg:p-12 text-white bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.4 : 0.2, duration: isMobile ? 1.0 : 0.6 }}
            >
              અમારી<span className='text-blue-300'> વિશેષતાઓ</span>
            </motion.h2>
            
            <motion.p 
              className="text-responsive-body text-gray-300 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.8 : 0.4, duration: isMobile ? 1.0 : 0.6 }}
            >
              અમારી ક્લિનિકમાં આપને મળશે વિશ્વસનીય અને ગુણવત્તાયુક્ત ફિઝિયોથેરાપી સેવાઓ
            </motion.p>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 1.2 : 0.6, duration: isMobile ? 1.0 : 0.6 }}
            >
              {specialitiesData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: isMobile ? 1.6 + index * 0.2 : 0.8 + index * 0.1,
                    duration: isMobile ? 0.8 : 0.6
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            
          </motion.div>

          {/* Right Side - Lottie Animation */}
          <motion.div 
            variants={animationVariants}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-64 sm:h-80 lg:h-96">
              {/* Lottie Animation Container */}
              <div className="w-full h-full rounded-xl sm:rounded-2xl border border-blue-500/20 flex items-center justify-center overflow-hidden">
                <Lottie
                  animationData={meditationAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  className="w-full h-full"
                />
              </div>
              
              {/* Floating elements around the animation */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-500 opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-1500 opacity-60"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Section - Physiotherapy */}
      <div className="container-responsive section-padding mt-[-100px] sm:mt-[-150px] lg:mt-[-180px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen"
        >
          {/* Left Side - Physiotherapy Animation */}
          <motion.div 
            variants={reverseAnimationVariants}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-64 sm:h-80 lg:h-96">
              {/* Lottie Animation Container */}
              <div className="w-full h-full rounded-xl sm:rounded-2xl border border-green-500/20 flex items-center justify-center overflow-hidden">
                <Lottie
                  animationData={Physiotherapy}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  className="w-full h-full"
                />
              </div>
              
              {/* Floating elements around the animation */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-500 opacity-60"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-1500 opacity-60"></div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            variants={reverseTextVariants}
            className="space-y-8"
          >
            <motion.h2 
              className="text-responsive-h2 font-bold p-4 sm:p-8 lg:p-12 mb-6 sm:mb-8 bg-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.4 : 0.2, duration: isMobile ? 1.0 : 0.6 }}
            >
              {physiotherapyData[0]}
            </motion.h2>
            
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 0.8 : 0.4, duration: isMobile ? 1.0 : 0.6 }}
            >
              {physiotherapyData[1]}
            </motion.h3>
            
            <motion.p 
              className="text-responsive-body text-gray-300 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 1.2 : 0.6, duration: isMobile ? 1.0 : 0.6 }}
            >
              {physiotherapyData[2]}
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: isMobile ? 1.6 : 0.8, duration: isMobile ? 1.0 : 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">વ્યાવસાયિક ફિઝિયોથેરાપિસ્ટ</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">સ્પોર્ટ્સ થેરાપિસ્ટ</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">દુખાવો રાહત</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Specialities;