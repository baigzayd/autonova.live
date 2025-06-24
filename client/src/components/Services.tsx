import { Button } from "@/components/ui/button";
import { Wand2, Plug, Mail, Megaphone, Users, PenTool, Factory, MessageCircle, Check } from "lucide-react";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Wand2,
      title: "Custom AI Automations",
      description: "Tailored automation workflows designed specifically for your unique business processes and requirements.",
      features: ["Workflow analysis & design", "Custom AI agent development", "Process optimization"],
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Plug,
      title: "Seamless App Integration",
      description: "Connect and synchronize your existing business tools and platforms for unified operations.",
      features: ["Multi-platform connectivity", "Data synchronization", "API development"],
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Automated email processing, response generation, and intelligent inbox management.",
      features: ["Smart email sorting", "Auto-response generation", "Follow-up automation"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Megaphone,
      title: "Cold Outreach & Sales",
      description: "Intelligent prospect identification, personalized outreach, and automated sales follow-ups.",
      features: ["Lead qualification", "Personalized messaging", "Pipeline management"],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Automated prospect discovery, qualification, and nurturing workflows to grow your sales pipeline.",
      features: ["Prospect research", "Lead scoring", "Nurture sequences"],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: PenTool,
      title: "Content & Script Automation",
      description: "AI-powered content creation, script generation, and automated publishing workflows.",
      features: ["Content generation", "Brand voice consistency", "Publishing automation"],
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Factory,
      title: "Industry-Specific Solutions",
      description: "Scalable workflow solutions designed for specific industries and business models.",
      features: ["Vertical specialization", "Compliance integration", "Scalable architecture"],
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create custom AI-powered solutions tailored to your specific business needs and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className={`${service.iconColor} h-8 w-8`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="text-sm text-muted-foreground space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-12 rounded-2xl border border-border shadow-lg">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Ready to Automate Your Business?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Let's discuss how our AI automation solutions can transform your operations and drive growth.</p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 py-4"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Discuss Your Automation Needs
          </Button>
        </div>
      </div>
    </section>
  );
}
