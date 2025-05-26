
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Subscriptions = () => {
  const plans = [
    {
      name: "Roaster's Choice",
      frequency: "Bi-weekly",
      price: "$24.99",
      description: "Let our experts surprise you with their favorite picks",
      features: ["2 bags per delivery", "Free shipping", "Flexible scheduling", "Cancel anytime"],
      badge: "Most Popular"
    },
    {
      name: "Single Origin Explorer",
      frequency: "Monthly",
      price: "$19.99",
      description: "Discover unique single origin coffees from around the world",
      features: ["1 premium bag", "Origin story included", "Tasting notes", "Free shipping"],
      badge: null
    },
    {
      name: "Espresso Lovers",
      frequency: "Monthly",
      price: "$22.99",
      description: "Perfect blends crafted specifically for espresso brewing",
      features: ["1 espresso blend", "Brewing guide", "Free shipping", "Expert curation"],
      badge: "New"
    }
  ];

  return (
    <section id="subscriptions" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4">
            Never run out of coffee
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Subscribe to our coffee delivery service and enjoy fresh, expertly roasted coffee delivered to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                plan.badge === "Most Popular" ? "ring-2 ring-coffee-brown scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coffee-brown hover:bg-coffee-dark">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-coffee-dark">{plan.name}</CardTitle>
                <p className="text-gray-600">{plan.frequency}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-coffee-brown">{plan.price}</span>
                  <span className="text-gray-600">/{plan.frequency.toLowerCase()}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-coffee-brown hover:bg-coffee-dark">
                  Start Subscription
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
