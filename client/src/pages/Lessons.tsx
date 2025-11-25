import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, User, Heart, Zap } from "lucide-react";

export default function Lessons() {
  const lessons = [
    {
      id: "privates",
      icon: User,
      title: "Private Lessons",
      description: "One-on-one personalized coaching tailored to your specific goals and skill level.",
      price: "$60-$80",
      duration: "per hour",
      features: [
        "Customized training plan",
        "Video analysis of your technique",
        "Flexible scheduling (7 days/week)",
        "All skill levels welcome",
        "Focus on your weak areas",
      ],
      calendlyLink: "https://calendly.com/tennis919/privates",
      color: "bg-primary",
    },
    {
      id: "duos",
      icon: Users,
      title: "Duos Coaching",
      description: "Perfect for partners, friends, or family members who want to improve together.",
      price: "$40-$50",
      duration: "per person/hour",
      features: [
        "Train with a partner",
        "Doubles strategy coaching",
        "Team building focus",
        "Shared progress tracking",
        "Social, supportive environment",
      ],
      calendlyLink: "https://calendly.com/tennis919/duos",
      popular: true,
      color: "bg-secondary",
    },
    {
      id: "beginner",
      icon: Heart,
      title: "Beginner Clinic",
      description: "Group sessions perfect for those starting their tennis journey.",
      price: "$20",
      duration: "per session",
      features: [
        "Fundamentals & footwork",
        "Racket grip & stance",
        "Basic forehand/backhand",
        "Fun, welcoming group",
        "Every week at Rock Quarry Park",
      ],
      calendlyLink: "https://calendly.com/tennis919/beginner-clinic",
      color: "bg-accent",
    },
    {
      id: "intermediate",
      icon: Zap,
      title: "Intermediate Clinic",
      description: "Build on your fundamentals with stroke refinement and strategy.",
      price: "$20",
      duration: "per session",
      features: [
        "Stroke refinement",
        "Serve & volley technique",
        "Game strategy & tactics",
        "Competitive drills",
        "Weekly group sessions",
      ],
      calendlyLink: "https://calendly.com/tennis919/intermediate",
      color: "bg-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Our Lessons & Clinics
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the coaching style that fits your goals, schedule, and budget. All skill levels welcome!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {lessons.map((lesson) => {
                const Icon = lesson.icon;
                return (
                  <Card
                    key={lesson.id}
                    id={lesson.id}
                    className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 border-card-border overflow-hidden relative"
                    data-testid={`card-lesson-${lesson.id}`}
                  >
                    {lesson.popular && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground z-10">
                        Most Popular
                      </Badge>
                    )}
                    <div className={`${lesson.color} h-1 w-full`} />
                    <CardHeader className="gap-3 pb-4">
                      <div className={`${lesson.color} rounded-lg w-12 h-12 flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="font-heading text-2xl">{lesson.title}</CardTitle>
                      <CardDescription className="text-base text-muted-foreground">{lesson.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <div className="font-heading font-bold text-3xl text-primary">{lesson.price}</div>
                        <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground mb-3">What's Included:</p>
                        {lesson.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className={`${lesson.color} rounded-full w-2 h-2 mt-1.5 flex-shrink-0`} />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full text-white"
                        style={{
                          backgroundColor: lesson.color === "bg-primary" ? "hsl(152 32% 28%)" : lesson.color === "bg-secondary" ? "hsl(27 87% 67%)" : "hsl(9 75% 61%)",
                        }}
                        onClick={() => (window.location.href = lesson.calendlyLink)}
                        data-testid={`button-book-${lesson.id}`}
                      >
                        Schedule Now →
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-foreground rounded-lg p-8 md:p-12 text-background text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Can't Find the Right Fit?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-background/95">
                Contact us directly to discuss custom coaching packages, group rates, or special requests.
              </p>
              <Button
                variant="outline"
                className="border-background/50 text-background hover:bg-background/20"
                onClick={() => (window.location.href = "https://calendly.com/tennis919")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
