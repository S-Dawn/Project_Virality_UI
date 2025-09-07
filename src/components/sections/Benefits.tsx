import { Brain, Clock, Target, Shield, Award, BarChart3, Globe, Lock } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const Benefits = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  // Animated stats
  const creators = useCountUp(10000, 2500, isVisible);
  const videos = useCountUp(2000000, 3000, isVisible);
  const growth = useCountUp(500, 2000, isVisible);

  // Benefits for Entrepreneurs & Brand Leaders
  const entrepreneurBenefits = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Strategic Confidence",
      description: "Make content decisions based on predictive data, not gut feelings"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Resource Optimization",
      description: "Invest only in content predicted to perform, maximize ROI"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Competitive Advantage",
      description: "Stay ahead with AI predictions while competitors guess"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Scale with Certainty",
      description: "Build predictable growth engines, not random viral moments"
    }
  ];

  // Benefits for Marketing Teams
  const marketingBenefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Save 20+ Hours Weekly",
      description: "Stop creating content that won't work. Focus on predicted winners"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Hit KPIs Consistently",
      description: "Plan campaigns knowing predicted reach and engagement metrics"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Data-Backed Creativity",
      description: "Let AI guide creative decisions with performance predictions"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Prove Your Strategy",
      description: "Show leadership why content will work before creating it"
    }
  ];

  return (
    <section ref={sectionRef as any} className="px-4 py-20 md:py-32 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6 hover:scale-105 transition-transform cursor-default">
            <Award className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">The Benefits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Built for <span className="gradient-text">Leaders & Teams</span>
          </h2>
        </div>
        
        {/* Benefits for Entrepreneurs & Brand Leaders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">For Entrepreneurs & Brand Leaders</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entrepreneurBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group reveal-scale stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
              >
                <div className="glass-card rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:glow-primary cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  
                  {/* Hover effect bar */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits for Marketing Teams */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">For Marketing Teams</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group reveal-scale stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
              >
                <div className="glass-card rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:glow-primary cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  
                  {/* Hover effect bar */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className={`mt-20 reveal-scale ${isVisible ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">The Competitive Edge</h3>
            <p className="text-muted-foreground">Others show dashboards of what happened. Viralize predicts what's next.</p>
          </div>
          
          {/* Problem cards - what others do */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card rounded-2xl p-8 border-destructive/20 hover:border-destructive/40 transition-all hover:scale-105 cursor-default opacity-70">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-destructive" />
                <h4 className="font-bold">Historical Metrics</h4>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-black text-destructive">Past Data</div>
                <p className="text-sm text-muted-foreground">What happened yesterday</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">Reactive, not predictive</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 border-destructive/20 hover:border-destructive/40 transition-all hover:scale-105 cursor-default opacity-70">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-destructive" />
                <h4 className="font-bold">Engagement Reports</h4>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-black text-destructive">Reports</div>
                <p className="text-sm text-muted-foreground">Historical performance</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">Can't predict future</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution card - what Viralize does */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-10 border-primary/30 hover:border-primary/60 transition-all hover:scale-105 cursor-default bg-primary/5 hover:glow-primary">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-primary animate-pulse" />
                <h4 className="text-xl font-bold">Viralize Predicts What's Next</h4>
              </div>
              <div className="space-y-4 text-center">
                <div className="text-4xl font-black gradient-text">Predictions</div>
                <p className="text-lg text-muted-foreground">Performance forecast before posting</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-foreground">Create with confidence, not hope</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Benefits;