"use client"
import DoctorCard from '@/components/DoctorCard'
import { IconArrowRight, IconCalendarEvent, IconCircleArrowRightFilled, IconStar } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import HeroSection from './components/HeroSection'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/TestimonialCard'
const testimonials = [
    {
        text: `"Being a cardiologist, I appreciate MavenMD's telehealth and home visit options. It’s perfect for monitoring heart patients remotely, and the AI scheduling saves me time. Highly recommend."`,
        name: 'Dr. Emily Rodriguez',
        role: 'Cardiologist',
        avatar: '/images/Doc1.jpg',
        bgColor: 'bg-white',
    },
    {
        text: `"Being a cardiologist, I appreciate MavenMD's telehealth and home visit options. It’s perfect for monitoring heart patients remotely, and the AI scheduling saves me time. Highly recommend."`,
        name: 'Dr. Emily Rodriguez',
        role: 'Cardiologist',
        avatar: '/images/Doc1.jpg',
        bgColor: 'bg-primary-800/10',
    },
    {
        text: `"Being a cardiologist, I appreciate MavenMD's telehealth and home visit options. It’s perfect for monitoring heart patients remotely, and the AI scheduling saves me time. Highly recommend."`,
        name: 'Dr. Emily Rodriguez',
        role: 'Cardiologist',
        avatar: '/images/Doc1.jpg',
        bgColor: 'bg-white',
    },
    {
        text: `"Being a cardiologist, I appreciate MavenMD's telehealth and home visit options. It’s perfect for monitoring heart patients remotely, and the AI scheduling saves me time. Highly recommend."`,
        name: 'Dr. Emily Rodriguez',
        role: 'Cardiologist',
        avatar: '/images/Doc1.jpg',
        bgColor: 'bg-primary-800/10',
    },
];
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const page = () => {
    function handleHeroSearch(_location: string, _query: string): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div>
            <div className='m-8 mb-30'>
                <HeroSection onSearch={handleHeroSearch} />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="w-full">
                        <DoctorCard
                            name={`Dr. Emily Rodriguez ${i}`}
                            specialty="Internal medicine"
                            rating={5}
                            reviewCount={12}
                            description="Over 10 years of experience in personalized home care."
                            imageUrl="https://placehold.co/600x400/000000/FFF"
                            nextAvailable="Thu, Jul 10"
                            date="Thu, Jul 10"
                            timeSlots={['00:00', '00:00', '00:00', '00:00', '00:00', '00:00']}
                        />
                    </div>
                ))}
            </div>
            {/* Explore Button */}
            <button className="mt-10 bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-xl shadow-md font-semibold justify-center mx-auto flex items-center gap-2">
                Explore
                <IconCircleArrowRightFilled
                    size={22}
                    className="transform -rotate-30 transition-transform duration-200"
                />
            </button>
            <section className="bg-primary-50 py-16 px-6 rounded-[60px] my-10 mx-6">
                <div className="max-w-7xl mx-auto  rounded-5xl px-10 pt-10 p-2">
                    {/* Top Row */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                        {/* Left Content */}
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                                Your Trusted <br /> Health Care <br /> Providers
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Smart practice management designed for efficiency, security, and
                                seamless patient care.
                            </p>
                            <button className="mt-6 px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white rounded-full shadow-md font-semibold flex gap-2 items-center">
                                Make a schedule
                                <IconCircleArrowRightFilled
                                    size={22}
                                    className="transform -rotate-30 transition-transform duration-200"
                                />
                            </button>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-2/3 flex flex-col md:flex-row gap-6">
                            {/* Card 1 */}
                            <div className="bg-gradient-to-b from-[#ffffff]  to-[#08087d3a] p-6 rounded-4xl shadow-md flex-1">
                                <h3 className="text-lg font-semibold text-indigo-900">
                                    Very fast and accurate service
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Connect with our professional doctors who are ready to manage
                                    your health
                                </p>
                                <div className="mt-4 rounded-4xl overflow-hidden">
                                    <Image
                                        src="/images/Hero3.jpg"
                                        alt="Doctor Service"
                                        width={250}
                                        height={150}
                                        className="w-full h-40 object-cover"
                                    />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-6 rounded-4xl shadow-md flex-1">
                                <h3 className="text-lg font-semibold text-indigo-900">
                                    Very fast and accurate service
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">
                                    Connect with our professional doctors who are ready to manage
                                    your health
                                </p>
                                <ul className="mt-4 space-y-3 ml-6">
                                    {["Quick Appointment Scheduling", "Quick Appointment Scheduling", "Quick Appointment Scheduling"].map(
                                        (item, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-gradient-to-r from-[#8F8FBD] to-[#08087D] text-white rounded-full flex items-center justify-center">
                                                    <IconCalendarEvent size={18} />
                                                </div>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Stat 1 */}
                        <div className="bg-white rounded-4xl px-4 py-2 flex justify-between shadow-sm">
                            <div className='flex flex-col justify-between h-full'>
                                <p className="text-2xl font-bold">100%</p>
                                <p className="text-gray-600 text-sm">Our Doctors are certified</p>
                            </div>
                            <div className="flex flex-col items-center justify-between h-full bg-primary-800 text-white rounded-4xl p-2">
                                <IconStar size={20} />
                                <div className="flex flex-col items-center leading-none mt-0">
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold rotate-90 inline-block">1</span>
                                </div>
                            </div>


                        </div>

                        {/* Stat 2 */}
                        <div className="bg-white rounded-4xl px-4 py-2 flex justify-between shadow-sm">
                            <div className='flex flex-col justify-between h-full'>
                                <p className="text-2xl font-bold">21M+</p>
                                <p className="text-gray-600 text-sm">Happy Global Users</p>
                            </div>
                            <div className="flex flex-col items-center justify-between h-full bg-primary-800 text-white rounded-4xl p-2">
                                <IconStar size={20} />
                                <div className="flex flex-col items-center leading-none mt-0">
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold rotate-90 inline-block">2</span>
                                </div>
                            </div>


                        </div>

                        {/* Stat 3 */}
                        <div className="bg-white rounded-4xl px-4 py-2 flex justify-between shadow-sm">
                            <div className='flex flex-col justify-between h-full'>
                                <p className="text-2xl font-bold">99%</p>
                                <p className="text-gray-600 text-sm">Patient Satisfaction</p>
                            </div>
                            <div className="flex flex-col items-center justify-between h-full bg-primary-800 text-white rounded-4xl p-2">
                                <IconStar size={20} />
                                <div className="flex flex-col items-center leading-none mt-0">
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold -mb-1">0</span>
                                    <span className="text-xs font-bold rotate-90 inline-block">3</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <div className="px-10 py-20 ">
                <div className="py-4">
                    <p className="text-sm  text-gray-900 mb-2 px-8">Highly rated by patients like you</p>
                    <h2 className="text-4xl font-semibold text-gray-900 mb-6 px-8">Top Rated Doctors</h2>
                </div>
                <div className="flex flex-row gap-x-6 overflow-x-auto pb-4">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="min-w-[200px] max-w-xs flex-shrink-0">
                            <DoctorCard
                                name={`Dr. Emily Rodriguez ${i}`}
                                specialty="Internal medicine"
                                rating={5}
                                reviewCount={12}
                                description="Over 10 years of experience in personalized home care."
                                imageUrl="https://placehold.co/600x400/000000/FFF"
                                nextAvailable="Thu, Jul 10"
                                date="Thu, Jul 10"
                                timeSlots={['00:00', '00:00', '00:00', '00:00', '00:00', '00:00']}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <section className="mt-32 mb-2 bg-primary-800/60 flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8">
                <p className="text-center sm:text-left text-lg font-semibold text-white">
                    Your health doesn’t wait, neither should you
                </p>
                <Link href="/register" passHref>
                    <button className="mt-3 sm:mt-0 flex items-center text-white font-medium hover:underline transition cursor-pointer">
                        Act Now
                        <IconArrowRight className="ml-2" size={24} stroke={2} />
                    </button>
                </Link>

            </section>

            <div className="flex gap-6 overflow-x-auto p-4 my-40 md:p-10 lg:grid lg:grid-cols-4 lg:overflow-visible">
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, y: -5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative flex-shrink-0 w-[80%] sm:w-[60%] lg:w-auto rounded-xl overflow-hidden flex"
                    >
                        {idx === 1 ? (
                            <div className="relative w-full h-full rounded-xl overflow-hidden flex">
                                {/* Video Background */}
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="/video/testimonial.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-[#1d13a415] bg-opacity-40"></div>

                                <div className="relative z-10 p-6 text-black flex flex-col justify-end h-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                        />
                                        <p className="text-lg font-semibold">{testimonial.name}</p>
                                    </div>
                                    <p className="text-sm opacity-80">{testimonial.role}</p>
                                </div>
                            </div>
                        ) : (
                            <TestimonialCard {...testimonial} />
                        )}
                    </motion.div>

                ))}
            </div>

            <div className="px-4 md:px-8 mb-28 lg:px-16 py-20">
                <div className="relative w-full bg-primary-800 rounded-3xl px-12 py-12 text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-72 bg-white/20 rounded-2xl blur-[116px] transform rotate-[-108deg]"></div>

                    <div className="absolute bottom-0 left-0 w-80 h-72 bg-white/20 rounded-2xl blur-[116px] transform rotate-[-108deg]"></div>
                    <div>
                        <h2 className="text-Primary-50 text-3xl md:text-4xl font-semibold  leading-loose px-6 py-4">
                            Book Your Appointment Now!
                        </h2>

                        <p className=" text-base font-normal leading-relaxed max-w-3xl">
                            Take the first step towards personalized in-house care with MavenMD. Book your
                            appointment today and experience expert healthcare tailored to your needs, right at
                            home.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-end gap-4 mt-4 pr-4">
                        <Link href="/search" passHref>
                            <button className="bg-white text-primary-800 py-2 px-6 rounded-3xl font-medium shadow-md hover:opacity-90 transition">
                                Book Now
                            </button>
                        </Link>
                        <Link href="/register" passHref>
                            <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-3xl font-medium shadow-md hover:bg-white hover:text-primary-800 transition">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
