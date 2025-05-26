"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const contactFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormValues) => void;
  className?: string;
}

export function ContactForm({ onSubmit, className = "" }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function handleSubmit(values: ContactFormValues) {
    console.log("Form submitted:", values);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      console.log("Message sent successfully");

      // Call the onSubmit prop if provided
      if (onSubmit) {
        onSubmit(values);
      }

      // Reset form after successful submission
      form.reset();

      // Optional: Show success message to user
      toast.success("Message sent successfully!");
    } catch (error) {
      // Optional: Show error message to user
      toast.error("Failed to send message. Please try again later.");
    }
    // Reset form after submission
    form.reset();
  }

  return (
    <Card className={`bg-white shadow-sm ${className}`}>
      <CardContent className="p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Full name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-blue-600 focus:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-blue-600 focus:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone Number */}
            <div className="md:w-1/2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-blue-600 focus:ring-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Type your message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message here..."
                      className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 min-h-[120px] resize-none focus:border-blue-600 focus:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                disabled={form.formState.isSubmitting}
                className="my-6 bg-[#0D6970] font-bold rounded-full py-6 px-9"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send message"}{" "}
                <ArrowUpRight size={20} />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
