import { Button } from "@/components/ui/button";
import { Calendar, ShoppingBag } from "lucide-react";
import heroImg from "@assets/IMG_2348 Copy_1764041005686.jpeg";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Tennis Is For Everyone
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-medium" data-testid="text-hero-subtitle">
          Personalized, inclusive tennis coaching in Durham, NC. Private lessons, group clinics, and retro-modern tennis apparel.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent text-accent-foreground backdrop-blur-sm shadow-xl text-base sm:text-lg px-8 py-6"
            data-testid="button-book-lesson-hero"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Lesson
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm shadow-xl text-base sm:text-lg px-8 py-6"
            data-testid="button-shop-hero"
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Explore Merchandise
          </Button>
        </div>
      </div>
    </section>
  );
}
