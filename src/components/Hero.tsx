import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap } from 'lucide-react';

const automationExamples = [
  "When I like a song on Spotify, add it to my Chill Beats playlist",
  "Auto-reply to emails like 'Let's get lunch' with my availability",
  "If I save an Instagram post, download the image to my Photos",
  "Every morning, send me a text with today's weather and calendar"
];

const Hero: React.FC = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [typing, setTyping] = useState(true);
  const [text, setText] = useState('');
  const fullText = automationExamples[currentExample];

  useEffect(() => {
    if (typing) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTyping(false);
        const timeout = setTimeout(() => {
          setTyping(true);
          setText('');
          setCurrentExample((currentExample + 1) % automationExamples.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, typing, fullText, currentExample]);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI automation
              </span>
              <br />made as easy as texting
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Transform everyday tasks into smart automations with just your voice or text. No coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
              <a 
                href="#download" 
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-full border border-slate-200 bg-white text-slate-800 font-medium hover:shadow-md transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>
          
          <div className="relative lg:ml-12">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative border border-slate-100">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold">Agentify Assistant</h3>
                    <p className="text-xs text-slate-500">AI-powered automation</p>
                  </div>
                </div>
                
                <div className="mb-6 h-48 overflow-hidden flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="bg-indigo-100 rounded-xl rounded-tl-none p-4 max-w-xs">
                      <p className="text-sm">Tell me what you want to automate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4 self-end">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl rounded-tr-none p-4 max-w-xs">
                      <p className="text-sm">{text}<span className={`ml-1 ${typing ? 'inline-block' : 'hidden'}`}>|</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-auto animate-fade-in">
                    <div className="bg-indigo-100 rounded-xl rounded-tl-none p-4 max-w-xs">
                      <p className="text-sm">Got it! I've set up this automation for you. It's active now.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Type your automation..." 
                    className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;