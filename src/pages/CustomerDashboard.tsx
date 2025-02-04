import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, MapPin, Clock, Ticket, Settings, Bell, History, Star, MessageSquare } from "lucide-react";

export default function CustomerDashboard() {
  const { user } = useAuth();

  const features = [
    { icon: Ticket, title: "Book a Trip", description: "Search and book your next journey" },
    { icon: History, title: "Booking History", description: "View your past bookings" },
    { icon: Calendar, title: "Upcoming Trips", description: "Manage your scheduled trips" },
    { icon: CreditCard, title: "Payment Methods", description: "Manage your payment options" },
    { icon: MapPin, title: "Saved Routes", description: "Quick access to frequent routes" },
    { icon: Clock, title: "Real-time Updates", description: "Track your bus location" },
    { icon: Bell, title: "Notifications", description: "Manage your alerts" },
    { icon: Star, title: "Reviews", description: "Rate your trips" },
    { icon: MessageSquare, title: "Support", description: "Get help when needed" },
    { icon: Settings, title: "Settings", description: "Manage your preferences" }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start space-x-4">
              <feature.icon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}