
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            Our Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-serif font-semibold text-coffee-dark">
              Founded by Passion, Driven by Purpose
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Coffee Project NY was born from the shared passion of <strong>Chi Sum Ngai</strong> and <strong>Kaleena Teoh</strong>, 
              two coffee enthusiasts who believed that exceptional coffee could bring people together and create meaningful connections.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              What started as a small roastery in New York City has grown into a community of coffee lovers, 
              educators, and entrepreneurs, all united by our love for the perfect cup.
            </p>
            <div className="bg-coffee-light/10 p-6 rounded-lg border-l-4 border-coffee-brown">
              <h4 className="text-xl font-serif font-semibold text-coffee-dark mb-3">Our Mission</h4>
              <p className="text-lg text-gray-700 italic">
                "Our mission is to improve quality of life throughout the coffee supply chain."
              </p>
            </div>
            <p className="text-gray-700">
              From supporting farmers at origin to educating consumers about quality coffee, 
              we're committed to making a positive impact at every step of the coffee journey.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Coffee roasting process"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-coffee-light/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-coffee-brown mb-2">50+</h4>
                  <p className="text-gray-700">Coffee Origins</p>
                </CardContent>
              </Card>
              <Card className="bg-coffee-light/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-coffee-brown mb-2">10k+</h4>
                  <p className="text-gray-700">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="bg-coffee-light/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-coffee-brown mb-2">4</h4>
                  <p className="text-gray-700">NYC Locations</p>
                </CardContent>
              </Card>
              <Card className="bg-coffee-light/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-coffee-brown mb-2">100+</h4>
                  <p className="text-gray-700">Classes Taught</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
