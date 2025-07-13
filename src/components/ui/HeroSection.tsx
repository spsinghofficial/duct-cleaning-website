'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Star } from 'lucide-react';

export function HeroSection() {
  const benefits = [
    'Licensed & Insured Professionals',
    'Same-Day Service Available',
    'Free Estimates & Consultations',
    'Satisfaction Guaranteed',
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional
                <span className="text-orange-400 block">Duct Cleaning</span>
                Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Improve your indoor air quality with our certified technicians. 
                Same-day service available in the Greater Toronto Area.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-blue-100">4.9/5 Rating</span>
              </div>
              <div className="text-blue-100">
                500+ Happy Customers
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-lg">Emergency Service</div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold mb-2">Special Offer</h3>
                  <p className="text-blue-100 text-sm">
                    Book this month and save 20% on your first service
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-blue-100 text-sm">
                    Same-day service available for urgent cleaning needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}