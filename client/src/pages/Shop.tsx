import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import windbreaker from "@assets/generated_images/retro_forest_green_windbreaker.png";
import polo from "@assets/generated_images/terracotta_tennis_polo_shirt.png";
import sweatpants from "@assets/generated_images/coral_tennis_sweatpants.png";
import beanie from "@assets/generated_images/mint_tennis_beanie_hat.png";

export default function Shop() {
  // TODO: Replace with real product data from backend API
  const products = [
    {
      id: 1,
      name: "Forest Green Windbreaker",
      price: 89,
      image: windbreaker,
      category: "Jackets",
      color: "Forest Green",
      description: "Retro-inspired windbreaker with modern performance fabric. Perfect for warmups and cool evenings.",
    },
    {
      id: 2,
      name: "Terracotta Polo Shirt",
      price: 45,
      image: polo,
      category: "Tops",
      color: "Terracotta",
      description: "Breathable performance polo with soft mint trim. Classic tennis style meets modern comfort.",
    },
    {
      id: 3,
      name: "Coral Tennis Sweatpants",
      price: 65,
      image: sweatpants,
      category: "Bottoms",
      color: "Coral",
      description: "Warm, comfortable sweatpants for practice and casual wear. Features forest green side stripe.",
    },
    {
      id: 4,
      name: "Soft Mint Beanie",
      price: 28,
      image: beanie,
      category: "Accessories",
      color: "Soft Mint",
      description: "Cozy beanie to keep warm during winter training. Embroidered tennis ball logo.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Winter Collection 2025</Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Winter Tennis Apparel
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Retro-inspired, modern performance. Stay warm, look fresh, and play your best with our exclusive winter collection.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-card-border flex flex-col"
                  data-testid={`card-product-${product.id}`}
                >
                  <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-muted/20">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-testid="img-product"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.category}</Badge>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-3 p-4 flex-1 flex-col justify-between">
                    <div className="w-full">
                      <h3 className="font-heading font-semibold text-base text-foreground mb-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{product.color}</p>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">{product.description}</p>
                      <p className="font-bold text-lg text-primary">${product.price}</p>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent text-accent-foreground" size="sm" data-testid="button-add-to-cart">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Coming Soon Section */}
            <Card className="border-2 border-dashed border-card-border">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">More Coming Soon!</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're constantly expanding our collection with new apparel, accessories, and equipment. Sign up for our newsletter to be the first to know
                  about new releases and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-md border border-card-border bg-background focus:outline-none focus:ring-2 focus:ring-primary flex-1 sm:flex-none"
                    data-testid="input-notify-email"
                  />
                  <Button className="bg-primary hover:bg-primary text-primary-foreground" data-testid="button-notify-me">
                    Notify Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8 text-center">Why Choose Tennis 919 Apparel?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Inclusive Sizes",
                  description: "Quality apparel designed to fit diverse body types and preferences.",
                },
                {
                  title: "Community-Focused",
                  description: "A portion of proceeds supports our community programs and group clinics.",
                },
                {
                  title: "Retro-Modern Style",
                  description: "Vintage tennis vibes with modern performance fabrics and cuts.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
