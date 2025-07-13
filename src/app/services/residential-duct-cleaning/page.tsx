import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  
  Shield, 
  Star, 
  Phone, 
  ArrowRight,
  Wind,
  ThermometerSun,
  Filter,
  Zap
} from 'lucide-react';

export default function ResidentialDuctCleaningPage() {
  const features = [
    {
      icon: <Wind className="h-6 w-6" />,
      title: 'Complete System Cleaning',
      description: 'We clean your entire HVAC system including supply and return air ducts, registers, grilles, and diffusers.',
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: 'HEPA Filtration',
      description: 'Our powerful HEPA-filtered equipment captures 99.97% of particles as small as 0.3 microns.',
    },
    {
      icon: <ThermometerSun className="h-6 w-6" />,
      title: 'Heating & Cooling Coils',
      description: 'We clean heat exchangers, heating and cooling coils, and condensate drain pans.',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Motor & Housing Cleaning',
      description: 'Complete cleaning of fan motor, housing, and air handling unit housing.',
    },
  ];

  const benefits = [
    'Improved indoor air quality',
    'Reduced allergens and dust',
    'Better HVAC system efficiency',
    'Lower energy costs',
    'Extended equipment lifespan',
    'Cleaner living environment',
    'Reduced odors',
    'Better airflow throughout home',
  ];

  const process = [
    {
      step: 1,
      title: 'Pre-Inspection',
      description: 'Thorough assessment of your HVAC system and identification of problem areas.',
    },
    {
      step: 2,
      title: 'System Access',
      description: 'Create access points in your ductwork for proper cleaning equipment insertion.',
    },
    {
      step: 3,
      title: 'Powerful Suction',
      description: 'Use truck-mounted vacuum system to create negative pressure throughout your ducts.',
    },
    {
      step: 4,
      title: 'Agitation Cleaning',
      description: 'Use specialized brushes and air whips to dislodge debris from duct walls.',
    },
    {
      step: 5,
      title: 'Sanitization',
      description: 'Apply EPA-approved antimicrobial treatment to eliminate bacteria and mold.',
    },
    {
      step: 6,
      title: 'Final Inspection',
      description: 'Complete system check and provide before/after photos and documentation.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Basic Clean',
      price: '$299',
      description: 'Perfect for regular maintenance cleaning',
      features: [
        'Supply & return duct cleaning',
        'Register cleaning',
        'Basic system inspection',
        'Before/after photos',
        '1-year warranty',
      ],
      popular: false,
    },
    {
      name: 'Complete Clean',
      price: '$399',
      description: 'Our most popular comprehensive service',
      features: [
        'Everything in Basic Clean',
        'Heating & cooling coil cleaning',
        'Blower motor cleaning',
        'Sanitization treatment',
        'New air filter included',
        '2-year warranty',
      ],
      popular: true,
    },
    {
      name: 'Premium Clean',
      price: '$499',
      description: 'Ultimate cleaning with extras',
      features: [
        'Everything in Complete Clean',
        'Dryer vent cleaning included',
        'UV light sanitization',
        'Duct sealing (minor leaks)',
        'Energy efficiency report',
        '3-year warranty',
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'How often should I have my ducts cleaned?',
      answer: 'We recommend professional duct cleaning every 3-5 years for most homes, or more frequently if you have pets, allergies, or have recently completed renovations.',
    },
    {
      question: 'How long does the cleaning process take?',
      answer: 'A typical residential duct cleaning takes 2-4 hours depending on the size of your home and the complexity of your HVAC system.',
    },
    {
      question: 'Will duct cleaning reduce my energy bills?',
      answer: 'Yes! Clean ducts improve airflow efficiency, which can reduce energy consumption by 10-25% according to EPA studies.',
    },
    {
      question: 'Do you provide before and after photos?',
      answer: 'Absolutely! We document our work with before and after photos so you can see the difference our cleaning makes.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Home className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Residential Duct Cleaning
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional HVAC duct cleaning for homes and apartments. Improve your 
              indoor air quality and system efficiency with our comprehensive cleaning service.
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included in Our Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive residential duct cleaning service covers every component 
              of your HVAC system to ensure optimal air quality and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits of Professional Duct Cleaning
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Clean air ducts provide numerous benefits for your home, health, and wallet. 
                Here&apos;s what you can expect after our professional service.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">2-4 Hours</div>
                <div className="text-lg text-gray-700 mb-6">Average Cleaning Time</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">2-Year Warranty</div>
                    <div className="text-sm text-gray-600">Service guarantee</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">4.9/5 Rating</div>
                    <div className="text-sm text-gray-600">Customer satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Step Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure thorough cleaning and 
              complete customer satisfaction.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the service level that best fits your needs and budget. 
              All prices include equipment, labor, and our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-lg overflow-hidden ${
                  tier.popular
                    ? 'ring-2 ring-orange-500 transform scale-105'
                    : 'bg-white'
                }`}
              >
                {tier.popular && (
                  <div className="bg-orange-500 text-white text-center py-3 px-4 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-900">{tier.price}</div>
                    <div className="text-gray-500">Starting price</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/quote"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${
                      tier.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Get This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions about our residential duct cleaning service? 
              Here are answers to the most common questions we receive.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Breathe Cleaner Air?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your residential duct cleaning. 
            Our certified technicians are ready to improve your home&apos;s air quality today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}