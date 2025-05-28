import React from 'react';
import { MessageSquare, Code, Laptop, ShieldCheck } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex md:items-center gap-6 md:gap-10">
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg z-10 relative">
          {icon}
        </div>
        {number < 4 && (
          <div className="absolute w-px h-24 md:h-0 md:w-16 bg-gradient-to-b md:bg-gradient-to-r from-indigo-500 to-purple-500 left-1/2 -translate-x-1/2 top-14 md:top-1/2 md:left-14"></div>
        )}
      </div>
      
      <div className="flex-1 pb-10 md:pb-0">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Express Your Automation",
      description: "Type or say what you want to automate in plain language, just like texting a friend.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI Creates Your Agent",
      description: "Our AI instantly transforms your request into a custom automation agent that works across your apps.",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Automation Runs Seamlessly",
      description: "Your automation works in the background, handling tasks exactly when and how you specified.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Stay in Control",
      description: "Easily manage, edit or delete your automations anytime through our simple interface.",
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Agentify Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From your words to working automations in seconds. No menus, no coding, no friction.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-1/2 p-6">
              <Step number={1} {...steps[0]} />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <Step number={2} {...steps[1]} />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <Step number={3} {...steps[2]} />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <Step number={4} {...steps[3]} />
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#download" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;