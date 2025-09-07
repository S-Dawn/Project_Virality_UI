import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import DataVisualization from "./DataVisualization";
const Hero = () => {
  const [headlineVisible, setHeadlineVisible] = useState(false);
  const {
    ref: sectionRef,
    isVisible
  } = useScrollReveal();
  useEffect(() => {
    // Trigger headline animation on mount
    const timer = setTimeout(() => setHeadlineVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return <section ref={sectionRef as any} className="hero-gradient relative px-4 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Animated Headline with word-by-word reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
            <span className="block">
              {["Know", "what", "will", "go", "viral"].map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-3 transition-all duration-500 ${
                    headlineVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className={`gradient-text block mt-2 transition-all duration-700 ${headlineVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '600ms' }}>
              before you post.
            </span>
          </h1>
          
          {/* Subcopy with stagger */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-700 delay-500 ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Viralize uses predictive intelligence to analyze your content patterns and forecast which posts will perform best with your audience.</p>
          
          {/* CTA Buttons with enhanced hover */}
          <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-700 ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-primary transition-all hover:scale-105 btn-hover">
              Predict Your Next Viral Hit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold border-border/50 hover:bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              Watch Demo
            </Button>
          </div>

          {/* Data Visualization Dashboard */}
          <div className={`w-full max-w-4xl mx-auto mt-12 transition-all duration-700 delay-1000 ${headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <DataVisualization />
          </div>
        </div>
      </div>

      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
    </section>;
};
export default Hero;