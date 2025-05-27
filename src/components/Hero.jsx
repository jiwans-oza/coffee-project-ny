
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-300 ease-out"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-300"></div>
      </div>
      
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight transition-all duration-500 ease-out">
            Coffee Project NY
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 font-light max-w-2xl mx-auto transition-all duration-500 ease-out">
            A passion project of coffee, people and heart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-coffee-brown hover:bg-coffee-dark text-white px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Coffee
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-coffee-dark px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm relative z-30"
              onClick={() => document.getElementById('academy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ease-out">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center transition-all duration-300 hover:border-coffee-cream">
          <div className="w-1 h-3 bg-white rounded-full mt-2 transition-all duration-300"></div>
        </div>
        <p className="text-white text-sm mt-2 opacity-70 transition-opacity duration-300 hover:opacity-100">Scroll down</p>
      </div>
    </section>
  );
};

export default Hero;
