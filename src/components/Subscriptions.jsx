
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Subscriptions = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: "Roaster's Choice",
      frequency: "Bi-weekly",
      price: "$24.99",
      description: "Let our experts surprise you with their favorite picks",
      features: ["2 bags per delivery", "Free shipping", "Flexible scheduling", "Cancel anytime"],
      badge: "Most Popular",
      emoji: "⭐",
      color: "from-amber-400 to-orange-500"
    },
    {
      name: "Single Origin Explorer",
      frequency: "Monthly",
      price: "$19.99",
      description: "Discover unique single origin coffees from around the world",
      features: ["1 premium bag", "Origin story included", "Tasting notes", "Free shipping"],
      badge: null,
      emoji: "🌍",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Espresso Lovers",
      frequency: "Monthly",
      price: "$22.99",
      description: "Perfect blends crafted specifically for espresso brewing",
      features: ["1 espresso blend", "Brewing guide", "Free shipping", "Expert curation"],
      badge: "New",
      emoji: "☕",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="subscriptions" className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Parallax Background Coffee Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 text-9xl opacity-5"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        >
          ☕
        </div>
        <div 
          className="absolute top-40 right-10 text-7xl opacity-5"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${-scrollY * 0.03}deg)` }}
        >
          📦
        </div>
        <div 
          className="absolute bottom-32 left-1/3 text-8xl opacity-5"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          🚚
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4 animate-fade-in">
            <span className="inline-block animate-bounce mr-4">📦</span>
            Never run out of coffee
            <span className="inline-block animate-bounce ml-4">☕</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Subscribe to our coffee delivery service and enjoy fresh, expertly roasted coffee delivered to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 animate-fade-in overflow-hidden ${
                plan.badge === "Most Popular" ? "ring-2 ring-coffee-brown scale-105" : ""
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: `translateY(${scrollY * 0.03 * (index + 1)}px)`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Floating Coffee Beans */}
              <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-3 bg-coffee-brown rounded-full animate-pulse"
                    style={{
                      left: `${i * 6}px`,
                      top: `${i * 8}px`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>

              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coffee-brown hover:bg-coffee-dark animate-pulse z-10">
                  <span className="mr-1">{plan.emoji}</span>
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-4xl mb-2 animate-bounce group-hover:scale-110 transition-transform duration-300">
                  {plan.emoji}
                </div>
                <CardTitle className="text-2xl font-serif text-coffee-dark group-hover:text-coffee-brown transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <p className="text-gray-600">{plan.frequency}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-coffee-brown animate-pulse">{plan.price}</span>
                  <span className="text-gray-600">/{plan.frequency.toLowerCase()}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-gray-600 text-center">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center animate-fade-in"
                      style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                    >
                      <svg className="w-4 h-4 text-green-500 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-coffee-brown hover:bg-coffee-dark transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                  <span className="mr-2">🚀</span>
                  Start Subscription
                </Button>
              </CardContent>

              {/* Steam Animation */}
              <div className="absolute top-16 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-12 bg-gradient-to-t from-coffee-brown/40 to-transparent rounded-full animate-pulse"
                    style={{
                      left: `${i * 3}px`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>

              {/* Coffee Drip Animation */}
              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-1 h-8 bg-coffee-brown rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-coffee-brown rounded-full mt-1 animate-bounce"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Animated Coffee Delivery Truck */}
        <div className="mt-16 text-center relative">
          <div className="inline-block text-6xl animate-bounce mb-4">
            🚚
          </div>
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '1s' }}>
            Free delivery on all subscription orders
          </p>
        </div>
      </div>

      {/* Coffee Bean Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-lg opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            🫘
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;
