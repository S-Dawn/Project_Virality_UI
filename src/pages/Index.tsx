import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import Demo from "@/components/sections/Demo";
import FinalCTA from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <ThemeToggle />
      <nav className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border/50 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black gradient-text">Viralize</div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300">Features</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300">Pricing</a>
              <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300">Resources</a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover:scale-105 transition-all duration-300">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border/50 space-y-4 animate-fade-in">
              <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
              <a href="#pricing" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#resources" className="block text-sm font-medium text-muted-foreground hover:text-foreground">Resources</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Main sections */}
      <Hero />
      <TrustIndicators />
      <Problem />
      <Solution />
      <Benefits />
      <Demo />
      <FinalCTA />
      
      {/* Footer */}
      <footer className="border-t border-border/50 px-4 py-12 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-black text-xl gradient-text mb-4">Viralize</h4>
              <p className="text-sm text-muted-foreground">
                Transform your content into viral sensations with AI-powered insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2024 Viralize. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;