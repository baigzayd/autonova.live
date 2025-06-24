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
    <section id="home" className="pt-16 gradient-secondary min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="animate-fade-in-up relative">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Autonova helps businesses streamline operations, reduce manual work, and scale efficiently through custom AI agents and intelligent automation workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Consultation
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="text-accent mr-2 h-4 w-4" />
              Trusted by 50+ businesses • Enterprise-grade security
            </div>
            
            {/* Large Text Overlay */}
            <div className="absolute bottom-0 left-0 -mb-32 lg:-mb-40">
              <div className="text-[20vw] lg:text-[15vw] xl:text-[12vw] font-black leading-none text-primary/20 select-none">
                <div>plug</div>
                <div>play.</div>
                <div>automate.</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/30 p-16 rounded-2xl border border-primary/20 shadow-2xl">
              <div className="text-center">
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">AI Automation Hub</h3>
                <p className="text-muted-foreground">Intelligent workflows running 24/7</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-card-foreground">Automation Active</div>
                  <div className="text-xs text-muted-foreground">Processing 1,247 tasks/hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
