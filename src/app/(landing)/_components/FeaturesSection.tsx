import { PiggyBank, TrendingUp, Users } from "lucide-react";
import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage group expenses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            SplitSmart provides all the tools you need to effortlessly manage
            and split expenses within your groups.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Create and Manage Groups
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Easily create groups for different purposes and invite members
                to join and contribute.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Track Expenses
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Log and categorize expenses, making it easy to see where your
                money is going.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Fair Split Calculations
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Automatically calculate how much each person owes or is owed
                based on expenses and contributions.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Real-time Updates
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Get instant notifications when expenses are added or settled,
                keeping everyone in the loop.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
