import React from "react";
import { ShieldCheck, Zap, ThumbsUp, Clock } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={28} className="text-blue-600 dark:text-blue-400" />,
      title: "Trusted & Secure",
      description: "We ensure every transaction is encrypted and verified for maximum security.",
    },
    {
      icon: <Zap size={28} className="text-blue-600 dark:text-blue-400" />,
      title: "Instant Quotes",
      description: "Receive a valuation for your license within minutes.",
    },
    {
      icon: <ThumbsUp size={28} className="text-blue-600 dark:text-blue-400" />,
      title: "Hassle-Free",
      description: "We handle the heavy lifting — just upload your license and relax.",
    },
    {
      icon: <Clock size={28} className="text-blue-600 dark:text-blue-400" />,
      title: "24/7 Support",
      description: "Our support team is available anytime you need help.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">Why Choose Us</h2>
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};