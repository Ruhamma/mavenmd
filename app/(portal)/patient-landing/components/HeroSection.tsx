import React, { useState } from 'react';
import Image from 'next/image';
import { IconMapPin, IconStethoscope } from '@tabler/icons-react';
type HeroSectionProps = {
    onSearch: (location: string, query: string) => void;
};

const HeroSection = ({ onSearch }: HeroSectionProps) => {
    const [location, setLocation] = useState('');
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(location, query);
    };
    return (
        <section className="relative w-full bg-white overflow-hidden">
            <div className="relative w-full bg-primary-800 rounded-4xl shadow-md  ">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/pattern.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.1,
                    }}
                />
                <div className="relative z-10 pt-34 px-6 md:px-16">
                    <div className="max-w-3xl mx-auto text-center space-y-6 text-white">
                        <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
                            Find <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61A6FF] to-[#BC14F9]">Trusted Doctors</span> That Fit <br />Your Care Needs
                        </h1>
                    </div>

                    {/* First Image - Top Right */}
                    <div className="absolute top-0 right-32 hidden md:block">
                        <Image
                            src="/SearchImage1.png"
                            alt="Search Image 1"
                            className="rounded"
                            width={120}
                            height={200}
                        />
                    </div>

                    {/* Second Image - Top Left */}
                    <div className="absolute top-0 left-32 hidden md:block">
                        <Image
                            src="/SearchImage2.png"
                            alt="Search Image 2"
                            className="rounded"
                            width={120}
                            height={200}
                        />
                    </div>

                    {/* Third Image - Keep as is */}
                    <div className="absolute top-16 right-0 hidden md:block">
                        <Image
                            src="/SearchImage3.png"
                            alt="Search Image 3"
                            className="rounded"
                            width={80}
                            height={120}
                        />
                    </div>
                    <div className="absolute bottom-30 left-0 hidden md:block">
                        <Image
                            src="/SearchImage2.png"
                            alt="Search Image 2"
                            className="rounded"
                            width={80}
                            height={200}
                        />
                    </div>


                    <div className="mt-16 mx-auto max-w-5xl bg-white shadow-xl rounded-t-[80px] px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
                        <div className="flex-col items-center gap-3 flex-1 ">
                            <span className="text-sm text-zinc-800 font-bold">Location</span>
                            <div className="relative  bg-primary-50 rounded-tl-[30px] ">
                                <IconMapPin
                                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    value={location}
                                    onChange={e => setLocation(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2  focus:border-transparent rounded-tl-[30px] focus:ring-primary-500"
                                />
                            </div>
                        </div>

                        <div className="flex-col items-center gap-3 flex-1">
                            <span className="text-sm text-primary-800 font-bold">Symptoms or Doctors</span>
                            <div className="relative  bg-primary-50">
                                <IconStethoscope
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Search for doctors, specialties..."
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <button
                            className="bg-primary-800 hover:bg-primary-700 text-white rounded-md px-12 py-3 font-bold transition-colors h-[48px] md:h-auto rounded-tr-[30px] mt-6"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
