import { MainLayout } from '@/components/layouts/MainLayout';
import { ContactForm } from '@/components/forms/ContactForm';
import { ServiceAreaMap } from '@/components/ui/ServiceAreaMap';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone',
      subtitle: 'Call us directly',
      contact: '(555) 123-4567',
      action: 'tel:+15551234567',
      description: 'Available 24/7 for emergencies',
      available: '24/7',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email',
      subtitle: 'Send us a message',
      contact: 'info@cleanairpro.com',
      action: 'mailto:info@cleanairpro.com',
      description: 'We respond within 2 hours',
      available: '< 2 hours',
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Text Message',
      subtitle: 'Quick questions',
      contact: '(555) 123-4567',
      action: 'sms:+15551234567',
      description: 'Text us for quick responses',
      available: '< 30 min',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
  ];

  const whyChooseUs = [
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals with comprehensive insurance coverage',
    },
    {
      title: 'Same-Day Service',
      description: 'Emergency and urgent cleaning services available 24/7',
    },
    {
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or we&apos;ll make it right',
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees, upfront pricing with detailed estimates',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Professional customer service team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact CleanAir Pro
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to improve your indoor air quality? Get in touch with our certified 
              technicians for a free consultation and quote. We&apos;re here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </a>
              <a
                href="#contact-form"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We&apos;re committed to 
              providing quick responses and excellent customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.subtitle}</p>
                <div className="text-2xl font-bold text-blue-900 mb-2">
                  {method.contact}
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="inline-flex items-center text-sm text-green-600 font-semibold">
                  <Clock className="h-4 w-4 mr-1" />
                  Response: {method.available}
                </div>
              </a>
            ))}
          </div>

          {/* Office Hours & Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center text-orange-800">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="font-semibold">24/7 Emergency Service Available</span>
                </div>
                <p className="text-orange-700 text-sm mt-1">
                  We&apos;re here when you need us most, including evenings, weekends, and holidays.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Location
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                  <p className="text-gray-700">
                    123 Main Street<br />
                    Toronto, ON M5V 3A8<br />
                    Canada
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Area</h4>
                  <p className="text-gray-700">
                    Greater Toronto Area including Toronto, Mississauga, Brampton, 
                    Markham, Richmond Hill, Vaughan, and surrounding areas.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white">
        <ContactForm />
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CleanAir Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional service and complete customer satisfaction. 
              Here&apos;s what sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-blue-900 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">
              Trusted by Hundreds of Customers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-blue-100">4.9/5 Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <ServiceAreaMap />

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emergency Duct Cleaning?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don&apos;t wait! If you&apos;re experiencing poor air quality, strange odors, or 
              HVAC issues, contact us immediately for emergency service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
              <a
                href="sms:+15551234567"
                className="border-2 border-white hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Text Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}