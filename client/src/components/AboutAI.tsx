import { Brain, ServerCog, TrendingUp, Clock, DollarSign, Rocket } from "lucide-react";

export default function AboutAI() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What is AI Automation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI automation combines artificial intelligence with workflow automation to handle repetitive tasks, make intelligent decisions, and streamline your business processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business workflow automation diagram" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">How AI Agents Work</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <Brain className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Intelligent Decision Making</h4>
                  <p className="text-muted-foreground">AI agents analyze data, understand context, and make decisions just like a human employee would.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                  <ServerCog className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Process Automation</h4>
                  <p className="text-muted-foreground">Automatically handle routine tasks across multiple platforms and applications seamlessly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <TrendingUp className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Continuous Learning</h4>
                  <p className="text-muted-foreground">AI systems improve over time, becoming more efficient and accurate with each interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Save Time</h3>
            <p className="text-muted-foreground">Reduce manual work by up to 80% and focus on strategic initiatives that grow your business.</p>
          </div>
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Cut Costs</h3>
            <p className="text-muted-foreground">Lower operational expenses while improving accuracy and consistency across all processes.</p>
          </div>
          <div className="text-center p-8 bg-card rounded-2xl border border-border">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-green-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Scale Fast</h3>
            <p className="text-muted-foreground">Handle increasing workloads without proportionally increasing staff or resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
