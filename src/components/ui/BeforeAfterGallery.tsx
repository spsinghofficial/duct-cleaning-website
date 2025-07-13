'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, Calendar, MapPin, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  date: string;
  serviceType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  improvements: string[];
}

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'before' | 'after' | 'split'>('split');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Residential Home - Main Return Duct',
      location: 'Toronto, ON',
      date: '2024-01-15',
      serviceType: 'Complete Residential Cleaning',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'Heavy dust and debris accumulation in main return duct of a 3-bedroom home.',
      improvements: [
        'Removed 15+ years of dust buildup',
        'Eliminated pet dander and allergens',
        'Improved airflow by 35%',
        'Reduced energy consumption'
      ],
    },
    {
      id: '2',
      title: 'Commercial Office - Supply Duct',
      location: 'Mississauga, ON',
      date: '2024-01-12',
      serviceType: 'Commercial Duct Cleaning',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'Office building with significant contamination from construction dust.',
      improvements: [
        'Removed construction debris',
        'Eliminated dust particles',
        'Improved indoor air quality',
        'Better employee comfort'
      ],
    },
    {
      id: '3',
      title: 'Residential Basement - Return Air Vent',
      location: 'Brampton, ON',
      date: '2024-01-10',
      serviceType: 'Premium Residential Service',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'Basement return vent with mold growth and moisture damage.',
      improvements: [
        'Completely removed mold',
        'Sanitized entire system',
        'Eliminated musty odors',
        'Prevented health risks'
      ],
    },
    {
      id: '4',
      title: 'Restaurant Kitchen - Exhaust Duct',
      location: 'Markham, ON',
      date: '2024-01-08',
      serviceType: 'Commercial Kitchen Cleaning',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'Restaurant kitchen exhaust system with grease buildup.',
      improvements: [
        'Removed fire hazard grease',
        'Improved ventilation efficiency',
        'Met health code requirements',
        'Reduced insurance liability'
      ],
    },
    {
      id: '5',
      title: 'Residential Home - Dryer Vent',
      location: 'Richmond Hill, ON',
      date: '2024-01-05',
      serviceType: 'Dryer Vent Cleaning',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'Severely clogged dryer vent posing fire risk.',
      improvements: [
        'Eliminated fire hazard',
        'Reduced drying time by 50%',
        'Improved energy efficiency',
        'Extended dryer lifespan'
      ],
    },
    {
      id: '6',
      title: 'Condo Unit - HVAC Coils',
      location: 'Vaughan, ON',
      date: '2024-01-03',
      serviceType: 'Complete System Cleaning',
      beforeImage: '/api/placeholder/600/400',
      afterImage: '/api/placeholder/600/400',
      description: 'HVAC coils with heavy dust and debris affecting efficiency.',
      improvements: [
        'Restored optimal airflow',
        'Improved cooling efficiency',
        'Reduced energy costs',
        'Extended equipment life'
      ],
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setViewMode('split');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Before & After Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic difference our professional duct cleaning makes. 
            These real customer results demonstrate the effectiveness of our thorough cleaning process.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Before Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">BEFORE</div>
                      <div className="text-lg opacity-90">Dirty & Contaminated</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold mb-2">AFTER</div>
                      <div className="text-lg opacity-90">Clean & Sanitized</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Item Details */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">
                  {galleryItems[currentIndex].title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {galleryItems[currentIndex].location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(galleryItems[currentIndex].date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {galleryItems[currentIndex].description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems[currentIndex].improvements.map((improvement, index) => (
                  <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-green-600 font-semibold text-sm">
                      {improvement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevImage}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-semibold">View Details</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  BEFORE/AFTER
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{item.location}</span>
                  <span>{item.serviceType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedItem.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('before')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      viewMode === 'before'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Before Only
                  </button>
                  <button
                    onClick={() => setViewMode('split')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      viewMode === 'split'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Split View
                  </button>
                  <button
                    onClick={() => setViewMode('after')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      viewMode === 'after'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    After Only
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Images */}
                <div className="mb-6">
                  {viewMode === 'split' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <div className="aspect-[4/3] bg-red-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-red-700 mb-2">BEFORE</div>
                            <div className="text-red-600">Contaminated Ductwork</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-[4/3] bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-700 mb-2">AFTER</div>
                            <div className="text-green-600">Clean & Sanitized</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode === 'before' && (
                    <div className="aspect-[4/3] bg-red-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-700 mb-2">BEFORE</div>
                        <div className="text-red-600">Contaminated Ductwork</div>
                      </div>
                    </div>
                  )}
                  
                  {viewMode === 'after' && (
                    <div className="aspect-[4/3] bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700 mb-2">AFTER</div>
                        <div className="text-green-600">Clean & Sanitized</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Project Details
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        {selectedItem.location}
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        {new Date(selectedItem.date).toLocaleDateString()}
                      </div>
                      <div className="text-gray-700">
                        <span className="font-medium">Service:</span> {selectedItem.serviceType}
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Improvements Achieved
                    </h4>
                    <ul className="space-y-2">
                      {selectedItem.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}