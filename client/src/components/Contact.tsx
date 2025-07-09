import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail } from "lucide-react";

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
    <section id="contact" className="py-12 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-6 text-card-foreground text-center">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-8 w-full max-w-2xl md:flex-row md:justify-center">
            {/* Phone Card */}
            <div className="flex-1 bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div className="font-semibold text-card-foreground mb-1">Phone</div>
              <div className="text-muted-foreground">+91 88508 70661</div>
            </div>
            {/* Email Card */}
            <div className="flex-1 bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-lg mb-4">
                <Mail className="text-accent h-5 w-5" />
              </div>
              <div className="font-semibold text-card-foreground mb-1">Email</div>
              <div className="text-muted-foreground">autonovawork@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
