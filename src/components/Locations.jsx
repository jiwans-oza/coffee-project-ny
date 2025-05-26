
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Locations = () => {
  const locations = [
    {
      name: "East Village",
      address: "239 E 5th St, Manhattan",
      neighborhood: "East Village",
      hours: "7am - 6pm daily",
      features: ["Wifi", "Outdoor Seating", "Live Music"]
    },
    {
      name: "Long Island City",
      address: "21-10 51st Ave, Long Island City",
      neighborhood: "Queens",
      hours: "8am - 6pm daily",
      features: ["Parking Available", "Large Space", "Events"]
    },
    {
      name: "Chelsea",
      address: "155 7th Ave, Chelsea",
      neighborhood: "Manhattan",
      hours: "7am - 6pm daily",
      features: ["Roastery Tours", "Cupping Room", "Retail"]
    },
    {
      name: "Brooklyn",
      address: "78 Rockwell Pl, Brooklyn",
      neighborhood: "Fort Greene",
      hours: "8am - 6pm daily",
      features: ["Community Space", "Art Gallery", "Workshops"]
    }
  ];

  return (
    <section id="locations" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            Our NYC Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit one of our carefully designed coffee spaces across New York City
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <Card 
              key={location.name}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-coffee-brown rounded-full flex items-center justify-center mb-4 group-hover:animate-float">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <CardTitle className="text-xl font-serif text-coffee-dark">{location.name}</CardTitle>
                <p className="text-sm text-coffee-brown font-medium">{location.neighborhood}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Hours</p>
                  <p className="text-gray-600 text-sm">{location.hours}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-2">Features</p>
                  <div className="flex flex-wrap gap-1">
                    {location.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2 py-1 bg-coffee-light/20 text-coffee-dark text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-coffee-dark mb-4">Store Hours</h3>
            <p className="text-lg text-gray-700 mb-2">7 days a week, 8am–6pm</p>
            <p className="text-gray-600">Some locations may have extended hours. Please call ahead to confirm.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
