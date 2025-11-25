import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, MapPin } from "lucide-react";
import mattImg from "@assets/matt-tennis919-nametag_1764040605467.png";
import groupImg from "@assets/IMG_2348_1764041005686.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About Tennis 919
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Tennis 919 is Durham's premiere inclusive tennis organization, founded by Matthew Frazer and his husband with a mission to make tennis
              accessible, enjoyable, and welcoming for everyone.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Meet Our Founders</h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Matthew Frazer and his husband founded Tennis 919 with a simple belief: tennis is for everyone. With years of coaching
                  experience and a passion for the sport, they created an environment where players of all ages, backgrounds, and skill levels
                  feel welcomed and supported.
                </p>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  As a proudly LGBTQ+-owned and operated organization, Tennis 919 prioritizes inclusivity, community building, and accessible
                  pricing. We believe that tennis shouldn't be limited by geography, ability, or circumstance.
                </p>
                <p className="text-base text-muted-foreground">
                  Matthew's personalized coaching style combines expert technique instruction with encouragement and a genuine love for the game.
                </p>
              </div>
              <img
                src={mattImg}
                alt="Matthew Frazer, Head Coach"
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Community */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <img
                src={groupImg}
                alt="Tennis 919 Community"
                className="rounded-lg w-full h-auto object-cover shadow-lg order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Our Community</h2>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  Tennis 919 serves a diverse community of players in Durham, NC. From beginners picking up a racket for the first time to
                  advanced competitors refining their game, our clinics and private lessons bring people together around a shared love of tennis.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Our students consistently report improved confidence, better technique, and most importantly—more fun on the court.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Users,
                      title: "500+ Active Players",
                      description: "Weekly clinics & private lessons",
                    },
                    {
                      icon: MapPin,
                      title: "Rock Quarry Park",
                      description: "Central Durham location",
                    },
                    {
                      icon: Heart,
                      title: "LGBTQ+ Owned",
                      description: "Proudly inclusive organization",
                    },
                    {
                      icon: Award,
                      title: "Expert Coaching",
                      description: "Personalized skill development",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Card key={idx} className="hover-elevate transition-all">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold text-foreground">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Inclusivity",
                  description: "We welcome players of all ages, abilities, and backgrounds. Everyone belongs on the court.",
                },
                {
                  title: "Excellence",
                  description: "We provide expert coaching and personalized instruction to help you reach your tennis goals.",
                },
                {
                  title: "Community",
                  description: "We believe tennis is better together. Our clinics and lessons build lasting friendships.",
                },
                {
                  title: "Accessibility",
                  description: "Flexible pricing, community discounts, and 7-day availability ensure tennis is within reach.",
                },
                {
                  title: "Authenticity",
                  description: "We show up as ourselves. Our LGBTQ+ ownership reflects our commitment to genuine representation.",
                },
                {
                  title: "Joy",
                  description: "Above all, we want you to fall in love with tennis. Fun and growth go hand-in-hand.",
                },
              ].map((value, idx) => (
                <Card key={idx} className="hover-elevate transition-all border-card-border">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary to-foreground text-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Join the Tennis 919 Community</h2>
            <p className="text-lg mb-8 text-background/95">
              Whether you're a complete beginner or an advanced player, there's a place for you at Tennis 919. Book your first lesson or clinic
              today!
            </p>
            <button
              onClick={() => (window.location.href = "https://calendly.com/tennis919")}
              className="bg-accent hover:bg-accent text-accent-foreground px-8 py-3 rounded-md font-semibold transition-all hover-elevate"
            >
              Schedule Your First Session
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
