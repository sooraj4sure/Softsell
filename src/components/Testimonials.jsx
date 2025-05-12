
import React from "react";

const testimonials = [
  { name: "Alice", text: "Amazing UI, super clean!" },
  { name: "Bob", text: "Helped me launch my SaaS in a day." }
];

const Testimonials = () => (
  <section className="py-16 px-4 bg-muted">
    <h3 className="text-2xl font-semibold text-center mb-8">What Our Users Say</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="p-6 border rounded-xl bg-background">
          <p className="italic">"{t.text}"</p>
          <p className="mt-4 text-sm font-semibold">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
