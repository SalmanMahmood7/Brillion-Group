import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Robbinex guided us through every step of selling our manufacturing business. Their expertise and professionalism made the process smooth and profitable.",
    author: "Sarah Johnson",
    company: "Johnson Manufacturing Inc.",
    location: "Toronto, ON"
  },
  {
    text: "After 30 years of building my restaurant chain, Robbinex helped me achieve the exit I dreamed of. Exceptional service and results.",
    author: "Michael Chen",
    company: "Chen's Kitchen Group",
    location: "Hamilton, ON"
  },
  {
    text: "The COSATA process is brilliant. Robbinex delivered results that exceeded our expectations in both timeline and valuation.",
    author: "Jennifer Mitchell",
    company: "Mitchell Logistics",
    location: "Ottawa, ON"
  }
];

export function useTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return {
    testimonials,
    activeTestimonial,
    setActiveTestimonial
  };
}