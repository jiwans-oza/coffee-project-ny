
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Academy = () => {
  const classes = [
    {
      id: "latte-art",
      name: "Latte Art Intensive",
      duration: "4 hours",
      price: "$125",
      level: "Beginner to Intermediate",
      description: "Master the art of creating beautiful latte art designs. Learn milk steaming techniques and practice various patterns.",
      image: "https://images.unsplash.com/photo-1485808191679-5760e38583c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      includes: ["Hands-on practice", "Take-home materials", "Certificate", "Light refreshments"]
    },
    {
      id: "sca-roasting",
      name: "SCA Roasting Classes",
      duration: "8 hours",
      price: "$299",
      level: "Intermediate to Advanced",
      description: "Professional roasting certification course following SCA standards. Learn the science behind coffee roasting.",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      includes: ["SCA Certification", "Roasting equipment access", "Course materials", "Lunch included"]
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship Masterclass",
      duration: "6 hours",
      price: "$199",
      level: "All Levels",
      description: "Learn how to start and run a successful coffee business. From concept to execution.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      includes: ["Business plan template", "Market analysis", "Networking session", "Resource guide"]
    }
  ];

  return (
    <section id="academy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            Coffee Project Academy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your coffee knowledge and skills with our expert-led classes and workshops
          </p>
        </div>

        <Tabs defaultValue="latte-art" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {classes.map((cls) => (
              <TabsTrigger key={cls.id} value={cls.id} className="text-sm md:text-base">
                {cls.name.split(' ')[0]} {cls.name.split(' ')[1]}
              </TabsTrigger>
            ))}
          </TabsList>

          {classes.map((cls, index) => (
            <TabsContent key={cls.id} value={cls.id} className="animate-fade-in">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={cls.image} 
                      alt={cls.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-serif text-coffee-dark mb-2">
                        {cls.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>Duration: {cls.duration}</span>
                        <span>Level: {cls.level}</span>
                        <span className="text-2xl font-bold text-coffee-brown">{cls.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-700 mb-6">{cls.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-coffee-dark mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {cls.includes.map((item) => (
                            <li key={item} className="flex items-center">
                              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-coffee-brown hover:bg-coffee-dark">
                        View Class Schedule
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Academy;
