import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section ref={sectionRef as any} className="px-4 py-20 md:py-32 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`glass-card rounded-3xl p-8 md:p-12 text-center space-y-8 border-primary/20 hover:border-primary/30 transition-all duration-500 reveal-scale ${isVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-black">
            Ready to predict your <span className="gradient-text">next viral hit?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop posting and hoping. Start predicting and knowing. Join teams creating content with confidence.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-primary transition-all hover:scale-105 btn-hover"
            >
              Start Predicting Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-border/50 hover:bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              See Demo First
            </Button>
          </div>

          {/* Animated trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            {[
              "AI predictions",
              "85% accuracy",
              "Instant insights"
            ].map((text, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 text-sm reveal-up stagger-delay-${index + 1} ${isVisible ? 'active' : ''} hover:scale-110 transition-transform cursor-default`}
              >
                <CheckCircle className="w-4 h-4 text-primary animate-pulse" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground pt-4 animate-pulse">
            The future of content creation is predictive, not reactive.
          </p>
        </div>
      </div>

      {/* Enhanced animated background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default FinalCTA;