'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calculator, Phone } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

const quickQuoteSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  postalCode: z.string().regex(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/, 'Please enter a valid postal code'),
  propertyType: z.enum(['house', 'condo', 'townhouse', 'commercial']),
  squareFootage: z.string().min(1, 'Please select square footage'),
  serviceType: z.array(z.string()).min(1, 'Please select at least one service'),
  urgency: z.enum(['asap', 'week', 'month', 'flexible']),
  additionalInfo: z.string().optional(),
});

type QuickQuoteFormData = z.infer<typeof quickQuoteSchema>;

export function QuickQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickQuoteFormData>({
    resolver: zodResolver(quickQuoteSchema),
  });


  const serviceOptions = [
    { id: 'duct-cleaning', label: 'Duct Cleaning', price: 'from $299' },
    { id: 'dryer-vent', label: 'Dryer Vent Cleaning', price: 'from $149' },
    { id: 'sanitization', label: 'Sanitization Services', price: 'from $199' },
    { id: 'hvac-maintenance', label: 'HVAC Maintenance', price: 'from $249' },
  ];

  const squareFootageOptions = [
    { value: 'under-1000', label: 'Under 1,000 sq ft' },
    { value: '1000-2000', label: '1,000 - 2,000 sq ft' },
    { value: '2000-3000', label: '2,000 - 3,000 sq ft' },
    { value: '3000-5000', label: '3,000 - 5,000 sq ft' },
    { value: 'over-5000', label: 'Over 5,000 sq ft' },
  ];

  const onSubmit = async (data: QuickQuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Implement API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Handle successful form submission
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#003A66] mb-4">
                Quote Request Submitted!
              </h3>
              <p className="text-[#1A2B34] mb-6">
                Thank you for your interest in our services. We&apos;ll review your request and contact you within 2 hours with a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15551234567" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Immediate Service
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="border border-gray-300 hover:bg-gray-50 text-[#4C6170] px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Another Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003A66] mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-[#4C6170] max-w-2xl mx-auto">
              Fill out our quick form and get a personalized quote within 2 hours. 
              No obligations, just honest pricing for quality service.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</div>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                  Property Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Property Address *
                    </label>
                    <input
                      {...register('address')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="123 Main Street"
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      City *
                    </label>
                    <input
                      {...register('city')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="Toronto"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Postal Code *
                    </label>
                    <input
                      {...register('postalCode')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                      placeholder="M5V 3A8"
                    />
                    {errors.postalCode && (
                      <p className="text-red-600 text-sm mt-1">{errors.postalCode.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Property Type *
                    </label>
                    <select
                      {...register('propertyType')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    {errors.propertyType && (
                      <p className="text-red-600 text-sm mt-1">{errors.propertyType.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4C6170] mb-2">
                      Square Footage *
                    </label>
                    <select
                      {...register('squareFootage')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                    >
                      <option value="">Select square footage</option>
                      {squareFootageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.squareFootage && (
                      <p className="text-red-600 text-sm mt-1">{errors.squareFootage.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                  Services Needed
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <label key={service.id} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('serviceType')}
                        type="checkbox"
                        value={service.id}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <div className="font-medium text-[#003A66]">{service.label}</div>
                        <div className="text-sm text-[#1A2B34]">{service.price}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-red-600 text-sm mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                  When do you need service?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { value: 'asap', label: 'ASAP', desc: 'Same/next day' },
                    { value: 'week', label: 'This week', desc: 'Within 7 days' },
                    { value: 'month', label: 'This month', desc: 'Within 30 days' },
                    { value: 'flexible', label: 'Flexible', desc: 'Best price' },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('urgency')}
                        type="radio"
                        value={option.value}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <div className="ml-3">
                        <div className="font-medium text-[#003A66]">{option.label}</div>
                        <div className="text-sm text-[#1A2B34]">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.urgency && (
                  <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-medium text-[#4C6170] mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  {...register('additionalInfo')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                  placeholder="Any specific concerns, access issues, or special requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" className="mr-2" />
                      Submitting Quote Request...
                    </>
                  ) : (
                    'Get My Free Quote'
                  )}
                </button>
                <p className="text-sm text-[#1A2B34] text-center mt-4">
                  We&apos;ll contact you within 2 hours with your personalized quote
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}