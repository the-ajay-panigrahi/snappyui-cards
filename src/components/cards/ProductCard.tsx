import React, { useState } from "react";
import CardBase from "../CardBase";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({
  imageSrc,
  imageAlt,
  saleText,
  isFavoriteInitial,
  productName,
  productPrice,
  productOldPrice,
  productDiscount,
  productDescription,
  productRating,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(isFavoriteInitial);

  return (
    <CardBase
      variant="default"
      className="w-full max-w-sm overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div className="absolute top-4 left-4">
          <Badge className="bg-red-500 hover:bg-red-600 text-white">
            {saleText}
          </Badge>
        </div>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
            isFavorite
              ? "bg-red-100 text-red-500 dark:bg-red-900/30 dark:text-red-400"
              : "bg-white/80 text-slate-600 dark:bg-slate-800/80 dark:text-slate-300 hover:bg-white hover:dark:bg-slate-800"
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-transform duration-300 ${
              isFavorite ? "fill-current scale-110" : ""
            } ${isHovered && !isFavorite ? "animate-pulse" : ""}`}
          />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i <= productRating
                  ? "text-yellow-400 fill-current"
                  : "text-slate-300 dark:text-slate-600"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({productRating * 10})
          </span>
        </div>

        <h3 className="text-lg font-bold mb-1">{productName}</h3>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            {productPrice}
          </span>
          <span className="text-sm line-through text-muted-foreground">
            {productOldPrice}
          </span>
          <span className="text-xs font-medium text-green-600 dark:text-green-400">
            {productDiscount}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-5">
          {productDescription}
        </p>

        <div className="flex gap-2">
          <Button className="flex-1 gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 relative overflow-hidden group/btn">
            <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            <span>Add to Cart</span>
            {isHovered && (
              <span className="absolute inset-0 w-full h-full bg-white/10 animate-pulse"></span>
            )}
          </Button>
        </div>
      </div>
    </CardBase>
  );
};

export default ProductCard;
