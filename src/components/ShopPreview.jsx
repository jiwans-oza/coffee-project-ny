
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
      fallbackImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "The Crowd Pleaser",
      description: "Smooth and balanced, perfect for everyday drinking",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Kenya - Nyeri Single Origin",
      description: "Bright acidity with wine-like complexity and black currant notes",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1587734195503-904fca47e9d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Guatemala - Huehuetenango",
      description: "Full-bodied with chocolate undertones and a smooth finish",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Ethiopia - Yirgacheffe",
      description: "Floral and tea-like with bright citrus notes",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1606791422814-bc26eb888124?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <section id="shop" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 transition-all duration-500 ease-out">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-4 transition-all duration-500 ease-out">
            Featured Coffee
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-500 ease-out">
            Discover our carefully curated selection of premium coffees, roasted to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className="group hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => handleImageError(e, product.fallbackImage)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 ease-out"></div>
              </div>
              
              <CardContent className="p-6 relative transition-all duration-300 ease-out">
                <h3 className="text-xl font-serif font-semibold text-coffee-dark mb-2 group-hover:text-coffee-brown transition-colors duration-300 ease-out">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 transition-colors duration-300 ease-out">{product.description}</p>
                <p className="text-2xl font-bold text-coffee-brown transition-all duration-300 ease-out">{product.price}</p>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button className="flex-1 bg-coffee-brown hover:bg-coffee-dark transform hover:scale-105 transition-all duration-300 ease-out">
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1 border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white transform hover:scale-105 transition-all duration-300 ease-out">
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
            className="border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white px-8 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;
