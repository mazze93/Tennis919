import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Zap } from "lucide-react";
import windbreaker from "@assets/generated_images/retro_forest_green_windbreaker.png";
import polo from "@assets/generated_images/terracotta_tennis_polo_shirt.png";
import sweatpants from "@assets/generated_images/coral_tennis_sweatpants.png";
import beanie from "@assets/generated_images/mint_tennis_beanie_hat.png";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Teal Performance Windbreaker",
      price: 99,
      image: windbreaker,
      category: "Outerwear",
      color: "Teal",
      description: "Water-resistant windbreaker with navy colorblock and gold accents. Perfect for cold-weather training.",
      specs: ["Water-resistant shell", "Breathable lining", "Reflective trim", "Zippered pockets"],
    },
    {
      id: 2,
      name: "Navy Premium Polo",
      price: 55,
      image: polo,
      category: "Tops",
      color: "Navy",
      description: "Moisture-wicking performance polo with cream trim. Essential for every tennis player.",
      specs: ["Moisture-wicking", "UV protection", "Stretchy fit", "Temperature regulation"],
    },
    {
      id: 3,
      name: "Cream Tennis Sweatpants",
      price: 75,
      image: sweatpants,
      category: "Bottoms",
      color: "Cream",
      description: "Comfortable, warm sweatpants with navy side stripe. Great for warmups and casual wear.",
      specs: ["Warm fleece lining", "Tapered fit", "Zippered ankles", "Tech-friendly pockets"],
    },
    {
      id: 4,
      name: "Teal Performance Beanie",
      price: 35,
      image: beanie,
      category: "Accessories",
      color: "Teal",
      description: "Cozy beanie to keep warm during winter training. Embroidered Tennis 919 logo.",
      specs: ["Thermal knit", "Embroidered logo", "One size fits all", "Premium materials"],
    },
    {
      id: 5,
      name: "Navy Crew Sweatshirt",
      price: 65,
      image: polo,
      category: "Tops",
      color: "Navy",
      description: "Classic crew neck sweatshirt with teal accent stripe. Perfect for pre-match warmups.",
      specs: ["Heavy-weight fabric", "Embroidered crest", "Kangaroo pocket", "Comfortable fit"],
    },
    {
      id: 6,
      name: "Teal & Cream Tracksuit",
      price: 145,
      image: windbreaker,
      category: "Sets",
      color: "Teal/Cream",
      description: "Complete matching set with jacket and pants. Professional tournament-ready styling.",
      specs: ["Matching set", "Tournament approved", "Premium fabrics", "Professional look"],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Winter Hero Section */}
        <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden flex items-center justify-center" data-testid="section-winter-hero">
          {/* Background gradient - winter palette */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-blue-900 to-slate-800" />
          
          {/* Decorative winter pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div className="text-white">
                <Badge className="bg-teal-400/80 text-slate-900 mb-6 text-sm font-semibold" data-testid="badge-season">
                  Winter 2025 Collection
                </Badge>
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" data-testid="text-shop-hero-title">
                  Winter Tennis Performance
                </h1>
                <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed" data-testid="text-shop-hero-subtitle">
                  Stay warm, comfortable, and competitive. Our winter collection combines retro aesthetics with modern performance technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Premium fabrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Tournament-ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400" />
                    <span className="text-sm text-blue-100">Inclusive sizing</span>
                  </div>
                </div>
              </div>

              {/* Right: Feature Highlight */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <div className="space-y-4">
                  {[
                    {
                      icon: "🧊",
                      title: "Cold Weather Tech",
                      description: "Moisture-wicking & insulated fabrics",
                    },
                    {
                      icon: "✨",
                      title: "Modern Design",
                      description: "Retro vibes with contemporary style",
                    },
                    {
                      icon: "🎾",
                      title: "Performance Tested",
                      description: "Designed for serious players",
                    },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                      <div>
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                        <p className="text-blue-100 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4" data-testid="text-products-title">
                Winter Essentials
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Build your complete winter tennis wardrobe with our curated collection of performance apparel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 border-card-border flex flex-col"
                  data-testid={`card-product-${product.id}`}
                >
                  {/* Image Container */}
                  <CardContent className="p-0 relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-testid="img-product"
                    />
                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-teal-500 text-white font-semibold">{product.category}</Badge>
                    </div>
                    {/* Price Badge - Floating */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <p className="font-heading font-bold text-lg text-foreground">${product.price}</p>
                    </div>
                  </CardContent>

                  {/* Product Info */}
                  <CardFooter className="flex flex-col items-start gap-4 p-5 flex-1 flex-col justify-between">
                    <div className="w-full">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-heading font-bold text-base text-foreground">{product.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium mb-3">{product.color}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                      
                      {/* Specs */}
                      <div className="space-y-1 mb-4">
                        {product.specs.slice(0, 2).map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-teal-500" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold"
                      size="sm"
                      data-testid="button-add-to-cart"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Collection Info Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: "🌡️",
                  title: "Winter-Ready",
                  description: "Engineered for cold weather performance. Water-resistant shells, thermal lining, and insulated designs.",
                },
                {
                  icon: "♻️",
                  title: "Sustainable",
                  description: "Made with eco-friendly, recycled materials. Performance without compromise to the planet.",
                },
                {
                  icon: "🏆",
                  title: "Tournament Approved",
                  description: "Professional-grade apparel trusted by competitive players. Ready for match day.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Size Guide & Returns */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">Sizing & Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Size Guide",
                  points: [
                    "All items available in XS - 3XL",
                    "True-to-size athletic fit",
                    "See detailed measurements in product pages",
                    "Free exchanges for sizing issues",
                  ],
                },
                {
                  title: "Shipping & Returns",
                  points: [
                    "Free shipping on orders over $75",
                    "30-day return policy",
                    "Easy exchanges and returns",
                    "Fast processing (2-3 business days)",
                  ],
                },
              ].map((section, idx) => (
                <Card key={idx} className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Zap className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Upgrade Your Game?</h2>
            <p className="text-lg mb-8 text-teal-50">
              Shop our winter collection today and step onto the court with confidence.
            </p>
            <Button
              onClick={() => console.log("Continue shopping")}
              className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3"
              data-testid="button-shop-cta"
            >
              Browse Complete Collection
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
