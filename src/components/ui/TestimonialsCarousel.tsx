'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  date: string;
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      rating: 5,
      review: 'Absolutely amazing service! The team was professional, thorough, and cleaned our ducts better than we ever imagined. The difference in air quality is noticeable immediately.',
      service: 'Residential Duct Cleaning',
      date: '2024-01-15',
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Mississauga, ON',
      rating: 5,
      review: 'Quick response time and excellent work. They showed me before and after photos, and the difference was incredible. Highly recommend for anyone looking to improve their indoor air quality.',
      service: 'Dryer Vent Cleaning',
      date: '2024-01-10',
    },
    {
      id: '3',
      name: 'Jennifer Smith',
      location: 'Brampton, ON',
      rating: 5,
      review: 'Professional team that arrived on time and completed the job efficiently. Our office air feels so much cleaner now. Great value for the quality of service provided.',
      service: 'Commercial Duct Cleaning',
      date: '2024-01-08',
    },
    {
      id: '4',
      name: 'David Wilson',
      location: 'Markham, ON',
      rating: 5,
      review: 'Emergency service was fantastic. They came out the same day and fixed our HVAC issue quickly. The sanitization service they provided made our home feel fresh and clean.',
      service: 'Sanitization Services',
      date: '2024-01-05',
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      location: 'Richmond Hill, ON',
      rating: 5,
      review: 'Exceptional service from start to finish. The team was knowledgeable, courteous, and left our home cleaner than when they arrived. Will definitely use them again.',
      service: 'Residential Duct Cleaning',
      date: '2024-01-03',
    },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      return;
    }

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See what our satisfied customers have to say 
            about our professional duct cleaning services.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg border transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            
            <div className="mb-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex]?.review || ''}&rdquo;
              </p>
            </div>

            <div className="flex justify-center mb-4">
              {renderStars(testimonials[currentIndex]?.rating || 5)}
            </div>

            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900">
                {testimonials[currentIndex]?.name || ''}
              </h4>
              <p className="text-gray-800">
                {testimonials[currentIndex]?.location || ''}
              </p>
            </div>

            <div className="text-sm text-gray-500">
              <span className="font-medium">{testimonials[currentIndex]?.service || ''}</span>
              {' • '}
              <span>{testimonials[currentIndex]?.date ? new Date(testimonials[currentIndex].date).toLocaleDateString() : ''}</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-800">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">4.9/5</div>
            <div className="text-gray-800">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-800">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}