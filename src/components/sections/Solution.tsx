import { Zap, BarChart3, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Solution = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  const steps = [
    {
      number: "01",
      icon: <Zap className="w-6 h-6" />,
      title: "Analyze",
      description: "AI studies your content history and identifies patterns that drive engagement",
      color: "from-primary/20 to-accent/20"
    },
    {
      number: "02",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Learn",
      description: "Machine learning models understand what resonates with your specific audience",
      color: "from-accent/20 to-primary/20"
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6" />,
      title: "Predict",
      description: "Get performance predictions for new content before you post",
      color: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section ref={sectionRef as any} className="px-4 py-20 md:py-32 relative">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 reveal-up ${isVisible ? 'active' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            The first AI platform that <span className="gradient-text">predicts viral content</span> before you post.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Viralize analyzes your content patterns, learns what works for your audience, and predicts performance with 85% accuracy.
          </p>
        </div>
        
        {/* 3-Step Process with enhanced interactivity */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Animated connection line */}
          <div className={`hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative group reveal-scale stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:glow-primary cursor-default">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Enhanced step number with gradient background */}
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:animate-pulse`}>
                      <div className="w-20 h-20 rounded-xl bg-background flex items-center justify-center">
                        <div className="text-primary group-hover:rotate-12 transition-transform duration-500">{step.icon}</div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center group-hover:scale-125 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Hidden on hover indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated bottom CTA */}
        <div className={`text-center mt-12 reveal-up stagger-delay-4 ${isVisible ? 'active' : ''}`}>
          <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Join teams creating content with predictive confidence
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;