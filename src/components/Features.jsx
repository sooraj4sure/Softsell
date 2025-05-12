
import React from "react";
import { CheckCircle } from "lucide-react";

const features = ["Upload License ", "Get Valuation", "Get Paid"];

const Features = () => (
  <section className="py-16 px-4">
    <h3 className="text-2xl font-semibold text-center mb-8">How It Works</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, idx) => (
        <div key={idx} className="p-6 border rounded-xl text-center">
          <CheckCircle className="mx-auto mb-2" />
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
