import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';
import { Wind, Home, Factory, Shield, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  startingPrice: string;
  duration: string;
  guarantee: string;
  href: string;
  popular?: boolean;
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 'residential-duct-cleaning',
      title: 'Residential Duct Cleaning',
      description: 'Complete air duct cleaning for homes and apartments to improve indoor air quality.',
      longDescription: 'Our residential duct cleaning service provides a comprehensive cleaning of your entire HVAC system, including supply and return air ducts, registers, grilles, diffusers, heat exchangers, heating and cooling coils, condensate drain pans, fan motor and housing, and the air handling unit housing.',
      icon: <Home className="h-12 w-12" />,
      features: [
        'Complete system inspection',
        'HEPA filtration cleaning',
        'Before/after photos',
        'Sanitization treatment',
        'Filter replacement',
        'System performance check'
      ],
      benefits: [
        'Improved indoor air quality',
        'Reduced allergens and dust',
        'Better HVAC efficiency',
        'Cleaner living environment',
        'Reduced energy costs'
      ],
      startingPrice: '$299',
      duration: '2-4 hours',
      guarantee: '2-year service warranty',
      href: '/services/residential-duct-cleaning',
      popular: true,
    },
    {
      id: 'commercial-duct-cleaning',
      title: 'Commercial Duct Cleaning',
      description: 'Professional duct cleaning services for offices, restaurants, and commercial buildings.',
      longDescription: 'Our commercial duct cleaning service is designed for businesses that need to maintain optimal air quality for employees and customers. We work with minimal disruption to your operations and provide comprehensive documentation for compliance requirements.',
      icon: <Factory className="h-12 w-12" />,
      features: [
        'Large-scale system cleaning',
        'Minimal business disruption',
        'Compliance documentation',
        'Flexible scheduling',
        'Team of certified technicians',
        'Emergency service available'
      ],
      benefits: [
        'Healthier work environment',
        'Compliance with regulations',
        'Reduced sick days',
        'Lower maintenance costs',
        'Professional reputation'
      ],
      startingPrice: '$599',
      duration: '4-8 hours',
      guarantee: 'Compliance guarantee',
      href: '/services/commercial-duct-cleaning',
    },
    {
      id: 'dryer-vent-cleaning',
      title: 'Dryer Vent Cleaning',
      description: 'Professional dryer vent cleaning to prevent fires and improve efficiency.',
      longDescription: 'Dryer vent cleaning is crucial for fire prevention and energy efficiency. Our service includes cleaning the entire vent system from the dryer to the exterior vent, removing lint buildup, and inspecting for proper ventilation.',
      icon: <Wind className="h-12 w-12" />,
      features: [
        'Complete vent system cleaning',
        'Lint removal and disposal',
        'Safety inspection',
        'Airflow testing',
        'Vent repair if needed',
        'Fire prevention focus'
      ],
      benefits: [
        'Fire risk reduction',
        'Energy savings',
        'Faster drying times',
        'Extended dryer life',
        'Insurance compliance'
      ],
      startingPrice: '$149',
      duration: '1-2 hours',
      guarantee: 'Safety guarantee',
      href: '/services/dryer-vent-cleaning',
    },
    {
      id: 'sanitization-services',
      title: 'Sanitization Services',
      description: 'Advanced sanitization and disinfection of your HVAC system.',
      longDescription: 'Our sanitization service uses EPA-approved antimicrobial treatments to eliminate bacteria, viruses, mold, and other harmful microorganisms from your HVAC system. This service is especially important for homes with allergies, asthma, or immune-compromised individuals.',
      icon: <Shield className="h-12 w-12" />,
      features: [
        'EPA-approved antimicrobials',
        'Virus and bacteria elimination',
        'Mold prevention treatment',
        'Allergen neutralization',
        'Safe for family and pets',
        'Long-lasting protection'
      ],
      benefits: [
        'Healthier indoor air',
        'Reduced allergies',
        'Virus protection',
        'Mold prevention',
        'Peace of mind'
      ],
      startingPrice: '$199',
      duration: '1-3 hours',
      guarantee: 'Health safety guarantee',
      href: '/services/sanitization',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Inspection & Assessment',
      description: 'Thorough inspection of your HVAC system to identify issues and cleaning requirements.',
    },
    {
      step: 2,
      title: 'System Preparation',
      description: 'Protect your home and prepare the system for cleaning with specialized equipment.',
    },
    {
      step: 3,
      title: 'Deep Cleaning',
      description: 'Use powerful HEPA-filtered equipment to remove all contaminants from your ducts.',
    },
    {
      step: 4,
      title: 'Sanitization',
      description: 'Apply EPA-approved antimicrobial treatment to eliminate harmful microorganisms.',
    },
    {
      step: 5,
      title: 'Final Inspection',
      description: 'Verify cleaning quality and provide documentation with before/after photos.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Duct Cleaning Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive HVAC cleaning solutions for residential and commercial properties. 
              Improve your air quality with our certified technicians and state-of-the-art equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  service.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 px-4 text-sm font-semibold">
                    Most Popular Service
                  </div>
                )}
                
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">
                        {service.startingPrice}
                      </div>
                      <div className="text-sm text-gray-500">Starting at</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold text-gray-900">{service.duration}</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Guarantee</div>
                      <div className="font-semibold text-gray-900">{service.guarantee}</div>
                    </div>
                    <div className="text-center">
                      <Star className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Rating</div>
                      <div className="font-semibold text-gray-900">4.9/5</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={service.href}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/quote"
                      className="flex-1 border border-blue-600 hover:bg-blue-50 text-blue-600 py-3 px-4 rounded-lg font-semibold transition-colors text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven 5-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the highest quality cleaning 
              and complete customer satisfaction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 mt-16 w-0.5 h-8 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Improve Your Air Quality?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our certified technicians are ready 
            to help you breathe easier with professional duct cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}