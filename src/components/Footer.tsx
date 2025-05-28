import React from 'react';
import { Zap, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-indigo-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                agentify
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              AI automation made as easy as texting. Transform your digital life with smart agents that work across your favorite apps.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors duration-200">Features</a></li>
              <li><a href="#pricing" className="text-slate-400 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Changelog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Agentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;