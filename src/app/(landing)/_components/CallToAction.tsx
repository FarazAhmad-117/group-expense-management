import { Button } from "@/components/ui/button";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to simplify your group expenses?</span>
          <span className="block">Start using SplitSmart today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Join thousands of satisfied users and make managing shared expenses a
          breeze.
        </p>
        <Button size="lg" className="mt-8 w-full sm:w-auto" variant="secondary">
          Sign up for free
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
