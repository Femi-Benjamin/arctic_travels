import React from "react";
import Button from "../components/Button";

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
          Support Our Mission
        </h1>
        <p className="text-xl text-text-primary max-w-3xl mx-auto">
          Help us preserve the Arctic environments we love and support local
          communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Donation Card */}
        <div className="bg-arctic-800/60 p-8 rounded-2xl shadow-lg border border-arctic-700/40 space-y-6 text-text-primary">
          <h2 className="text-2xl font-bold text-text-primary">
            Donate to Conservation
          </h2>
          <p className="text-text-primary">
            Your donations go directly to the Arctic Conservation Fund, helping
            to protect wildlife and natural habitats.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">$10</Button>
            <Button variant="outline">$25</Button>
            <Button variant="outline">$50</Button>
            <Button variant="primary">Custom Amount</Button>
          </div>
        </div>

        {/* Volunteer Card */}
        <div className="bg-arctic-800/60 p-8 rounded-2xl shadow-lg border border-arctic-700/40 space-y-6 text-text-primary">
          <h2 className="text-2xl font-bold text-text-primary">
            Volunteer With Us
          </h2>
          <p className="text-text-primary">
            Join our team of volunteers for seasonal clean-up drives and
            community education programs.
          </p>
          <Button variant="secondary" className="w-full">
            Apply to Volunteer
          </Button>
        </div>
      </div>

      <div className="bg-arctic-700/30 rounded-3xl p-12 text-center space-y-6 border border-primary text-text-primary">
        <h2 className="text-3xl font-bold text-text-primary">
          Partner With Us
        </h2>
        <p className="text-text-primary max-w-2xl mx-auto">
          Are you a sustainable brand or organization? Let's work together to
          create a positive impact.
        </p>
        <Button variant="primary">Contact Partnerships</Button>
      </div>
    </div>
  );
};

export default Support;
