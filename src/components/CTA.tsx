import React from 'react';
import { Apple, ChevronRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-50 to-white"></div>
      
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your digital life?</h2>
              <p className="mb-8 text-indigo-100">
                Join thousands who have simplified their daily tasks with Agentify. Get started for free and see the magic happen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  Download on iOS
                </a>
                <a 
                  href="#" 
                  className="bg-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center hover:bg-indigo-800 transition-colors duration-300"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="p-10 bg-slate-800/20 h-full hidden lg:block">
              <div className="transform -rotate-12">
                <img 
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Agentify App" 
                  className="rounded-xl shadow-2xl transform hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">What apps can Agentify work with?</h4>
              <p className="text-slate-600">Agentify works with most popular apps including Spotify, Gmail, Instagram, Twitter, and many more. We're constantly adding new integrations.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Does Agentify access my personal data?</h4>
              <p className="text-slate-600">Privacy is our priority. Agentify only accesses the data necessary to perform your automations, and your data never leaves your device unless required for a specific automation.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Can I try Agentify for free?</h4>
              <p className="text-slate-600">Yes! The free plan lets you create up to 3 automations to experience the power of Agentify before upgrading.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">How do I create my first automation?</h4>
              <p className="text-slate-600">Simply open the app, tap the + button, and describe what you want to automate in plain language. Our AI will handle the rest!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;