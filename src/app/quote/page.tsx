import { MainLayout } from '@/components/layouts/MainLayout';
import { QuickQuoteForm } from '@/components/forms/QuickQuoteForm';
import { PricingCalculator } from '@/components/ui/PricingCalculator';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { 
  Calculator, 
  Clock, 
  CheckCircle, 
  Phone, 
  Star,
  Shield,
  Award
} from 'lucide-react';

export default function QuotePage() {
  const quoteProcess = [
    {
      step: 1,
      title: 'Submit Request',
      description: 'Fill out our detailed quote form with your property information and service needs.',
      duration: '2 minutes',
    },
    {
      step: 2,
      title: 'Property Assessment',
      description: 'Our team reviews your request and may schedule a brief inspection if needed.',
      duration: '30 minutes',
    },
    {
      step: 3,
      title: 'Custom Quote',
      description: 'Receive a detailed, customized quote with transparent pricing and service options.',
      duration: '2 hours',
    },
    {
      step: 4,
      title: 'Schedule Service',
      description: 'Book your preferred date and time with our certified technicians.',
      duration: '1 minute',
    },
  ];

  const guarantees = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'No Hidden Fees',
      description: 'Our quotes include all costs upfront with no surprise charges.',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Price Match Guarantee',
      description: 'We&apos;ll match any legitimate competitor quote for equivalent service.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or we&apos;ll make it right at no cost.',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Fixed Pricing',
      description: 'Your quote is locked in - no price increases once you approve.',
    },
  ];

  const quickFacts = [
    {
      number: '< 2',
      label: 'Hours',
      description: 'Average quote response time',
    },
    {
      number: '0',
      label: 'Hidden Fees',
      description: 'Transparent, upfront pricing',
    },
    {
      number: '500+',
      label: 'Happy Customers',
      description: 'Trusted throughout GTA',
    },
    {
      number: '100%',
      label: 'Satisfaction',
      description: 'Money-back guarantee',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Calculator className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transparent, competitive pricing for professional duct cleaning services. 
              Get a detailed quote in under 2 hours with no obligations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {quickFacts.map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    {fact.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {fact.label}
                  </div>
                  <div className="text-sm text-blue-100">
                    {fact.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote-form"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get My Quote
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call for Instant Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Quote Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting a quote is quick and easy. We&apos;ve streamlined the process 
              to get you accurate pricing as fast as possible.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quoteProcess.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-blue-600 font-semibold">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  {index < quoteProcess.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300 translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Main Quote Form */}
      <section id="quote-form">
        <QuickQuoteForm />
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quote Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our quotes with these customer-focused guarantees. 
              Your satisfaction and trust are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quote Questions & Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our quoting process and pricing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How accurate are your online quotes?
                  </h3>
                  <p className="text-gray-700">
                    Our online quotes are 85-95% accurate. Final pricing may vary slightly 
                    based on actual property conditions and accessibility.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do you charge for quotes?
                  </h3>
                  <p className="text-gray-700">
                    No! All quotes are completely free with no obligations. We only charge 
                    when you book and approve our services.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I get a quote over the phone?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Call us at (555) 123-4567 for an immediate phone quote. 
                    We can usually provide pricing in under 10 minutes.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long are quotes valid?
                  </h3>
                  <p className="text-gray-700">
                    Our quotes are valid for 30 days from the date issued. After 30 days, 
                    we&apos;ll be happy to provide an updated quote.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do you offer payment plans?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We offer flexible payment options including payment plans for 
                    larger projects. Ask about our financing options.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What&apos;s included in the quote?
                  </h3>
                  <p className="text-gray-700">
                    All labor, equipment, supplies, and cleanup are included. We provide 
                    itemized quotes so you know exactly what you&apos;re paying for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Free Quote?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust CleanAir Pro for 
            professional duct cleaning services at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get My Free Quote
            </a>
            <a
              href="tel:+15551234567"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}