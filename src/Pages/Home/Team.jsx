import React, { useRef } from 'react';
import SpotlightCard from '../../Components/utils/SpotlightCard';

function Team() {
  const teamRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Lead Physiotherapist",
      specialization: "Sports Rehabilitation",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in sports injuries and post-operative rehabilitation with a focus on personalized treatment plans."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Senior Physiotherapist",
      specialization: "Neurological Rehabilitation",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      description: "Expert in neurological conditions and stroke rehabilitation, helping patients regain mobility and independence."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Pediatric Physiotherapist",
      specialization: "Child Development",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to helping children with developmental delays and physical challenges reach their full potential."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      position: "Orthopedic Specialist",
      specialization: "Joint & Spine Care",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Specialized in orthopedic conditions, joint replacements, and spine rehabilitation with advanced techniques."
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      position: "Geriatric Physiotherapist",
      specialization: "Senior Care",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      description: "Focused on improving mobility and quality of life for elderly patients through gentle, effective therapies."
    },
    {
      id: 6,
      name: "Dr. David Park",
      position: "Cardiopulmonary Specialist",
      specialization: "Respiratory Care",
      experience: "9+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in respiratory conditions and cardiac rehabilitation, helping patients improve breathing and endurance."
    }
  ];

  return (
    <div ref={teamRef} className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="team-title text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
            Meet Our
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent ml-4">
              Expert Team
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="group fade-in">
              <SpotlightCard
                className="h-full transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                spotlightColor="rgba(59, 130, 246, 0.3)"
              >
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-blue-400/60 transition-all duration-500">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Experience Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">
                    {member.position}
                  </p>
                  <p className="text-teal-300 text-sm mb-4">
                    {member.specialization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team is here to provide personalized care and support you every step of the way.
              Book your consultation today and take the first step towards better health.
            </p>
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;