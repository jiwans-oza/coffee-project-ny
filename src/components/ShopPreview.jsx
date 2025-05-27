
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ShopPreview = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: "Retro Espresso Blend",
      description: "A bold, rich blend with notes of dark chocolate and caramel",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      emoji: "☕"
    },
    {
      name: "The Crowd Pleaser",
      description: "Smooth and balanced, perfect for everyday drinking",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      emoji: "🫘"
    },
    {
      name: "Kenya - Nyeri Single Origin",
      description: "Bright acidity with wine-like complexity and black currant notes",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e9d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      emoji: "🌱"
    },
    {
      name: "Guatemala - Huehuetenango",
      description: "Full-bodied with chocolate undertones and a smooth finish",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      emoji: "🍫"
    },
    {
      name: "Ethiopia - Yirgacheffe",
      description: "Floral and tea-like with bright citrus notes",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1606791422814-bc26eb888124?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      emoji: "🌸"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 text-8xl opacity-5 transform rotate-12"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        >
          ☕
        </div>
        <div 
          className="absolute top-32 right-20 text-6xl opacity-5 transform -rotate-12"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(-12deg)` }}
        >
          🫘
        </div>
        <div 
          className="absolute bottom-20 left-1/4 text-7xl opacity-5"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          🌱
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4 animate-fade-in">
            <span className="inline-block animate-pulse mr-4">☕</span>
            Featured Coffee
            <span className="inline-block animate-pulse ml-4">☕</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our carefully curated selection of premium coffees, roasted to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${scrollY * 0.02 * (index + 1)}px)`
              }}
            >
              {/* Coffee Bean Decoration */}
              <div className="absolute top-4 right-4 text-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse">
                {product.emoji}
              </div>
              
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Steam Effect on Hover */}
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-pulse"
                      style={{
                        left: `${i * 4}px`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-serif font-semibold text-coffee-dark mb-2 group-hover:text-coffee-brown transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-coffee-brown animate-pulse">{product.price}</p>
                
                {/* Floating Coffee Beans */}
                <div className="absolute -top-2 -left-2 w-3 h-4 bg-coffee-brown rounded-full opacity-20 group-hover:animate-bounce"></div>
                <div className="absolute -bottom-2 -right-2 w-2 h-3 bg-coffee-brown rounded-full opacity-20 group-hover:animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 bg-coffee-brown hover:bg-coffee-dark transform hover:scale-105 transition-all duration-300">
                  <span className="mr-2">🛒</span>
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white transform hover:scale-105 transition-all duration-300">
                  View More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white px-8 transform hover:scale-105 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <span className="mr-2">👀</span>
            View All Products
          </Button>
        </div>
      </div>

      {/* Floating Coffee Aroma Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-t from-coffee-brown/20 to-transparent animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              bottom: `${10 + (i % 2) * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopPreview;
