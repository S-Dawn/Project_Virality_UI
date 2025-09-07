import { Shield, Award, Lock, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TrustIndicators = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "ISO 27001", icon: Lock },
    { name: "GDPR Compliant", icon: CheckCircle },
    { name: "CCPA Ready", icon: Award }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Shopify", "Google Analytics",
    "Meta Business", "TikTok Ads", "LinkedIn", "Klaviyo"
  ];

  return (
    <section ref={sectionRef as any} className="px-4 py-16 border-y border-border/30 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        {/* Certifications */}
        <div className={`mb-12 reveal-up ${isVisible ? 'active' : ''}`}>
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Enterprise Security & Compliance
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className={`flex items-center gap-3 glass-card px-6 py-3 rounded-lg border-primary/20 hover:border-primary/40 transition-all hover:scale-105 reveal-scale stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
              >
                <cert.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className={`reveal-up stagger-delay-2 ${isVisible ? 'active' : ''}`}>
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Seamless Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={integration}
                className="glass-card px-4 py-2 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all hover:scale-110 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;