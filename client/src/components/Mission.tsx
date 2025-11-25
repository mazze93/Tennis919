import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import logoImg from "@assets/logo.jpg";

export default function Mission() {
  const values = [
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "Tennis for all ages, backgrounds, and skill levels",
    },
    {
      icon: Users,
      title: "LGBTQ+ Founded",
      description: "Proudly founded by Matthew Frazer and his husband",
    },
    {
      icon: Award,
      title: "Expert Coaching",
      description: "Personalized instruction tailored to your goals",
    },
    {
      icon: Sparkles,
      title: "Accessible Pricing",
      description: "Flexible payment options and community discounts",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logoImg} alt="Tennis 919 Logo" className="h-16 w-16 rounded-full" data-testid="img-logo" />
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground" data-testid="text-mission-title">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-sm mt-1">Durham's Premiere Inclusive Tennis Organization</p>
              </div>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-mission-description">
              At Tennis 919, we're passionate about making tennis accessible and enjoyable for individuals of all ages, backgrounds, and skill
              levels. Founded by Matthew Frazer and his husband, we prioritize inclusivity, community, and personalized coaching.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              As a locally owned LGBTQ+ organization, we provide flexible payment options, community discounts, and seven-day availability,
              ensuring tennis is accessible to everyone in Durham, NC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300 border-card-border"
                  data-testid={`card-value-${index}`}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
