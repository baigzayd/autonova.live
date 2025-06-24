import { Store, Home, Mail, Brain, Route, Reply, Clock } from "lucide-react";

export default function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real-World Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI automation solutions have transformed businesses across different industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Use Case 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Store className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">E-commerce Business</h3>
                <p className="text-gray-600">Online retail company</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Challenge:</h4>
              <p className="text-gray-600 mb-4">Manual order processing, customer inquiries, and inventory management consuming 15+ hours daily.</p>
              
              <h4 className="font-semibold mb-3">Solution:</h4>
              <p className="text-gray-600 mb-4">Implemented AI agents for order processing, customer service automation, and intelligent inventory alerts.</p>
              
              <h4 className="font-semibold mb-3">Results:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$50K</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Home className="text-green-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Real Estate Agency</h3>
                <p className="text-gray-600">Property management firm</p>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Challenge:</h4>
              <p className="text-gray-600 mb-4">Lead qualification, follow-ups, and property matching requiring constant manual attention.</p>
              
              <h4 className="font-semibold mb-3">Solution:</h4>
              <p className="text-gray-600 mb-4">Created AI-powered lead scoring, automated nurture sequences, and intelligent property recommendations.</p>
              
              <h4 className="font-semibold mb-3">Results:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">150%</div>
                  <div className="text-sm text-gray-600">Lead Conversion</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">60%</div>
                  <div className="text-sm text-gray-600">Faster Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Example */}
        <div className="bg-gray-50 p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-12">Sample Automation Workflow</h3>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Email Received</h4>
              <p className="text-sm text-gray-600">New inquiry arrives</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-accent h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">AI Analysis</h4>
              <p className="text-sm text-gray-600">Intent & priority detected</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Route className="text-green-600 h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Smart Routing</h4>
              <p className="text-sm text-gray-600">Assigned to right team</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Reply className="text-purple-600 h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Auto Response</h4>
              <p className="text-sm text-gray-600">Personalized reply sent</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600 h-6 w-6" />
              </div>
              <h4 className="font-semibold mb-2">Follow-up</h4>
              <p className="text-sm text-gray-600">Scheduled reminders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
