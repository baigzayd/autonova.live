import { Button } from "@/components/ui/button";
import { Wrench, PuzzleIcon, Factory, Headphones, Shield, Maximize2, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Autonova?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-bold mb-3">Deep Customization</h3>
                  <p className="text-gray-600">We don't offer cookie-cutter solutions. Every automation is built from the ground up to match your unique workflows and business logic.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <PuzzleIcon className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
                  <p className="text-gray-600">Our expertise in complex, multi-app integrations ensures your automation works harmoniously with all your existing tools.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Factory className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Industry Expertise</h3>
                  <p className="text-gray-600">End-to-end, industry-specific workflows that understand the nuances and requirements of your sector.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office technology setup" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Additional USPs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Headphones className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
            <p className="text-gray-600">Continuous optimization, maintenance, and strategic guidance to ensure your automation evolves with your business.</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-red-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
            <p className="text-gray-600">Enterprise-grade security, data protection, and compliance measures built into every automation solution.</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Maximize2 className="text-blue-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
            <p className="text-gray-600">Architecture designed to grow with your business, handling increased volumes and complexity effortlessly.</p>
          </div>
        </div>

        {/* Strategic Partnership */}
        <div className="gradient-primary p-12 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Your Strategic Partner, Not Just a Vendor</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We invest in your success with strategic guidance, proactive optimization, and long-term partnership approach to automation.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-gray-50 shadow-lg text-lg px-8 py-4"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Discuss Strategic Partnership
          </Button>
        </div>
      </div>
    </section>
  );
}
