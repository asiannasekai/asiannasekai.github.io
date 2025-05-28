import React from 'react';
import { Brain, Wand2, Shield, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Natural Language Understanding",
      description: "Just tell Agentify what you want to automate in simple words, and our AI understands your intent instantly.",
      delay: "0ms"
    },
    {
      icon: <Wand2 className="w-7 h-7" />,
      title: "Agent Compiler",
      description: "Our magic happens behind the scenes, turning your words into powerful cross-app automations.",
      delay: "100ms"
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Execution Layer",
      description: "Automations run seamlessly on your device or in the cloud, taking action exactly when needed.",
      delay: "200ms"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Privacy-First Control",
      description: "You're always in control. Easy management of all your automations with strong privacy protection.",
      delay: "300ms"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Powerful
            </span> yet simple
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our technology makes complex automations feel effortless, working quietly in the background while you focus on what matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;