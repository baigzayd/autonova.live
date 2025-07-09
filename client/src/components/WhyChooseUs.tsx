import { Button } from "@/components/ui/button";
import { Wrench, PuzzleIcon, Factory, Headphones, Shield, Maximize2 } from "lucide-react";

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Autonova?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another automation vendor - we're your strategic partner in digital transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Wrench className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Deep Customization</h3>
                  <p className="text-muted-foreground">We don't offer cookie-cutter solutions. Every automation is built from the ground up to match your unique workflows and business logic.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <PuzzleIcon className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Seamless Integration</h3>
                  <p className="text-muted-foreground">Our expertise in complex, multi-app integrations ensures your automation works harmoniously with all your existing tools.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Factory className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Industry Expertise</h3>
                  <p className="text-muted-foreground">End-to-end, industry-specific workflows that understand the nuances and requirements of your sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional USPs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card border border-border rounded-2xl">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Headphones className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Ongoing Support</h3>
            <p className="text-muted-foreground">Continuous optimization, maintenance, and strategic guidance to ensure your automation evolves with your business.</p>
          </div>

          <div className="text-center p-8 bg-card border border-border rounded-2xl">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-red-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Security & Compliance</h3>
            <p className="text-muted-foreground">Enterprise-grade security, data protection, and compliance measures built into every automation solution.</p>
          </div>

          <div className="text-center p-8 bg-card border border-border rounded-2xl">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Maximize2 className="text-purple-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Scalable Solutions</h3>
            <p className="text-muted-foreground">Architecture designed to grow with your business, handling increased volumes and complexity effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
