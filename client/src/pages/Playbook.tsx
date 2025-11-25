import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Trophy, LogIn } from "lucide-react";

export default function Playbook() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-secondary text-secondary-foreground mb-4">Coming Soon</Badge>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Your Personal Playbook
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Track your progress, manage your sessions, and level up your game with our comprehensive player dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {[
                {
                  icon: Calendar,
                  title: "Session Management",
                  description:
                    "View all your booked lessons and clinics in one place. Easily schedule, reschedule, or cancel sessions directly from your playbook.",
                  features: ["Upcoming sessions", "Booking history", "Calendar integration", "Automated reminders"],
                },
                {
                  icon: TrendingUp,
                  title: "Progress Tracking",
                  description:
                    "Monitor your improvement over time with detailed progress analytics. See your growth across key metrics and skills.",
                  features: ["Skill assessments", "Performance trends", "Improvement graphs", "Coach notes"],
                },
                {
                  icon: Trophy,
                  title: "Skill Levels",
                  description:
                    "Self-place your current skill level and track your advancement from Beginner through Advanced. Earn achievement badges.",
                  features: ["Beginner", "Intermediate", "Advanced", "Achievement badges"],
                },
                {
                  icon: LogIn,
                  title: "Personalized Dashboard",
                  description:
                    "A custom dashboard tailored to your tennis journey. Get training tips, drills, and personalized recommendations.",
                  features: ["Training tips", "Custom drills", "Coach messages", "Goal tracking"],
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="hover-elevate transition-all border-card-border" data-testid={`card-feature-${idx}`}>
                    <CardHeader className="gap-3">
                      <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Ready to Start Your Tennis Journey?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                    Create your free account today to access your playbook, track your progress, and unlock personalized coaching insights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary text-primary-foreground"
                      onClick={() => console.log("Sign up clicked")}
                      data-testid="button-sign-up"
                    >
                      Create Free Account
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => (window.location.href = "https://calendly.com/tennis919")}
                      data-testid="button-book-first"
                    >
                      Book Your First Lesson
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the playbook free?",
                  a: "Yes! Creating a Tennis 919 account and accessing your personal playbook is completely free.",
                },
                {
                  q: "Do I need an account to book a lesson?",
                  a: "No, you can book directly through Calendly without an account. However, having a playbook account helps you track progress and manage multiple bookings.",
                },
                {
                  q: "What is skill level placement?",
                  a: "Self-placement lets you indicate your current level (Beginner, Intermediate, or Advanced). You can update this as you progress!",
                },
                {
                  q: "When will the playbook launch?",
                  a: "We're working hard to launch the full playbook system soon! Sign up for updates on release dates.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border-card-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
