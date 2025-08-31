import React from 'react';
import Image from 'next/image';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';

const HeroSection = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden">
            {/* Gradient background with curved bottom */}
            <div className="relative w-full bg-gradient-to-b from-white to-[#b8bdf0] rounded-b-[150px] shadow-md py-20 px-6 md:px-16 text-center">

                {/* Heading and Subheading */}
                <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Your Care Hub Awaits <br /> <span className="text-black">Start Now</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                        Step into your dashboard to manage patients, appointments, and records with ease.
                    </p>

                    <button className="mt-10 bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-xl shadow-md font-semibold justify-center mx-auto flex items-center gap-2">
                        Go to Dashboard
                        <IconCircleArrowRightFilled
                            size={22}
                            className="transform -rotate-30 transition-transform duration-200"
                        />
                    </button>
                </div>

                {/* Images Section */}
                <div className="flex justify-between px-20">
                    <div className="rounded-xl overflow-hidden shadow-md w-32 h-32">
                        <Image src="/images/Hero4.png" alt="Doctor" width={150} height={150} className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md w-32 h-32">
                        <Image src="/images/hero3.jpg" alt="Family" width={150} height={150} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex justify-center gap-30">
                    <div className="rounded-xl overflow-hidden shadow-md w-32 h-32">
                        <Image
                            src="/images/Hero2.jpg"
                            alt="Consultation"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md w-32 h-32">
                        <Image
                            src="/images/hero1.jpg"
                            alt="Care"
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
