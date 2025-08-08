import React, { useRef } from "react";
import BlurText from "../../Components/utils/BlurText";
// Remove gsap and ScrollTrigger imports and logic

// Add CSS for entrance, floating, and hover animations
const whyUsStyle = `
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(50px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .whyus-animate {
    animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1);
  }
  @keyframes float {
    0% { transform: translateY(0) scale(1) rotate(0deg); }
    50% { transform: translateY(-15px) scale(1.05) rotate(3deg); }
    100% { transform: translateY(0) scale(1) rotate(0deg); }
  }
  .float-anim {
    animation: float 6s ease-in-out infinite;
  }
  .float-anim-alt {
    animation: float 7s ease-in-out infinite reverse;
  }
  .stat-card, .text-content {
    animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .whyus-img-container {
    transition: box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  .whyus-img-container:hover {
    box-shadow: 0 35px 60px -15px rgba(59, 130, 246, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  }
  .whyus-dot {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transform: scale(1) translateY(0) rotate(0deg);
  }
  .whyus-img-container:hover .whyus-dot-1 {
    transform: scale(1.8) translateY(-15px) rotate(360deg);
  }
  .whyus-img-container:hover .whyus-dot-2 {
    transform: scale(1.6) translateY(15px) rotate(-360deg);
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = whyUsStyle;
  document.head.appendChild(styleSheet);
}

function WhyUs() {
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const floatingDot1Ref = useRef(null);
  const floatingDot2Ref = useRef(null);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const textContent = [
    "શા માટે તમારે ફિઝિયોથેરાપિસ્ટની મુલાકાત લેવાની જરૂર છે",
    "95 ટકા ખુશ ગ્રાહકોએ જણાવ્યું હતું કે મૂવવેલથી તેઓ અપેક્ષા કરતા વધુ ઝડપથી સાજા થઈ જાય છે. મૂવવેલમાં, અમે તમને જે રાહત આપવાને લાયક છો તે પૂરી પાડીએ છીએ અને તમને ગમતી વસ્તુઓ કરવા માટે તમને પાછા લાવીએ છીએ.",
    "મૂવવેલ ખાતે, અમે અનુભવી વ્યાવસાયિકોની એક ટીમ પૂરી પાડીએ છીએ જેઓ વિવિધ થેરાપ્યુટિક પદ્ધતિઓમાં નિષ્ણાત છે. અમારા ઉચ્ચ પ્રશિક્ષિત ચિકિત્સકો તમારી અનન્ય જરૂરિયાતોનું મૂલ્યાંકન કરશે અને તમારા ઉપચારને ઝડપી બનાવવા માટે એક વ્યક્તિગત સારવાર યોજના વિકસાવશે.",
    "અમારા ફિઝિયોથેરાપિસ્ટ અને સ્પોર્ટ્સ થેરાપિસ્ટને વ્યાવસાયિક રૂપે તાલીમ આપવામાં આવે છે જેથી તમે તમારા દુખાવાને રાહત આપી શકો, પછી ભલે તે કોઈ લાંબી સમસ્યા અથવા ઈજા હોય.",
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden whyus-animate">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse float-anim"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse float-anim-alt"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse float-anim"
          style={{ animationDelay: "4s" }}
        ></div>
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
            Professional physiotherapy services with proven results and
            personalized care
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
                      <p
                        key={index}
                        className="text-lg text-gray-200 leading-relaxed"
                      >
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
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  95%
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  સંતુષ્ટ ગ્રાહકો
                </div>
                <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
              <div className="stat-card group text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                  ઝડપી
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  પુનઃપ્રાપ્તિ
                </div>
                <div className="w-8 h-1 bg-green-500 rounded-full mx-auto mt-3 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          </div>
          {/* Right Side - Image */}
          <div
            ref={imageContainerRef}
            className="flex justify-center lg:justify-end whyus-img-container group"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 group">
              <img
                ref={imageRef}
                src="https://i.pinimg.com/736x/bb/51/a9/bb51a97e5e72791da3e81cec87b8ff1a.jpg"
                alt="Physiotherapy treatment"
                className="w-full h-auto object-cover transition-all duration-500 cursor-pointer group-hover:scale-110"
                style={{
                  minHeight: "500px",
                  maxWidth: "600px",
                  width: "100%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
