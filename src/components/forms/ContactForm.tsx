'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  inquiryType: z.enum(['general', 'quote', 'emergency', 'complaint', 'compliment']),
  serviceType: z.array(z.string()).optional(),
  preferredContact: z.enum(['phone', 'email', 'text']),
  bestTimeToContact: z.string().min(1, 'Please select the best time to contact you'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  address: z.string().optional(),
  urgency: z.enum(['low', 'medium', 'high', 'emergency']),
  heardAboutUs: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const inquiryType = watch('inquiryType');

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', description: 'Questions about our services' },
    { value: 'quote', label: 'Request Quote', description: 'Get pricing for your project' },
    { value: 'emergency', label: 'Emergency Service', description: 'Urgent cleaning needed' },
    { value: 'complaint', label: 'Service Issue', description: 'Report a problem' },
    { value: 'compliment', label: 'Compliment', description: 'Share positive feedback' },
  ];

  const serviceTypes = [
    'Residential Duct Cleaning',
    'Commercial Duct Cleaning',
    'Dryer Vent Cleaning',
    'Sanitization Services',
    'HVAC Maintenance',
    'Air Quality Testing',
  ];

  const timeSlots = [
    'Morning (8AM - 12PM)',
    'Afternoon (12PM - 5PM)',
    'Evening (5PM - 8PM)',
    'Anytime during business hours',
    'Weekends only',
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low', description: 'No rush, flexible timing' },
    { value: 'medium', label: 'Medium', description: 'Within this week' },
    { value: 'high', label: 'High', description: 'Within 1-2 days' },
    { value: 'emergency', label: 'Emergency', description: 'Same day service needed' },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Implement API call
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      console.log('Contact form data:', data);
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
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-[#003A66] mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-[#1A2B34] mb-6">
              Thank you for contacting CleanAir Pro. We&apos;ve received your message and will 
              respond within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Call for Immediate Help
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="border border-gray-300 hover:bg-gray-50 text-[#4C6170] px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003A66] mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-[#1A2B34] max-w-2xl mx-auto">
            Have questions about our services? Need a quote? Just want to say hello? 
            Fill out the form below and we&apos;ll get back to you quickly.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

            {/* Inquiry Type */}
            <div>
              <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                What can we help you with?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inquiryTypes.map((type) => (
                  <label key={type.value} className="flex items-start p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('inquiryType')}
                      type="radio"
                      value={type.value}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1"
                    />
                    <div className="ml-3">
                      <div className="font-medium text-[#003A66]">{type.label}</div>
                      <div className="text-sm text-[#1A2B34]">{type.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.inquiryType && (
                <p className="text-red-600 text-sm mt-1">{errors.inquiryType.message}</p>
              )}
            </div>

            {/* Service Types (conditional) */}
            {(inquiryType === 'quote' || inquiryType === 'general') && (
              <div>
                <h3 className="text-lg font-semibold text-[#003A66] mb-4">
                  Services of Interest (Optional)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <label key={service} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        {...register('serviceType')}
                        type="checkbox"
                        value={service}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-[#003A66]">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Preferences */}
            <div>
              <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                Contact Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    Preferred Contact Method *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'phone', label: 'Phone Call' },
                      { value: 'email', label: 'Email' },
                      { value: 'text', label: 'Text Message' },
                    ].map((method) => (
                      <label key={method.value} className="flex items-center">
                        <input
                          {...register('preferredContact')}
                          type="radio"
                          value={method.value}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-[#003A66]">{method.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.preferredContact && (
                    <p className="text-red-600 text-sm mt-1">{errors.preferredContact.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    Best Time to Contact *
                  </label>
                  <select
                    {...register('bestTimeToContact')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                  >
                    <option value="">Select best time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.bestTimeToContact && (
                    <p className="text-red-600 text-sm mt-1">{errors.bestTimeToContact.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <h3 className="text-lg font-semibold text-[#003A66] mb-4 flex items-center">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                Your Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                    placeholder="Please provide details about your inquiry, including any specific questions or requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-[#003A66] mb-4">
                Additional Information (Optional)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    Property Address
                  </label>
                  <input
                    {...register('address')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                    placeholder="123 Main Street, Toronto, ON"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4C6170] mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    {...register('heardAboutUs')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-black text-base font-medium"
                  >
                    <option value="">Select option</option>
                    <option value="google">Google Search</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="social">Social Media</option>
                    <option value="website">Company Website</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-[#4C6170] mb-4">
                Urgency Level *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {urgencyLevels.map((level) => (
                  <label key={level.value} className="flex items-start p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      {...register('urgency')}
                      type="radio"
                      value={level.value}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 mt-1"
                    />
                    <div className="ml-3">
                      <div className="font-medium text-[#003A66]">{level.label}</div>
                      <div className="text-sm text-[#1A2B34]">{level.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.urgency && (
                <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
              )}
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
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
              <p className="text-sm text-[#1A2B34] text-center mt-4">
                We typically respond within 2 hours during business hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}