import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, TrendingUp, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    // TODO: Implement newsletter signup API call
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-foreground" data-testid="section-newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <Card className="border-primary-border bg-card/95 backdrop-blur-sm">
            <CardHeader className="gap-2">
              <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="font-heading text-2xl text-foreground">Get Tennis Tips</CardTitle>
              <CardDescription className="text-muted-foreground">
                Subscribe to our newsletter for weekly tennis improvement advice, training tips, and exclusive offers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" className="bg-accent hover:bg-accent text-accent-foreground" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                Join 500+ tennis enthusiasts improving their game. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent-border bg-card/95 backdrop-blur-sm">
            <CardHeader className="gap-2">
              <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-heading text-2xl text-foreground">Track Your Progress</CardTitle>
              <CardDescription className="text-muted-foreground">
                Create a free account to access your personalized playbook, track booked sessions, and monitor your tennis journey.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Session History</p>
                    <p className="text-xs text-muted-foreground">View all past and upcoming lessons</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Skill Progression</p>
                    <p className="text-xs text-muted-foreground">Track your improvement over time</p>
                  </div>
                </div>
              </div>
              <Button
                variant="default"
                className="w-full bg-primary hover:bg-primary text-primary-foreground"
                onClick={() => (window.location.href = "/playbook")}
                data-testid="button-create-account"
              >
                Create Free Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
