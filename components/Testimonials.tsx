"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SubTitle from "./SubTitle";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "I am pleased to recommend Mofad-J Consult for their exceptional services in construction consultancy, particularly in the areas of project management, quantity surveying and supervison. Throughout the duration of our collaboration, Mofad-J Consult consistenttly demonstrated a high level of professionalism, technical expertise, and commitment to excellence Their team maintained clear and effective communication with all stakeholders, ensuring that project milestones were met without compromising on quality or budgetary constraints.",
    author: "Mohammed-Zafarilahi Abdul-Wahid ",
    role: "Land Economist",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:"Working with Mofad-J Consult has been a professional and efficient experience. Their team brings a clear understanding of construction processes, excellent coordination, and a strong commitment to delivering quality outcomes. Throughout the project, they maintained good communication, kept timelines on track, and upheld high standards in both planning and execution. I confidently recommend Mofad-J Consult to anyone in need of reliable and competent construction consultancy services.",
    author: "Abdul-Wahab Abdulai",
    role: "Quantity Surveyor",
    rating: 5,
    image: "/wahab.png",
  },
 
];

export default function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center mb-5 lg:mb-10">
          <SubTitle title="Testimonials" />
        </div>

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-defaultGreen">
            Listening to our clients
          </h2>
          <div className="hidden md:flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100"
              onClick={handlePrevious}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-gray-100"
              onClick={handleNext}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="flex mb-6">
                <Quote
                  className="text-blue-500 h-12 w-12 flex-shrink-0"
                  fill="currentColor"
                />
              </div>
              <p className="text-gray-700 mb-8">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                    />
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <div className="bg-blue-500 rounded-full w-3 h-3"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="flex mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentPage === index ? "bg-blue-500" : "bg-blue-200"
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
