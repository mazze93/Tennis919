import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Target, BarChart3, Zap, MessageSquare } from "lucide-react";

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
                Professional-grade player development tracking inspired by ATP, WTA, and elite tennis academies. Monitor every aspect of your game.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Dashboard Preview */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">Your Performance Dashboard</h2>
            
            {/* Example Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Sessions Completed", value: "24", icon: "📊", color: "bg-primary" },
                { label: "First Serve %", value: "62%", icon: "🎾", color: "bg-secondary" },
                { label: "Win Rate (Clinics)", value: "78%", icon: "🏆", color: "bg-accent" },
                { label: "Current Skill", value: "Intermediate", icon: "⭐", color: "bg-chart-5" },
              ].map((stat, idx) => (
                <Card key={idx} className="hover-elevate transition-all border-card-border">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skill Progression Matrix */}
            <Card className="border-card-border mb-8">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Skill Progression Matrix</CardTitle>
                <CardDescription>Professional-level skill tracking across key tennis dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { skill: "Serve", current: 6, target: 9, icon: "🚀" },
                    { skill: "Forehand", current: 7, target: 9, icon: "💪" },
                    { skill: "Backhand", current: 5, target: 8, icon: "🔄" },
                    { skill: "Volley", current: 4, target: 8, icon: "⚡" },
                    { skill: "Footwork", current: 7, target: 9, icon: "👟" },
                    { skill: "Match Strategy", current: 6, target: 9, icon: "🎯" },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-semibold text-foreground">{item.skill}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.current}/10</span>
                      </div>
                      <div className="flex h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="bg-primary rounded-full transition-all"
                          style={{ width: `${(item.current / 10) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Target: {item.target}/10</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">Playbook Features</h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  icon: Calendar,
                  title: "Session Management & History",
                  description: "Track all lessons and clinics with detailed session notes from your coach.",
                  features: [
                    "Upcoming & past session calendar",
                    "Coach feedback and notes after each session",
                    "Video clips of key moments",
                    "Session intensity and focus area tracking",
                  ],
                },
                {
                  icon: BarChart3,
                  title: "Match & Performance Analytics",
                  description: "Inspired by ATP player tracking. Record your match stats and see trends over time.",
                  features: [
                    "First serve percentage & speed",
                    "Winners vs. unforced errors breakdown",
                    "Break point conversion rates",
                    "Performance heatmaps by court position",
                  ],
                },
                {
                  icon: Target,
                  title: "Personalized Training Plans",
                  description: "Custom drills and practice regimens designed for your specific improvement areas.",
                  features: [
                    "AI-recommended focus areas",
                    "Weekly drill sequences",
                    "Progressive difficulty scaling",
                    "Drill library (1000+ exercises)",
                  ],
                },
                {
                  icon: TrendingUp,
                  title: "Progress Tracking & Goals",
                  description: "Set goals and watch your improvement across all dimensions of your game.",
                  features: [
                    "Set skill-specific goals",
                    "Real-time progress toward milestones",
                    "Achievement badges & streaks",
                    "Comparison to your past performance",
                  ],
                },
                {
                  icon: Zap,
                  title: "Tactical Analysis",
                  description: "Deep dive into your match strategy and opponent patterns like professional players.",
                  features: [
                    "Point-by-point match breakdown",
                    "Serve & return patterns",
                    "Tactical decision trees",
                    "Matchup strategy recommendations",
                  ],
                },
                {
                  icon: MessageSquare,
                  title: "Coach Communication Hub",
                  description: "Direct messaging with your Tennis 919 coach for feedback and guidance.",
                  features: [
                    "Post-session coach messages",
                    "Ask technique questions anytime",
                    "Video analysis requests",
                    "Goal-setting discussions",
                  ],
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
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Example Data Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 text-center">Sample Playbook Data</h2>
            
            {/* Match Stats Example */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="font-heading">Recent Match: vs. Alex (Clinic)</CardTitle>
                  <CardDescription>Match Stats Breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-md">
                      <span className="font-medium">Match Result</span>
                      <Badge className="bg-secondary text-secondary-foreground">Won 6-4</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span>Aces</span><span className="font-semibold">6</span></div>
                      <div className="flex justify-between"><span>First Serve %</span><span className="font-semibold">68%</span></div>
                      <div className="flex justify-between"><span>Winners</span><span className="font-semibold">24</span></div>
                      <div className="flex justify-between"><span>Unforced Errors</span><span className="font-semibold">12</span></div>
                      <div className="flex justify-between"><span>Break Points Converted</span><span className="font-semibold">2/3</span></div>
                      <div className="flex justify-between"><span>Net Points Won</span><span className="font-semibold">71%</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardHeader>
                  <CardTitle className="font-heading">Coach Feedback (Latest Session)</CardTitle>
                  <CardDescription>Private Lesson • Nov 24, 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-green-600">✓</span> Strengths
                    </h4>
                    <p className="text-sm text-muted-foreground">Your serve placement has improved significantly. Great work on the wide slice serve!</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-accent">→</span> Focus Areas
                    </h4>
                    <p className="text-sm text-muted-foreground">Work on backhand slice consistency. Let's add slice drill to your practice regimen.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Next Session Goals</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Master the slice backhand down the line</li>
                      <li>Improve volley positioning at net</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Drills */}
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="font-heading">This Week's Personalized Drills</CardTitle>
                <CardDescription>Based on your skill assessment and match analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Forehand Winner Drill",
                      reps: "50 reps × 3 sets",
                      focus: "Aggressive groundstroke positioning",
                      difficulty: "Intermediate",
                    },
                    {
                      name: "Slice Backhand Down the Line",
                      reps: "40 reps × 3 sets",
                      focus: "Consistency & court coverage",
                      difficulty: "Intermediate",
                    },
                    {
                      name: "Volley Reaction Drill",
                      reps: "30 reps × 4 sets",
                      focus: "Quick net plays",
                      difficulty: "Advanced",
                    },
                    {
                      name: "Break Point Conversion",
                      reps: "20 points × 2 sets",
                      focus: "Match simulation",
                      difficulty: "Advanced",
                    },
                  ].map((drill, idx) => (
                    <div key={idx} className="p-4 bg-muted/30 rounded-md border border-card-border hover-elevate transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{drill.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{drill.focus}</p>
                          <p className="text-sm font-medium text-foreground">{drill.reps}</p>
                        </div>
                        <Badge variant="outline">{drill.difficulty}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                    Ready to Level Up Your Game?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                    Get access to professional-grade player development tools. Track your progress like an elite tennis player, with personalized coaching and detailed performance analytics.
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
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
              Playbook FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What inspired the Tennis 919 Playbook design?",
                  a: "Our playbook is modeled after professional systems used in ATP, WTA, and elite tennis academies like IMG Academy and Nick Bollettieri's Academy. We bring pro-level tracking to recreational players.",
                },
                {
                  q: "How do I get my match stats into my playbook?",
                  a: "You can input stats manually after each match, or your coach can upload them during your sessions. Eventually, we'll integrate with match tracking apps.",
                },
                {
                  q: "Can my coach see my playbook?",
                  a: "Yes! Your Tennis 919 coach has access to your playbook to provide better feedback and track your progress over time.",
                },
                {
                  q: "Are there premade training plans?",
                  a: "Yes, and they're customized based on your skill level and goals. Plans are inspired by top tennis academies and adapted for your specific needs.",
                },
                {
                  q: "Is the playbook free?",
                  a: "Yes! Your playbook is completely free when you create an account. Premium features (advanced analytics, video storage) coming soon.",
                },
                {
                  q: "When will the playbook launch?",
                  a: "We're launching a beta version soon! Sign up for early access and be among the first to track your game like a pro.",
                },
              ].map((item, idx) => (
                <Card key={idx} className="border-card-border hover-elevate transition-all">
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
