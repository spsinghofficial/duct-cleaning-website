'use client';

import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certified Technicians',
      description: 'NADCA certified technicians with years of experience',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Emergency Service',
      description: 'Available round the clock for urgent cleaning needs',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '500+ Satisfied Customers',
      description: 'Trusted by hundreds of residential and commercial clients',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or we\'ll make it right',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: '4.9/5 Star Rating',
      description: 'Consistently rated excellent by our customers',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const certifications = [
    {
      name: 'NADCA Certified',
      description: 'National Air Duct Cleaners Association',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'BBB Accredited',
      description: 'Better Business Bureau A+ Rating',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'WSIB Insured',
      description: 'Workplace Safety Insurance Board',
      logo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'EPA Approved',
      description: 'Environmental Protection Agency',
      logo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CleanAir Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to providing the highest quality duct cleaning services 
            with complete transparency and professionalism.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${badge.bgColor} ${badge.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                {badge.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Certifications & Accreditations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 mb-3 h-24 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-blue-900 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Our Service Guarantee
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              We stand behind our work with a comprehensive satisfaction guarantee. 
              If you&apos;re not completely satisfied with our service, we&apos;ll return to make it right at no additional cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">2 Year</div>
                <div className="text-blue-100">Service Warranty</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-blue-100">Satisfaction Guarantee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-2">Free</div>
                <div className="text-blue-100">Return Service if Needed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}