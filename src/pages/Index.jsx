
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ShopPreview from '../components/ShopPreview';
import Subscriptions from '../components/Subscriptions';
import Academy from '../components/Academy';
import Locations from '../components/Locations';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      <ShopPreview />
      <Subscriptions />
      <Academy />
      <Locations />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
