'use client';

import React from 'react';
import Link from 'next/link';
import { Wind, Home, Factory, Shield, ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  startingPrice: string;
  href: string;
}

export function ServicesOverview() {
  const services: Service[] = [
    {
      id: 'residential-duct-cleaning',
      title: 'Residential Duct Cleaning',
      description: 'Complete air duct cleaning for homes and apartments to improve indoor air quality.',
      icon: <Home className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c5d99c42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Complete system cleaning', 'HEPA filtration', 'Before/after photos', '2-year warranty'],
      startingPrice: '$299',
      href: '/services/residential-duct-cleaning',
    },
    {
      id: 'commercial-duct-cleaning',
      title: 'Commercial Duct Cleaning',
      description: 'Professional duct cleaning services for offices, restaurants, and commercial buildings.',
      icon: <Factory className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Large-scale cleaning', 'Minimal downtime', 'Compliance reports', 'Flexible scheduling'],
      startingPrice: '$599',
      href: '/services/commercial-duct-cleaning',
    },
    {
      id: 'dryer-vent-cleaning',
      title: 'Dryer Vent Cleaning',
      description: 'Professional dryer vent cleaning to prevent fires and improve efficiency.',
      icon: <Wind className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bf5ca15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['Fire prevention', 'Energy savings', 'Lint removal', 'Safety inspection'],
      startingPrice: '$149',
      href: '/services/dryer-vent-cleaning',
    },
    {
      id: 'sanitization-services',
      title: 'Sanitization Services',
      description: 'Advanced sanitization and disinfection of your HVAC system.',
      icon: <Shield className="h-8 w-8" />,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: ['EPA-approved products', 'Virus elimination', 'Allergen reduction', 'Safe for families'],
      startingPrice: '$199',
      href: '/services/sanitization',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential to commercial properties, we provide comprehensive duct cleaning 
            and air quality services to keep your environment healthy and safe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Card Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 border-b border-gray-100">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-900">
                    {service.startingPrice}
                  </span>
                  <span className="text-sm text-gray-800">Starting at</span>
                </div>
                <Link
                  href={service.href}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Every property is unique. Contact us for a personalized assessment 
              and custom cleaning plan tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}