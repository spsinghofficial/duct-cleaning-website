'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Home, Building, Wind, Shield, Plus } from 'lucide-react';

interface CalculatorResult {
  basePrice: number;
  addOns: { name: string; price: number }[];
  discount: number;
  total: number;
}

export function PricingCalculator() {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('basic');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const propertyTypes = [
    { value: 'residential', label: 'Residential', icon: <Home className="h-5 w-5" /> },
    { value: 'commercial', label: 'Commercial', icon: <Building className="h-5 w-5" /> },
  ];

  const squareFootageOptions = [
    { value: 'under-1000', label: 'Under 1,000 sq ft', multiplier: 0.8 },
    { value: '1000-2000', label: '1,000 - 2,000 sq ft', multiplier: 1.0 },
    { value: '2000-3000', label: '2,000 - 3,000 sq ft', multiplier: 1.3 },
    { value: '3000-5000', label: '3,000 - 5,000 sq ft', multiplier: 1.6 },
    { value: 'over-5000', label: 'Over 5,000 sq ft', multiplier: 2.0 },
  ];

  const serviceTypes = {
    residential: [
      { value: 'basic', label: 'Basic Clean', basePrice: 299, description: 'Standard duct cleaning service' },
      { value: 'complete', label: 'Complete Clean', basePrice: 399, description: 'Comprehensive cleaning with coils' },
      { value: 'premium', label: 'Premium Clean', basePrice: 499, description: 'Ultimate service with extras' },
    ],
    commercial: [
      { value: 'basic', label: 'Basic Commercial', basePrice: 599, description: 'Standard commercial cleaning' },
      { value: 'complete', label: 'Complete Commercial', basePrice: 799, description: 'Comprehensive commercial service' },
      { value: 'premium', label: 'Premium Commercial', basePrice: 999, description: 'Full commercial package' },
    ],
  };

  const availableAddOns = [
    { id: 'dryer-vent', name: 'Dryer Vent Cleaning', price: 149, icon: <Wind className="h-4 w-4" /> },
    { id: 'sanitization', name: 'Sanitization Treatment', price: 199, icon: <Shield className="h-4 w-4" /> },
    { id: 'filter-replacement', name: 'Premium Filter Upgrade', price: 79, icon: <Wind className="h-4 w-4" /> },
    { id: 'uv-light', name: 'UV Light Installation', price: 299, icon: <Shield className="h-4 w-4" /> },
  ];

  const calculatePrice = () => {
    const selectedService = serviceTypes[propertyType].find(s => s.value === serviceType);
    const selectedFootage = squareFootageOptions.find(f => f.value === squareFootage);
    
    if (!selectedService || !selectedFootage) {
      setResult(null);
      return;
    }

    const basePrice = selectedService.basePrice * selectedFootage.multiplier;
    const selectedAddOns = availableAddOns.filter(addon => addOns.includes(addon.id));
    const addOnTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
    
    // Apply discounts
    let discount = 0;
    if (selectedAddOns.length >= 2) {
      discount = addOnTotal * 0.1; // 10% discount for 2+ add-ons
    }

    const total = basePrice + addOnTotal - discount;

    setResult({
      basePrice,
      addOns: selectedAddOns,
      discount,
      total,
    });
  };

  useEffect(() => {
    calculatePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType, squareFootage, serviceType, addOns]);

  const toggleAddOn = (addonId: string) => {
    setAddOns(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get an instant estimate for your duct cleaning service. 
              Customize your package and see transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
              {/* Property Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Property Type
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setPropertyType(type.value as 'residential' | 'commercial')}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                        propertyType === type.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {type.icon}
                      <span className="font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Footage */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Square Footage
                </h3>
                <select
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select square footage</option>
                  {squareFootageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Service Package
                </h3>
                <div className="space-y-3">
                  {serviceTypes[propertyType].map((service) => (
                    <label
                      key={service.value}
                      className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        serviceType === service.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.value}
                        checked={serviceType === service.value}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-gray-900">{service.label}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                        <div className="text-xl font-bold text-blue-600">
                          ${service.basePrice}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Add-On Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableAddOns.map((addon) => (
                    <label
                      key={addon.id}
                      className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        addOns.includes(addon.id)
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={addOns.includes(addon.id)}
                        onChange={() => toggleAddOn(addon.id)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-gray-600">
                            {addon.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{addon.name}</div>
                            <div className="text-sm text-gray-600">${addon.price}</div>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          addOns.includes(addon.id)
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-gray-300'
                        }`}>
                          {addOns.includes(addon.id) ? (
                            <Plus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {addOns.length >= 2 && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                    <div className="text-green-800 font-medium flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      10% Discount Applied for Multiple Add-ons!
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Price Estimate
                </h3>

                {result ? (
                  <div className="space-y-4">
                    {/* Base Service */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Base Service</span>
                      <span className="font-semibold">${result.basePrice.toFixed(0)}</span>
                    </div>

                    {/* Add-ons */}
                    {result.addOns.map((addon, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{addon.name}</span>
                        <span className="text-gray-900">+${addon.price}</span>
                      </div>
                    ))}

                    {/* Discount */}
                    {result.discount > 0 && (
                      <div className="flex justify-between items-center text-sm text-green-600">
                        <span>Multi-service discount</span>
                        <span>-${result.discount.toFixed(0)}</span>
                      </div>
                    )}

                    {/* Total */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ${result.total.toFixed(0)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Starting estimate
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3 mt-6">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                        Get Exact Quote
                      </button>
                      <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors">
                        Call for Details
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Select your options above to see pricing</p>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    * This is an estimate only. Final pricing may vary based on actual 
                    conditions, accessibility, and additional services required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}