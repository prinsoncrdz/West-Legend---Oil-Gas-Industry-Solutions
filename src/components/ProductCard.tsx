import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Static routing

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string; // static details page link
}

const ProductCard = ({
  title,
  category,
  description,
  image,
  link = "/product-details", // default static page
}: ProductCardProps) => {
  return (
    <Link to={link} className="block"> {/* Whole card clickable */}
      <Card
        className="
          group relative overflow-hidden 
          bg-[#0F1217] border border-[#22252E] 
          shadow-md hover:shadow-2xl
          rounded-xl transition-all duration-300
          hover:-translate-y-1 hover:border-primary/60
          cursor-pointer
        "
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image || "/images/no-image.jpg"} // fallback image
            alt={title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="
                text-[10px] font-semibold uppercase
                bg-primary text-black
                px-2 py-1 rounded-md 
                tracking-wide shadow-md
              "
            >
              {category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div
            className="
              absolute inset-0 bg-gradient-to-t 
              from-black/80 via-transparent to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "
          ></div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3
            className="
              text-lg font-bold mb-2 
              text-white group-hover:text-primary 
              transition-colors
            "
          >
            {title}
          </h3>

          <p
            className="
              text-sm text-gray-400 
              mb-5 line-clamp-3 leading-relaxed
            "
          >
            {description}
          </p>

          {/* CTA */}
          <div className="flex items-center font-semibold text-primary">
            View Details
            <ArrowRight
              className="
                ml-2 w-4 h-4 
                transition-transform duration-300 
                group-hover:translate-x-1
              "
            />
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
