import React from "react";
import { IconMapPin, IconStethoscope } from '@tabler/icons-react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Section */}
      <div className="w-full bg-[#08087D] rounded-b-[300px] shadow-md py-20 px-6 md:px-16">
        {/* Header & Description */}
        <div className="max-w-3xl mx-auto text-center text-white space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            Meet Our Trusted Healthcare <br/> Experts
          </h1>
          <p className="text-base md:text-">
            Experienced and compassionate doctors you can rely on. Providing personalized care whenever and wherever you need it.
          </p>
        </div>

        {/* Decorative Logos */}
        <div className="absolute top-2 right-85 hidden md:block">
          <img src="https://placehold.co/140x63" alt="Logo" className="rounded" />
        </div>
        <div className="absolute top-18 left-32 hidden md:block">
          <img src="https://placehold.co/140x63" alt="Logo" className="rounded" />
        </div>
        <div className="absolute bottom-60 right-20 hidden md:block">
          <img src="https://placehold.co/140x63" alt="Logo" className="rounded" />
        </div>

        {/* Search Bar */}
        <div className="mt-16 mx-auto max-w-5xl bg-white shadow-xl rounded-b-[80px] px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Location */}
          <div className="flex-col items-center gap-3 flex-1 ">
            <span className="text-sm text-zinc-800 font-bold">Location</span>
            <div className="relative">
              <IconMapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:border-transparent rounded-bl-[30px] focus:ring-violet-500"
              />
            </div>
          </div>

          {/* Specialty/Search */}
          <div className="flex-col items-center gap-3 flex-1">
            <span className="text-sm text-violet-950 font-bold">Symptoms or Doctors</span>
            <div className="relative">
              <IconStethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for doctors, specialties..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-violet-950 text-white rounded-md px-12 py-3 font-bold hover:bg-violet-900 transition-colors h-[48px] md:h-auto rounded-br-[30px] mt-6">
            Search
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
