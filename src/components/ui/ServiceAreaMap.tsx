'use client';

import React from 'react';
import { MapPin, CheckCircle, Phone } from 'lucide-react';

export function ServiceAreaMap() {
  const serviceAreas = [
    {
      city: 'Toronto',
      zone: 'Downtown',
      coverage: 'Full Coverage',
      responseTime: '30 min',
      popular: true,
    },
    {
      city: 'Mississauga',
      zone: 'West GTA',
      coverage: 'Full Coverage',
      responseTime: '45 min',
      popular: true,
    },
    {
      city: 'Brampton',
      zone: 'Northwest',
      coverage: 'Full Coverage',
      responseTime: '45 min',
      popular: false,
    },
    {
      city: 'Markham',
      zone: 'Northeast',
      coverage: 'Full Coverage',
      responseTime: '45 min',
      popular: false,
    },
    {
      city: 'Richmond Hill',
      zone: 'North York',
      coverage: 'Full Coverage',
      responseTime: '45 min',
      popular: false,
    },
    {
      city: 'Vaughan',
      zone: 'North',
      coverage: 'Full Coverage',
      responseTime: '45 min',
      popular: false,
    },
    {
      city: 'Oakville',
      zone: 'Southwest',
      coverage: 'Full Coverage',
      responseTime: '60 min',
      popular: false,
    },
    {
      city: 'Burlington',
      zone: 'Southwest',
      coverage: 'Limited',
      responseTime: '60 min',
      popular: false,
    },
  ];

  const serviceStats = [
    {
      metric: '15+',
      label: 'Cities Served',
      description: 'Across Greater Toronto Area',
    },
    {
      metric: '50km',
      label: 'Service Radius',
      description: 'From downtown Toronto',
    },
    {
      metric: '24/7',
      label: 'Emergency Service',
      description: 'Available when you need us',
    },
    {
      metric: '< 60min',
      label: 'Response Time',
      description: 'Average arrival time',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve the Greater Toronto Area with fast, professional duct cleaning services. 
            Check if we service your area and get an instant quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map with Real Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl h-96 relative overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Greater Toronto Area service map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                {/* Map Content */}
                <div className="text-center text-white">
                <MapPin className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Greater Toronto Area
                </h3>
                <p className="text-blue-100 mb-6">
                  Professional duct cleaning services across 15+ cities
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Check Your Area
                </button>
                </div>
              </div>

              {/* Location Pins */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/3 left-1/3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/3 right-1/3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Service Areas List */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Cities We Serve
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    area.popular
                      ? 'border-orange-200 bg-orange-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{area.city}</h4>
                    {area.popular && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 text-sm text-gray-800">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{area.coverage}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-blue-500 mr-2" />
                      <span>{area.zone} • {area.responseTime} response</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Stats */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Service Coverage
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {serviceStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.metric}
                    </div>
                    <div className="font-medium text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Don&apos;t See Your City?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We&apos;re constantly expanding our service areas. Contact us to see if we can 
            accommodate your location or to discuss our travel fees for areas outside our standard zones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </a>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Service Area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}