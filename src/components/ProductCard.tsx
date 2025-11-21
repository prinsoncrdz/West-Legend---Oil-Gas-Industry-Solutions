import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, category, description, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-none shadow-industrial hover:shadow-hover transition-smooth">
      <div className="relative h-64 overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-smooth"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80 hover:bg-transparent font-semibold">
          Learn More
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
