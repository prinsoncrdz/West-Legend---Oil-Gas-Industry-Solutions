import { LucideIcon, Drill, Settings, Wrench, Truck, Leaf, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

const iconMap: Record<string, LucideIcon> = {
  Drill,
  Settings,
  Wrench,
  Truck,
  Leaf,
  Shield,
};

const ServiceCard = ({ title, icon, description }: ServiceCardProps) => {
  const Icon = iconMap[icon] || Settings;

  return (
    <Card className="group p-8 border-none shadow-industrial hover:shadow-hover transition-smooth hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-smooth">
        <Icon className="text-secondary group-hover:text-secondary-foreground" size={32} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-smooth">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default ServiceCard;
