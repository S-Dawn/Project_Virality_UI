import { TrendingUp, Users, Target, Clock, UserCheck, PlayCircle, MessageSquare, BarChart3 } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const DataVisualization = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  
  // Animated metrics for specific insights - more realistic numbers
  const peakEngagement = useCountUp(82, 2500, isVisible);
  const topPersona = useCountUp(76, 2000, isVisible);
  const hookRate = useCountUp(68, 2000, isVisible);
  const avgWatchTime = useCountUp(52, 2000, isVisible);

  const metrics = [
    {
      label: "Peak Engagement",
      value: `${peakEngagement}%`,
      subtext: "at 0:15-0:23",
      detail: "Problem reveal",
      icon: PlayCircle,
      color: "text-primary"
    },
    {
      label: "Top Persona Match",
      value: `${topPersona}%`,
      subtext: "Tech Innovators",
      detail: "Primary audience",
      icon: UserCheck,
      color: "text-green-500"
    },
    {
      label: "Hook Rate",
      value: `${hookRate}%`,
      subtext: "First 3 seconds",
      detail: "Viewer retention",
      icon: Clock,
      color: "text-accent"
    },
    {
      label: "Avg Watch Time",
      value: `${avgWatchTime}%`,
      subtext: "Video completion",
      detail: "Above average",
      icon: BarChart3,
      color: "text-blue-500"
    }
  ];

  // Persona engagement breakdown - more realistic numbers
  const personaEngagement = [
    { name: "Tech Innovators", engagement: 76, comments: 234, shares: 67, description: "Early adopters, 25-34" },
    { name: "Business Leaders", engagement: 64, comments: 156, shares: 48, description: "Decision makers, 35-44" },
    { name: "Creative Pros", engagement: 58, comments: 112, shares: 31, description: "Designers, 22-32" },
    { name: "Growth Hackers", engagement: 54, comments: 143, shares: 52, description: "Marketers, 28-38" },
    { name: "Product Teams", engagement: 47, comments: 89, shares: 38, description: "PMs, 26-36" }
  ];

  // Content section performance - realistic viral content metrics
  const contentSections = [
    { time: "0:00-0:03", label: "Opening hook", engagement: 68 },
    { time: "0:15-0:23", label: "Problem reveal", engagement: 82 },
    { time: "0:45-0:52", label: "Solution demo", engagement: 71 },
    { time: "1:10-1:15", label: "Social proof", engagement: 62 },
    { time: "1:30-1:35", label: "CTA moment", engagement: 48 }
  ];

  return (
    <div ref={sectionRef as any} className={`glass-card rounded-2xl p-6 md:p-8 border-primary/10 reveal-scale ${isVisible ? 'active' : ''}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base md:text-lg font-bold">Content Performance Breakdown</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Why it went viral</span>
        </div>
      </div>

      {/* Key metrics - improved grid layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div 
            key={metric.label}
            className={`bg-background/50 rounded-lg p-3 space-y-1 reveal-up stagger-delay-${index + 1} ${isVisible ? 'active' : ''}`}
          >
            <div className="flex items-center gap-2">
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
              <p className="text-xs text-muted-foreground truncate">{metric.label}</p>
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl font-black tracking-tight">{metric.value}</div>
              <div className="text-xs font-medium text-foreground">{metric.subtext}</div>
              <div className="text-xs text-muted-foreground/70">{metric.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Persona engagement - cleaner layout */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Engagement by Customer Persona</span>
          <span className="text-xs text-muted-foreground">
            <MessageSquare className="w-3 h-3 inline mr-1" />
            Activity metrics
          </span>
        </div>
        <div className="space-y-3">
          {personaEngagement.slice(0, 3).map((persona, i) => (
            <div key={persona.name} className="bg-background/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm font-medium">{persona.name}</div>
                  <div className="text-xs text-muted-foreground">{persona.description}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{persona.engagement}%</div>
                  <div className="text-xs text-muted-foreground">engagement</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground">
                  <MessageSquare className="w-3 h-3 inline mr-1" />
                  {persona.comments} comments
                </span>
                <span className="text-muted-foreground">
                  <TrendingUp className="w-3 h-3 inline mr-1" />
                  {persona.shares} shares
                </span>
              </div>
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-primary to-accent transition-all duration-500`}
                  style={{ 
                    width: `${persona.engagement}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video timeline - improved visualization */}
      <div className="bg-background/30 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold">Video Timeline Engagement</span>
          <span className="text-xs text-muted-foreground">Retention by section</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-end gap-1 h-24">
            {contentSections.map((section, i) => {
              const isPeak = section.engagement > 80;
              const isHigh = section.engagement > 70;
              
              // Color based on engagement level
              let barColor = 'bg-blue-500/60'; // Default blue
              if (isPeak) {
                barColor = 'bg-green-500'; // Highest retention - green
              } else if (isHigh) {
                barColor = 'bg-blue-500'; // High retention - stronger blue
              }
              
              return (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center justify-end h-full">
                    {/* Percentage label - always visible */}
                    <div className="text-xs font-bold mb-1">
                      <span className={isPeak ? 'text-green-500' : isHigh ? 'text-blue-500' : 'text-muted-foreground'}>
                        {section.engagement}%
                      </span>
                    </div>
                    {/* Bar */}
                    <div 
                      className={`w-full ${barColor} hover:opacity-80 transition-all rounded-t relative cursor-pointer`}
                      style={{ 
                        height: `${section.engagement}%`,
                        animationDelay: `${i * 50}ms`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-5 gap-1 text-[10px]">
            {contentSections.map((section, i) => {
              const isPeak = section.engagement > 80;
              const isHigh = section.engagement > 70;
              
              return (
                <div key={i} className="text-center">
                  <div className={`font-medium ${isPeak ? 'text-green-500' : isHigh ? 'text-blue-500' : 'text-foreground'}`}>
                    {section.time}
                  </div>
                  <div className="text-muted-foreground truncate">{section.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;