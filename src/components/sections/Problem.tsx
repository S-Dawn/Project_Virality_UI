import { TrendingDown, TrendingUp, Heart, Share2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const Problem = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  // Animated counters for viral side
  const likesCount = useCountUp(84000, 2000, isVisible);
  const commentsCount = useCountUp(2300, 2000, isVisible);
  const sharesCount = useCountUp(912, 2000, isVisible);

  return (
    <section ref={sectionRef as any} className="px-4 py-20 md:py-32 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            You create content all week <span className="gradient-text">but can't predict what will work.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every post is a gamble. Without knowing what will resonate, you're wasting time and budget on content that won't perform. The competition is winning while you're still guessing.
          </p>
        </div>
        
        {/* Interactive comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Low Engagement Side - Interactive hover state */}
          <div 
            className={`flip-card h-full ${isFlipped ? 'flipped' : ''} reveal-scale stagger-delay-1 ${isVisible ? 'active' : ''}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="flip-card-inner h-full">
              {/* Front of card */}
              <div className="flip-card-front">
                <div className="glass-card rounded-2xl p-8 space-y-6 h-full opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <TrendingDown className="w-8 h-8 text-destructive animate-pulse" />
                    <span className="text-sm font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full">
                      Without Viralize
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Creating in the Dark</h3>
                    <p className="text-muted-foreground">
                      No way to predict performance. Every post is a costly experiment with uncertain results.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground group-hover:text-destructive transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-2xl font-bold">2.3M</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Impressions</p>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground group-hover:text-destructive transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-2xl font-bold">???</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Why it worked</p>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-muted-foreground group-hover:text-destructive transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-2xl font-bold">0%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Repeat rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back of card - shows potential */}
              <div className="flip-card-back">
                <div className="glass-card rounded-2xl p-8 space-y-6 h-full border-destructive/50 bg-destructive/5">
                  <div className="flex items-center justify-between">
                    <TrendingDown className="w-8 h-8 text-destructive" />
                    <span className="text-sm font-medium text-foreground bg-destructive/20 px-3 py-1 rounded-full">
                      Why This Happens
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">The Costly Problem</h3>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Hours spent creating content that flops</li>
                      <li>• Budget wasted on posts that don't perform</li>
                      <li>• Team morale drops from constant misses</li>
                      <li>• Competitors winning with predictable strategies</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-muted-foreground text-center">
                      Hover over the other card to see the solution →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Viral Side - With animated counters */}
          <div className={`reveal-scale stagger-delay-2 ${isVisible ? 'active' : ''}`}>
            <div className="glass-card rounded-2xl p-8 space-y-6 border-primary/50 hover:glow-primary transition-all duration-300 hover:scale-[1.02] hover:border-primary">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-8 h-8 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full animate-pulse">
                  With Viralize
                </span>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Know What's Next</h3>
                <p className="text-muted-foreground">
                  AI predicts which content will perform before you create it. Post with confidence.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center group">
                  <div className="flex items-center justify-center gap-1 text-primary group-hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 animate-pulse" />
                    <span className="text-2xl font-bold counter-animate">
                      2.3M
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Impressions</p>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center gap-1 text-primary group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 animate-pulse" />
                    <span className="text-2xl font-bold counter-animate">
                      {(commentsCount / 1000).toFixed(1)}K
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Success Factors</p>
                </div>
                <div className="text-center group">
                  <div className="flex items-center justify-center gap-1 text-primary group-hover:scale-110 transition-transform">
                    <Share2 className="w-4 h-4 animate-pulse" />
                    <span className="text-2xl font-bold counter-animate">
                      {sharesCount}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Confidence Score</p>
                </div>
              </div>

              {/* Live indicator */}
              <div className="flex items-center justify-center pt-2">
                <div className="flex items-center gap-2 text-xs text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Predictive insights ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;