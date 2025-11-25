import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-card-border" data-testid="card-product">
      <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-muted/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid="img-product"
        />
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full" data-testid="badge-category">
              {category}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-4">
        <div className="w-full">
          <h3 className="font-heading font-semibold text-base text-foreground mb-1" data-testid="text-product-name">
            {name}
          </h3>
          <p className="font-bold text-lg text-primary" data-testid="text-product-price">
            ${price}
          </p>
        </div>
        <Button
          className="w-full bg-accent hover:bg-accent text-accent-foreground"
          size="sm"
          onClick={() => console.log(`Add to cart: ${name}`)}
          data-testid="button-add-to-cart"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
