import { Calendar, Code, FlaskConical, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "We thoroughly understand your current processes, pain points, and business objectives to identify automation opportunities.",
      bgColor: "bg-primary",
    },
    {
      number: 2,
      title: "System Mapping",
      description: "We map your existing systems, tools, and workflows to design seamless integrations and optimal automation paths.",
      bgColor: "bg-accent",
    },
    {
      number: 3,
      title: "Custom Development",
      description: "Our team builds and configures custom AI agents and automation workflows tailored to your specific requirements.",
      bgColor: "bg-green-600",
    },
    {
      number: 4,
      title: "Integration & Testing",
      description: "We carefully integrate the automation with your existing systems and conduct thorough testing to ensure reliability.",
      bgColor: "bg-purple-600",
    },
    {
      number: 5,
      title: "Launch & Optimization",
      description: "After successful deployment, we continuously monitor, optimize, and provide ongoing support to maximize your ROI.",
      bgColor: "bg-orange-600",
    }
  ];

  const timeline = [
    { icon: Calendar, title: "Week 1-2", description: "Discovery & Planning", bgColor: "bg-primary/10", iconColor: "text-primary" },
    { icon: Code, title: "Week 3-6", description: "Development & Build", bgColor: "bg-accent/10", iconColor: "text-accent" },
    { icon: FlaskConical, title: "Week 7-8", description: "Testing & Integration", bgColor: "bg-green-100", iconColor: "text-green-600" },
    { icon: Rocket, title: "Week 9+", description: "Launch & Optimization", bgColor: "bg-purple-100", iconColor: "text-purple-600" }
  ];

  return (
    <section id="process" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to optimization, we guide you through every step of your automation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

          <div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${step.bgColor} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-card border border-border p-12 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-card-foreground">Typical Project Timeline</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`${phase.bgColor} p-4 rounded-2xl mb-4 inline-flex`}>
                  <phase.icon className={`${phase.iconColor} h-8 w-8`} />
                </div>
                <h4 className="font-semibold mb-2 text-card-foreground">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
