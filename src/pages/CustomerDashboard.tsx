import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { 
  Ticket, 
  History, 
  Calendar, 
  CreditCard, 
  MapPin, 
  Clock, 
  Bell, 
  Star, 
  MessageSquare, 
  Settings 
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

// Mock API calls - replace with actual API calls when backend is ready
const fetchBookings = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [];
};

const fetchNotifications = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [];
};

export default function CustomerDashboard() {
  const { user } = useAuth();

  // Fetch bookings data
  const { data: bookings, isLoading: isLoadingBookings } = useQuery({
    queryKey: ['bookings', user?.id],
    queryFn: fetchBookings,
  });

  // Fetch notifications
  const { data: notifications, isLoading: isLoadingNotifications } = useQuery({
    queryKey: ['notifications', user?.id],
    queryFn: fetchNotifications,
  });

  // Feature cards with their respective actions
  const features = [
    { 
      icon: Ticket, 
      title: "Book a Trip", 
      description: "Search and book your next journey",
      action: () => {
        toast.info("Booking feature coming soon!");
      }
    },
    { 
      icon: History, 
      title: "Booking History", 
      description: "View your past bookings",
      action: () => {
        if (isLoadingBookings) {
          toast.info("Loading your bookings...");
        } else {
          toast.info(`You have ${bookings?.length || 0} past bookings`);
        }
      }
    },
    { 
      icon: Calendar, 
      title: "Upcoming Trips", 
      description: "Manage your scheduled trips",
      action: () => {
        toast.info("No upcoming trips found");
      }
    },
    { 
      icon: CreditCard, 
      title: "Payment Methods", 
      description: "Manage your payment options",
      action: () => {
        toast.info("Payment management coming soon");
      }
    },
    { 
      icon: MapPin, 
      title: "Saved Routes", 
      description: "Quick access to frequent routes",
      action: () => {
        toast.info("Route saving feature coming soon");
      }
    },
    { 
      icon: Clock, 
      title: "Real-time Updates", 
      description: "Track your bus location",
      action: () => {
        toast.info("Live tracking coming soon");
      }
    },
    { 
      icon: Bell, 
      title: "Notifications", 
      description: "Manage your alerts",
      action: () => {
        if (isLoadingNotifications) {
          toast.info("Loading notifications...");
        } else {
          toast.info(`You have ${notifications?.length || 0} new notifications`);
        }
      }
    },
    { 
      icon: Star, 
      title: "Reviews", 
      description: "Rate your trips",
      action: () => {
        toast.info("Review system coming soon");
      }
    },
    { 
      icon: MessageSquare, 
      title: "Support", 
      description: "Get help when needed",
      action: () => {
        toast.info("Support chat coming soon");
      }
    },
    { 
      icon: Settings, 
      title: "Settings", 
      description: "Manage your preferences",
      action: () => {
        toast.info("Settings page coming soon");
      }
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={feature.action}
          >
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