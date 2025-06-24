import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with 
              <span className="text-primary"> AI-Powered Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Autonova helps businesses streamline operations, reduce manual work, and scale efficiently through custom AI agents and intelligent automation workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 shadow-lg text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <Shield className="text-accent mr-2 h-4 w-4" />
              Trusted by 50+ businesses • Enterprise-grade security
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern AI automation workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-sm">Automation Active</div>
                  <div className="text-xs text-gray-500">Processing 1,247 tasks/hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
