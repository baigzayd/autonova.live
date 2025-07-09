import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-16 bg-background min-h-screen relative">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-20 lg:py-28 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
          <div className="animate-fade-in-up relative">
            {/* Large Text Overlay */}
            <div className="mb-8">
              <div className="text-[200vw] lg:text-[15.5vw] xl:text-[11vw] font-black leading-none text-primary/20 select-none">
                <div>plug.</div>
                <div>play.</div>
                <div>automate.</div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScY-pzh-U9CZFusz2qihur6rCpVEuJdN93yJ9KnoYYonnevBw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 py-4"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
