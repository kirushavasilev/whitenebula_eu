import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-playfair font-bold mb-6 md:mb-8 animate-fade-in-up">
            So what is, really, <span className="text-nebula-green">White Nebula?</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-nebula-green mx-auto animate-expand"></div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          <div className="lg:col-span-3 space-y-6 md:space-y-8 text-gray-300 leading-relaxed">
            
            <div className="space-y-4 md:space-y-6 animate-slide-in-left-delay">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Our Journey</h3>
              
              <p className="text-base md:text-lg leading-relaxed">
                "It all began during our third year of high school. I remember how the two of us, filled with nothing but raw curiosity, decided to give cybersecurity and CTFs a try. We found an event, registered, and spent the entire weekend solving challenges—little sleep and hardly any knowledge, but we persevered.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-nebula-green font-semibold">I can still feel the rush from cracking that zip file after brute forcing through 17 billion possible combinations.</span>
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                From that spark, everything just expanded. We jumped into more events—competitive coding, national competitions, even worldwide challenges—and even dabbled in hacking. But White Nebula grew into something more than just a team; it became a bond that carried over into every project we touched.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                Now, after all these adventures, we're still inspired to learn. The thrill of overcoming those daunting challenges is unlike anything else. As we await our university decisions, our paths may soon diverge, but I believe we have an important message for the youth: <span className="text-white font-semibold">dare to try, be creative, and follow your passion</span>—just like we did on that unforgettable Friday night."
              </p>
              
              <div className="text-right">
                <span className="text-nebula-green font-semibold text-base md:text-lg">- Klart</span>
              </div>
            </div>
            
            <div className="border-l-4 border-nebula-green bg-gray-900/20 pl-4 md:pl-8 py-4 md:py-6 my-8 md:my-10 hover:border-l-8 hover:pl-2 md:hover:pl-6 transition-all duration-500 hover:shadow-lg animate-slide-in-left-delay-2">
              <p className="text-lg md:text-xl italic text-white leading-relaxed">
                "White Nebula is not just a team. It is a boundless constellation of unity, where stars align to ignite the universe of collaboration."
              </p>
            </div>
          </div>
          
          <div className="relative lg:col-span-2 hidden lg:block">
            <div className="space-y-8">
              
              <div className="ml-auto w-48 transform rotate-2 relative animate-float">
                <img 
                  src="/team-photo1.jpg" 
                  alt="Team member working"
                  className="w-full rounded-lg shadow-xl border border-gray-700 hover:border-nebula-green hover:scale-105 transition-all duration-300"
                />
              </div>
              
              <div className="w-56 transform -rotate-1 -ml-6 relative z-10 animate-float-delay">
                <img 
                  src="/team-photo2.jpg" 
                  alt="Coding setup"
                  className="w-full rounded-lg shadow-xl border border-gray-700 hover:border-nebula-green hover:scale-105 transition-all duration-300"
                />
              </div>
              
              <div className="ml-auto w-52 transform rotate-1 relative animate-float-delay-2">
                <img 
                  src="/team-photo3.jpg" 
                  alt="Team workspace"
                  className="w-full rounded-lg shadow-xl border border-gray-700 hover:border-nebula-green hover:scale-105 transition-all duration-300"
                />
              </div>
              
              <div className="absolute top-24 right-4 w-40 transform -rotate-2 z-20 animate-float-delay-3">
                <img 
                  src="/team-photo4.jpg" 
                  alt="Team member"
                  className="w-full rounded-lg shadow-xl border border-gray-700 hover:border-nebula-green hover:scale-105 transition-all duration-300"
                />
              </div>
              
            </div>
          </div>

          <div className="lg:hidden mt-8">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/team-photo1.jpg" 
                alt="Team member working"
                className="w-full rounded-lg shadow-xl border border-gray-700"
              />
              <img 
                src="/team-photo2.jpg" 
                alt="Coding setup"
                className="w-full rounded-lg shadow-xl border border-gray-700"
              />
            </div>
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(2deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-expand {
          animation: expand 1.5s ease-out 0.5s both;
        }
        
        .animate-slide-in-left-delay {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-left-delay-2 {
          animation: slideInLeft 0.8s ease-out 0.4s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 1.5s;
        }
        
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 3s;
        }
        
        .animate-float-delay-3 {
          animation: float 6s ease-in-out infinite 4.5s;
        }
      `}</style>
    </section>
  );
};

export default About; 