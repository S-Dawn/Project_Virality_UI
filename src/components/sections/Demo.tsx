import { Play, CheckCircle2, BarChart, Users, Zap, TrendingUp, Clock, Heart, MessageCircle, Share2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedView, setSelectedView] = useState<"past" | "future">("future");
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const pastPost = {
    title: "5 Marketing Trends That Actually Work",
    score: 78,
    engagement: "2.3K likes • 342 comments",
    time: "Posted 2 weeks ago",
    metrics: {
      likes: 2341,
      comments: 342,
      shares: 128,
      reach: "45K"
    }
  };

  const futurePost = {
    title: "Why AI Won't Replace Your Marketing Team",
    score: 92,
    predictedEngagement: "5.2K likes • 680 comments",
    optimalTime: "Best time: Thursday 2:30 PM",
    reasons: [
      "Trending topic in your industry",
      "Controversial angle drives discussion",
      "Similar posts performed 3x above average",
      "Peak audience activity time"
    ],
    metrics: {
      likes: "5.2K",
      comments: "680",
      shares: "320",
      reach: "120K"
    }
  };

  return (
    <section ref={sectionRef as any} className="px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6 hover:scale-105 transition-transform">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Watch Viralize <span className="gradient-text">predict your next hit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI analyzes patterns and predicts performance before you post
          </p>
        </div>
        
        {/* Interactive Demo Dashboard */}
        <div className={`w-full max-w-5xl mx-auto reveal-scale ${isVisible ? 'active' : ''}`}>
          <div className="glass-card rounded-2xl p-6 glow-accent hover:glow-primary transition-all duration-500">
            
            {/* View Toggle */}
            <Tabs value={selectedView} onValueChange={(v) => setSelectedView(v as "past" | "future")} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="past" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Past Performance
                </TabsTrigger>
                <TabsTrigger value="future" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Future Prediction
                </TabsTrigger>
              </TabsList>

              {/* Past Performance View */}
              <TabsContent value="past" className="space-y-6 animate-fade-in">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{pastPost.title}</h3>
                        <p className="text-sm text-muted-foreground">{pastPost.time}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-primary">{pastPost.score}%</div>
                        <Badge variant="secondary" className="mt-1">Performance Score</Badge>
                      </div>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-4 gap-4 mt-6">
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <Heart className="w-5 h-5 text-destructive mx-auto mb-1" />
                        <div className="font-bold">{pastPost.metrics.likes}</div>
                        <div className="text-xs text-muted-foreground">Likes</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <MessageCircle className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="font-bold">{pastPost.metrics.comments}</div>
                        <div className="text-xs text-muted-foreground">Comments</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <Share2 className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="font-bold">{pastPost.metrics.shares}</div>
                        <div className="text-xs text-muted-foreground">Shares</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <Users className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <div className="font-bold">{pastPost.metrics.reach}</div>
                        <div className="text-xs text-muted-foreground">Reach</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Future Prediction View */}
              <TabsContent value="future" className="space-y-6 animate-fade-in">
                <Card 
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredPost(1)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <CardContent className="p-6">

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{futurePost.title}</h3>
                        <p className="text-sm text-muted-foreground">{futurePost.optimalTime}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black gradient-text animate-pulse">{futurePost.score}%</div>
                        <Badge variant="default" className="mt-1">Viral Potential</Badge>
                      </div>
                    </div>

                    {/* Animated Prediction Reasons - Show on hover */}
                    <div className={`space-y-2 mb-6 transition-all duration-500 ${hoveredPost === 1 ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                      <p className="text-sm font-semibold text-primary mb-2">Why this will go viral:</p>
                      {futurePost.reasons.map((reason, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Predicted Metrics Grid */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all hover:scale-105">
                        <Heart className="w-5 h-5 text-destructive mx-auto mb-1" />
                        <div className="font-bold">{futurePost.metrics.likes}</div>
                        <div className="text-xs text-muted-foreground">Est. Likes</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all hover:scale-105">
                        <MessageCircle className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="font-bold">{futurePost.metrics.comments}</div>
                        <div className="text-xs text-muted-foreground">Est. Comments</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all hover:scale-105">
                        <Share2 className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="font-bold">{futurePost.metrics.shares}</div>
                        <div className="text-xs text-muted-foreground">Est. Shares</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all hover:scale-105">
                        <Users className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <div className="font-bold">{futurePost.metrics.reach}</div>
                        <div className="text-xs text-muted-foreground">Est. Reach</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all">
                      Schedule This Post
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Interactive feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: BarChart, title: "Performance Prediction", desc: "AI forecasts reach and engagement before you create" },
              { icon: Users, title: "Content Optimization", desc: "Get specific recommendations to maximize performance" },
              { icon: Zap, title: "Content Calendar", desc: "Plan posts with confidence using predictions" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`reveal-up stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
              >
                <div className="glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-default">
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  
                  {/* Progress bar animation on hover */}
                  <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated success indicators */}
          <div className={`mt-12 flex items-center justify-center gap-8 flex-wrap reveal-up ${isVisible ? 'active' : ''}`}>
            {[
              "AI predictions",
              "85% accuracy",
              "Instant insights"
            ].map((text, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-sm hover:scale-110 transition-transform cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-muted-foreground hover:text-foreground transition-colors">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;