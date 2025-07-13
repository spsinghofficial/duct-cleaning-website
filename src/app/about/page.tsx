import { MainLayout } from '@/components/layouts/MainLayout';
import { BeforeAfterGallery } from '@/components/ui/BeforeAfterGallery';
import Link from 'next/link';
import { 
  Award, 
  Users, 
  Shield, 
  
  CheckCircle, 
  Star,
  Heart,
  Target,
  Zap,
  Phone
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Serving the GTA community',
    },
    {
      number: '500+',
      label: 'Happy Customers',
      description: 'Residential & commercial',
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Based on reviews',
    },
    {
      number: '24/7',
      label: 'Emergency Service',
      description: 'Available when needed',
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Customer First',
      description: 'Every decision we make prioritizes our customers&apos; health, satisfaction, and peace of mind.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality & Safety',
      description: 'We use only the best equipment and follow strict safety protocols to protect your family and property.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We provide clear communication and honest pricing every time.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We continuously improve our methods and training to deliver the best possible service.',
    },
  ];

  const team = [
    {
      name: 'Michael Johnson',
      role: 'Founder & CEO',
      experience: '15+ years',
      certifications: ['NADCA Certified', 'IICRC Certified'],
      description: 'Started CleanAir Pro with a mission to improve indoor air quality for families across the GTA.',
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      experience: '8+ years',
      certifications: ['HVAC Specialist', 'Safety Coordinator'],
      description: 'Ensures every job meets our high standards and customers receive exceptional service.',
    },
    {
      name: 'David Rodriguez',
      role: 'Lead Technician',
      experience: '10+ years',
      certifications: ['NADCA Certified', 'Master Technician'],
      description: 'Trains our team and leads complex commercial cleaning projects throughout the region.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Customer Relations',
      experience: '5+ years',
      certifications: ['Customer Service Excellence'],
      description: 'Dedicated to ensuring every customer has a positive experience from quote to completion.',
    },
  ];

  const certifications = [
    {
      name: 'NADCA Certified',
      description: 'National Air Duct Cleaners Association',
      importance: 'Industry gold standard for duct cleaning',
    },
    {
      name: 'IICRC Certified',
      description: 'Institute of Inspection, Cleaning and Restoration',
      importance: 'Certified in cleaning and restoration',
    },
    {
      name: 'Better Business Bureau',
      description: 'A+ Rating',
      importance: 'Trusted business practices',
    },
    {
      name: 'WSIB Insured',
      description: 'Workplace Safety Insurance Board',
      importance: 'Full liability coverage',
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started as a small family business with a focus on residential duct cleaning.',
    },
    {
      year: '2012',
      title: 'Commercial Expansion',
      description: 'Expanded services to include commercial and industrial duct cleaning.',
    },
    {
      year: '2015',
      title: 'NADCA Certification',
      description: 'Achieved NADCA certification, setting new quality standards.',
    },
    {
      year: '2018',
      title: '24/7 Emergency Service',
      description: 'Launched round-the-clock emergency service for urgent situations.',
    },
    {
      year: '2021',
      title: 'Advanced Sanitization',
      description: 'Added UV sanitization and advanced air quality services.',
    },
    {
      year: '2024',
      title: 'Serving 500+ Customers',
      description: 'Reached milestone of serving over 500 satisfied customers.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CleanAir Pro
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              For over 15 years, we&apos;ve been the Greater Toronto Area&apos;s trusted choice 
              for professional duct cleaning services. Our mission is simple: help families 
              and businesses breathe cleaner, healthier air.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-100">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    CleanAir Pro was founded in 2009 by Michael Johnson, a former HVAC technician 
                    who recognized the need for truly professional duct cleaning services in the 
                    Greater Toronto Area. After seeing too many homeowners receive subpar service 
                    from other companies, Michael set out to create a business that would set 
                    new standards for quality and customer care.
                  </p>
                  <p>
                    What started as a one-person operation has grown into a team of certified 
                    professionals serving hundreds of residential and commercial customers 
                    throughout the GTA. Despite our growth, we&apos;ve never lost sight of our 
                    core mission: providing exceptional service that genuinely improves indoor 
                    air quality and customer satisfaction.
                  </p>
                  <p>
                    Today, CleanAir Pro is proud to be NADCA certified, fully insured, and 
                    trusted by families and businesses who demand the best. We continue to 
                    invest in the latest equipment, training, and techniques to ensure every 
                    customer receives the highest quality service possible.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="text-center">
                  <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Award-Winning Service
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Customer Satisfaction</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">BBB Rating</span>
                      <span className="font-semibold text-blue-600">A+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">NADCA Certified</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Fully Insured</span>
                      <Shield className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from how we treat customers 
              to the quality standards we maintain in every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals are the heart of CleanAir Pro. 
              Each team member is trained, experienced, and committed to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {member.experience} experience
                </div>
                <div className="space-y-1 mb-4">
                  {member.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full inline-block mr-1">
                      {cert}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming the GTA&apos;s trusted duct cleaning experts, 
              here&apos;s how we&apos;ve grown and evolved over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm mx-auto mb-2">
                      {event.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 mx-auto"></div>
                    )}
                  </div>
                  <div className="flex-1 ml-6 bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest industry certifications to ensure 
              professional service and your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <div className="text-sm text-gray-600 mb-3">
                  {cert.description}
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  {cert.importance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the CleanAir Pro Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust CleanAir Pro for 
            professional, reliable duct cleaning services throughout the GTA.
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