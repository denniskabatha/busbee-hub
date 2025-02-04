import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-8">Book Your Journey With Confidence</h1>
          <p className="text-xl mb-12">Discover comfortable and affordable bus travel across the country</p>
          <Card className="p-6 max-w-2xl mx-auto bg-white/95">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="From" className="bg-white" />
              <Input placeholder="To" className="bg-white" />
              <Button onClick={() => navigate('/search')} className="bg-secondary hover:bg-secondary/90">
                Search Routes
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['New York - Boston', 'Los Angeles - San Francisco', 'Chicago - Detroit'].map((route) => (
              <Card key={route} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{route}</h3>
                <p className="text-gray-600 mb-4">From $29.99</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Search', description: 'Find your perfect route' },
              { title: 'Book', description: 'Secure your seat instantly' },
              { title: 'Travel', description: 'Enjoy your journey' }
            ].map((step) => (
              <div key={step.title} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              'Comfortable Seats',
              'Free WiFi',
              '24/7 Support',
              'Best Prices'
            ].map((benefit) => (
              <Card key={benefit} className="p-6 text-center">
                <h3 className="text-lg font-semibold">{benefit}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['New York', 'Los Angeles', 'Chicago'].map((city) => (
              <Card key={city} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{city}</h3>
                <Button variant="outline" className="w-full">Explore Routes</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <Button 
            onClick={() => navigate(user ? '/dashboard' : '/login')}
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-3"
          >
            {user ? 'Go to Dashboard' : 'Book Now'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;