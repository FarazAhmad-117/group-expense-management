import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does SplitSmart calculate expense splits?",
                  answer:
                    "SplitSmart uses advanced algorithms to calculate fair splits based on the expenses entered and the group's preferences. You can choose from equal splits, percentage-based splits, or custom rules tailored to your group's needs.",
                },
                {
                  question:
                    "Can I use SplitSmart for both personal and business expenses?",
                  answer:
                    "SplitSmart is versatile enough to handle both personal and business expense tracking. You can create separate groups for different purposes and customize the settings accordingly.",
                },
                {
                  question: "Is my financial data secure with SplitSmart?",
                  answer:
                    "Yes, we take data security very seriously. All your financial information is encrypted and stored securely. We use industry-standard security measures to protect your data and ensure that only authorized users can access it.",
                },
                {
                  question:
                    "How can I invite friends to join my expense group?",
                  answer:
                    "Inviting friends is easy! Simply go to your group settings, click on 'Invite Members', and enter their email addresses or share a unique invitation link. They'll receive an invitation to join your group and can create an account if they don't have one already.",
                },
                {
                  question: "Does SplitSmart support different currencies?",
                  answer:
                    "Yes, SplitSmart supports multiple currencies. You can set a default currency for each group, and the app will automatically handle currency conversions if members add expenses in different currencies.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
