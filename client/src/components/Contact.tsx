import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Calendar, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      automationType: "",
      message: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry! We'll respond within 24 hours with a customized consultation proposal.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how AI automation can transform your business. Book a consultation or get in touch today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get Your Free Consultation</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    placeholder="John Smith"
                    {...form.register("name")}
                    className="mt-2"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...form.register("email")}
                    className="mt-2"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600 mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input 
                  id="company"
                  placeholder="Your Company Inc."
                  {...form.register("company")}
                  className="mt-2"
                />
                {form.formState.errors.company && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.company.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="automationType">What type of automation interests you most?</Label>
                <Select onValueChange={(value) => form.setValue("automationType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select an option..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom-workflows">Custom AI Workflows</SelectItem>
                    <SelectItem value="app-integration">App Integration</SelectItem>
                    <SelectItem value="email-automation">Email Management</SelectItem>
                    <SelectItem value="sales-automation">Sales & CRM Automation</SelectItem>
                    <SelectItem value="lead-generation">Lead Generation</SelectItem>
                    <SelectItem value="content-automation">Content Automation</SelectItem>
                    <SelectItem value="industry-specific">Industry-Specific Solutions</SelectItem>
                    <SelectItem value="not-sure">Not Sure - Need Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your business and automation needs</Label>
                <Textarea 
                  id="message"
                  rows={5}
                  placeholder="Describe your current processes, pain points, and what you hope to achieve with automation..."
                  {...form.register("message")}
                  className="mt-2"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-600 mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg"
                disabled={submitInquiry.isPending}
              >
                <Send className="mr-2 h-5 w-5" />
                {submitInquiry.isPending ? "Sending..." : "Send My Request"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours with a customized consultation proposal.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Mail className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Email</div>
                    <div className="text-muted-foreground">hello@autonova.ai</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Calendar className="text-green-600 h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Book Direct</div>
                    <div className="text-muted-foreground">Schedule a consultation call</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Answers */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Quick Answers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-card-foreground">How long does implementation take?</h4>
                  <p className="text-sm text-muted-foreground">Most projects are completed within 6-10 weeks, depending on complexity.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Do you work with small businesses?</h4>
                  <p className="text-sm text-muted-foreground">Yes! We have solutions for businesses of all sizes, from startups to enterprises.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-card-foreground">Is ongoing support included?</h4>
                  <p className="text-sm text-muted-foreground">All our solutions include comprehensive support and optimization services.</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6">Why Businesses Trust Us</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">$2M+</div>
                  <div className="text-sm">Saved Annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
