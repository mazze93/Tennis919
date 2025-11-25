import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function Testimonials() {
  // TODO: Replace with real testimonial data from backend
  const testimonials = [
    {
      id: 1,
      name: "Avery",
      quote: "Matthew's lessons have really helped me grow as a player. Through a caring and helpful environment, I've been able to strengthen my abilities as well as learn more about the game.",
      rating: 5,
      initials: "A",
    },
    {
      id: 2,
      name: "Ezra and Marlee M.",
      quote: "We have greatly enjoyed our lessons with Matt. He has helped us grow in all parts of the game with varied drills and targeted advice. He quickly identifies areas for improvement and gives excellent insights while also making the lessons fun.",
      rating: 5,
      initials: "EM",
    },
    {
      id: 3,
      name: "Madison",
      quote: "10/10 would recommend Matt as tennis coach to take private lessons from! He has been one of the greatest coaches I have had in my adult tennis career. I definitely recommend him for advanced level players (and beginners too!)",
      rating: 5,
      initials: "M",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-chart-5/20" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4" data-testid="text-testimonials-title">
            What Our Players Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our inclusive tennis community and experience the difference personalized coaching makes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-card-border hover-elevate transition-all duration-300" data-testid={`card-testimonial-${testimonial.id}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic" data-testid="text-testimonial-quote">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground" data-testid="text-testimonial-name">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Tennis 919 Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
