import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by users worldwide
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            See what our users have to say about their experience with
            SplitSmart.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                content:
                  "SplitSmart has made managing expenses with my roommates so much easier. No more awkward conversations about who owes what!",
                author: "Sarah J.",
                role: "Student",
              },
              {
                content:
                  "As a frequent traveler, SplitSmart has been a game-changer for splitting costs on group trips. Highly recommended!",
                author: "Mike T.",
                role: "Travel Enthusiast",
              },
              {
                content:
                  "The custom split feature is fantastic for our household with varying incomes. It's fair and transparent for everyone.",
                author: "Emily R.",
                role: "Professional",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      Testimonial
                    </p>
                    <p className="mt-2 text-base text-gray-500">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Avatar>
                        <AvatarImage
                          src={`https://i.pravatar.cc/150?img=${index + 1}`}
                        />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
