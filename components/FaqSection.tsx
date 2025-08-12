'use client';

import { useState } from 'react';
import { IconPlus, IconX } from '@tabler/icons-react';

const faqs = [
  {
    question: 'What is MavenMD?',
    answer:
      'MavenMD is a dynamic healthcare hub empowering both patients and providers with in-house care and tele-health services. It connects individuals seeking personalized treatment with doctors, while equipping providers with intuitive tools, all delivered affordably at home or virtually. Launched to boost accessibility and ease, it harnesses cutting-edge technology to simplify appointments and meet diverse health demands.',
  },
  {
    question: 'What services does MavenMD provide?',
    answer:
      'MavenMD offers in-person visits, virtual telehealth appointments, and at-home care based on your location and need.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'You can book through our online platform or app by selecting your location, symptoms, and preferred provider.',
  },
  {
    question: 'Is MavenMD affordable?',
    answer:
      'Yes, we strive to provide high-quality care at competitive prices and accept many major insurance plans.',
  },
  {
    question: 'What specialties are available?',
    answer:
      'We cover a wide range including general practice, pediatrics, mental health, dermatology, and more.',
  },
  {
    question: 'How are doctors verified on MavenMD?',
    answer:
      'All doctors undergo strict credentialing, background checks, and licensing verification.',
  },
  {
    question: 'How do I cancel or reschedule an appointment?',
    answer:
      'Log into your account and go to your appointments. You’ll see options to cancel or reschedule.',
  },
  {
    question: 'What if I need in-home care in a rural area?',
    answer:
      'We’re expanding our reach and provide home visits in many rural areas. Check availability in your area.',
  },
  {
    question: 'Is my data secure on MavenMD?',
    answer:
      'Yes, we use encryption and follow HIPAA-compliant standards to keep your data private and secure.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Heading */}
        <div className="md:w-1/3">
          <h2 className="text-[#031E87] text-3xl sm:text-4xl font-bold leading-tight mb-6 md:mb-0">
            Frequently <br /> Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="md:w-2/3 space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-white shadow-md rounded-xl transition-all duration-300 ${
                  isActive ? 'ring-2 ring-[#031E87]/30' : ''
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 font-medium text-[#031E87] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  {isActive ? <IconX size={22} /> : <IconPlus size={22} />}
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out px-5 sm:px-6 ${
                    isActive ? 'max-h-[600px] py-3 sm:py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
