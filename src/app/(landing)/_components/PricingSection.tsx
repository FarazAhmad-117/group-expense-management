import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the perfect plan for your needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 sm:mx-auto">
            Whether you're splitting expenses with roommates or managing
            finances for a large group, we have a plan for you.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {[
            {
              name: "Basic",
              price: "Free",
              features: [
                "Up to 3 groups",
                "Basic expense tracking",
                "Simple split calculations",
                "Email support",
              ],
            },
            {
              name: "Pro",
              price: "$9.99/month",
              features: [
                "Unlimited groups",
                "Advanced expense tracking",
                "Custom split rules",
                "Priority email support",
                "Expense analytics",
              ],
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "All Pro features",
                "Dedicated account manager",
                "API access",
                "Custom integrations",
                "24/7 phone support",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {plan.name}
                </h2>
                <p className="mt-4 text-sm text-gray-500">{plan.price}</p>
                <Button className="mt-8 block w-full">
                  {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
                </Button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
