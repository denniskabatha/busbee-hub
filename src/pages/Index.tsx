import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bus, Star, Shield, Clock, Phone, Mail, CreditCard, MapPin, Users, Heart, Calendar } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b)',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0,0,0,0.5)'
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Travel with Comfort</h1>
          <p className="text-xl mb-8">Book your bus tickets with ease</p>
          <Link to="/register">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`https://images.unsplash.com/photo-1472396961693-142e6e269027`} 
                  alt={`Route ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">Popular Route {i}</h3>
                  <p className="text-gray-600">Experience the journey</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Quality Service</h3>
              <p className="text-gray-600">Experience premium travel</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Safe Travel</h3>
              <p className="text-gray-600">Your safety is our priority</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">On-Time Service</h3>
              <p className="text-gray-600">Punctual and reliable</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Choose Route</h3>
              <p className="text-gray-600">Select your destination</p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Pick Date</h3>
              <p className="text-gray-600">Choose travel date</p>
            </div>
            <div className="text-center">
              <CreditCard className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Book Ticket</h3>
              <p className="text-gray-600">Secure payment</p>
            </div>
            <div className="text-center">
              <Bus className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Travel</h3>
              <p className="text-gray-600">Enjoy your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <Star className="h-6 w-6 text-yellow-500 mb-4" />
                <p className="text-gray-600 mb-4">"Great service, comfortable journey!"</p>
                <div className="flex items-center">
                  <Users className="h-10 w-10 text-gray-400 mr-4" />
                  <div>
                    <h4 className="font-bold">Customer {i}</h4>
                    <p className="text-gray-600">Regular Traveler</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
            <p className="mb-8">Get the best experience with our mobile app</p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary">App Store</Button>
              <Button variant="secondary">Play Store</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">1-800-BUS-BOOK</p>
            </div>
            <div className="text-center">
              <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">support@busbook.com</p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Bus Street, City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates and offers</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border rounded"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <Heart className="h-6 w-6 mr-2" />
            <p>Made with love for comfortable travel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
