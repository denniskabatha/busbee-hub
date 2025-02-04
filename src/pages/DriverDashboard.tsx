import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Route, Users, Calendar, Clock, MapPin, MessageSquare } from "lucide-react";

export default function DriverDashboard() {
  const { user } = useAuth();

  const features = [
    { icon: Route, title: "Today's Route", description: "View your assigned route" },
    { icon: Users, title: "Passenger List", description: "See booked passengers" },
    { icon: Calendar, title: "Schedule", description: "View upcoming assignments" },
    { icon: Clock, title: "Time Log", description: "Track your working hours" },
    { icon: MapPin, title: "Navigation", description: "Get route directions" },
    { icon: Route, title: "Fuel Log", description: "Record fuel consumption" },
    { icon: Clock, title: "Maintenance", description: "Report vehicle issues" },
    { icon: Route, title: "Reports", description: "Submit daily reports" },
    { icon: Clock, title: "Alerts", description: "Important notifications" },
    { icon: MessageSquare, title: "Communication", description: "Contact dispatch" }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome Driver {user?.name}</h1>
      
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