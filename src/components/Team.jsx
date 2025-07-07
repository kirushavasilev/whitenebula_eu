import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Carpin',
      country: 'spain',
      tags: ['python', 'no sleep guinness record'],
      color: 'nebula-green'
    },
    {
      name: 'Klart',
      country: 'russia',
      tags: ['python', 'failed physicist'],
      color: 'nebula-red'
    },
    {
      name: 'Karube',
      country: 'japan',
      tags: ['python', "Terence Tao's long lost brother"],
      color: 'blue-400'
    },
    {
      name: 'Caridi',
      country: 'usa',
      tags: ['python', 'scratch world champion', 'sponsored by red bull'],
      color: 'purple-400'
    }
  ];

  return (
    <section id="team" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair font-bold mb-4 md:mb-6 animate-fade-in-up">
            Meet Our <span className="text-nebula-green">Team</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-nebula-green mx-auto animate-expand"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-black/20 animate-slide-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="relative">
                  <img 
                    src={`/${member.country}.png`} 
                    alt={member.country}
                    className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover ring-2 ring-gray-600 group-hover:ring-nebula-green/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-white">
                {member.name}
              </h3>

              <div className="space-y-2">
                {member.tags.map((tag, tagIndex) => (
                  <div 
                    key={tagIndex}
                    className="text-center"
                  >
                    <span className="inline-block text-xs font-mono tracking-wider px-2 md:px-3 py-1 rounded-full border border-gray-600/30 bg-gray-800/50 hover:border-nebula-green/30 hover:text-nebula-green hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-tag text-gray-400"
                    style={{
                      animationDelay: `${(index * 0.1) + (tagIndex * 0.05)}s`
                    }}>
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="bg-gray-800/20 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-nebula-green/30 hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-2xl md:text-3xl font-bold text-nebula-green mb-1 md:mb-2 animate-counter">4</div>
            <div className="text-sm md:text-base text-gray-300">Nationalities</div>
          </div>
          <div className="bg-gray-800/20 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-nebula-green/30 hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-2xl md:text-3xl font-bold text-nebula-green mb-1 md:mb-2 animate-counter">1</div>
            <div className="text-sm md:text-base text-gray-300">Locked up Room</div>
          </div>
          <div className="bg-gray-800/20 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-nebula-green/30 hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '1.0s' }}>
            <div className="text-2xl md:text-3xl font-bold text-nebula-green mb-1 md:mb-2 animate-counter">∞</div>
            <div className="text-sm md:text-base text-gray-300">Passion</div>
          </div>
          <div className="bg-gray-800/20 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-nebula-green/30 hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-2xl md:text-3xl font-bold text-nebula-green mb-1 md:mb-2 animate-counter">1</div>
            <div className="text-sm md:text-base text-gray-300">Dream</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        @media (min-width: 768px) {
          @keyframes expand {
            from {
              width: 0;
            }
            to {
              width: 6rem;
            }
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInTag {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes counter {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-expand {
          animation: expand 1.5s ease-out 0.5s both;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out both;
        }
        
        .animate-fade-in-tag {
          animation: fadeInTag 0.6s ease-out both;
        }
        
        .animate-counter {
          animation: counter 1s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Team; 