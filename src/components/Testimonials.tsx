import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
      <p className="text-slate-600 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I set up Agentify to automatically save songs I like on streaming services to a shared playlist. Saves me so much time when discovering new music!",
      name: "Alex Morgan",
      role: "Music Producer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      quote: "As a busy professional, Agentify helps me automate email responses when I'm in meetings. It's like having a personal assistant that works across all my apps.",
      name: "Sarah Johnson",
      role: "Marketing Executive",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      quote: "I use Agentify to track my expenses by automatically cataloging receipts from my email. It's changed how I manage my finances, all without any coding.",
      name: "Michael Chen",
      role: "Financial Analyst",
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Are Saying</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of people who are automating their digital lives with Agentify.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;