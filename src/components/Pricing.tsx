import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  starter: boolean | string;
  pro: boolean | string;
  elite: boolean | string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const features: PlanFeature[] = [
    { name: "AI assistant features", starter: true, pro: true, elite: true },
    { name: "Cross-app automations", starter: "Basic", pro: "Advanced", elite: "Custom" },
    { name: "Number of active agents", starter: "5", pro: "25", elite: "Unlimited" },
    { name: "App integrations", starter: "10+", pro: "50+", elite: "100+" },
    { name: "Agent customization", starter: false, pro: true, elite: true },
    { name: "Proactive suggestions", starter: false, pro: false, elite: true },
    { name: "Priority support", starter: false, pro: true, elite: true },
    { name: "Custom modules", starter: false, pro: false, elite: true },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the plan that fits your automation needs.
          </p>
          
          <div className="flex items-center justify-center mt-8 mb-10">
            <div className="bg-white p-1 rounded-full border border-slate-200 flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'text-slate-600'
                }`}
              >
                Yearly <span className="text-xs">(-20%)</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-slate-600 mb-6">Perfect for getting started with automations</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {billingCycle === 'monthly' ? '$4.99' : '$47.90'}
                </span>
                <span className="text-slate-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <a 
                href="#download" 
                className="block w-full py-3 rounded-full border border-indigo-600 text-indigo-600 text-center font-medium hover:bg-indigo-50 transition-colors duration-300 mb-8"
              >
                Get Started
              </a>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.starter === true ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : feature.starter === false ? (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    )}
                    <span className="ml-3 text-sm text-slate-600">
                      {feature.name}
                      {typeof feature.starter === 'string' && (
                        <span className="block text-xs text-slate-500">{feature.starter}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-white rounded-2xl border border-indigo-200 overflow-hidden shadow-lg relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-slate-600 mb-6">For power users who automate daily</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {billingCycle === 'monthly' ? '$9.99' : '$95.90'}
                </span>
                <span className="text-slate-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <a 
                href="#download" 
                className="block w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 mb-8"
              >
                Get Started
              </a>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.pro === true ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : feature.pro === false ? (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    )}
                    <span className="ml-3 text-sm text-slate-600">
                      {feature.name}
                      {typeof feature.pro === 'string' && (
                        <span className="block text-xs text-slate-500">{feature.pro}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Elite Plan */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2">Elite</h3>
              <p className="text-slate-600 mb-6">For automation enthusiasts and pros</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {billingCycle === 'monthly' ? '$19.99' : '$191.90'}
                </span>
                <span className="text-slate-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <a 
                href="#download" 
                className="block w-full py-3 rounded-full border border-indigo-600 text-indigo-600 text-center font-medium hover:bg-indigo-50 transition-colors duration-300 mb-8"
              >
                Get Started
              </a>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.elite === true ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : feature.elite === false ? (
                      <X className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    ) : (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    )}
                    <span className="ml-3 text-sm text-slate-600">
                      {feature.name}
                      {typeof feature.elite === 'string' && (
                        <span className="block text-xs text-slate-500">{feature.elite}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;