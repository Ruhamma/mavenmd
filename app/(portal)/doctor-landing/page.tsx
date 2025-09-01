'use client';
import React from "react";
import HeroSection from "./component/HeroSection";
import FeatureCard from "./component/FeatureCard";
import Image from 'next/image';
import {
    IconCalendarEvent,
    IconFileDescription,
    IconVideo,
    IconLock,
    IconLayoutDashboard,
    IconCircleArrowRightFilled,
} from "@tabler/icons-react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};
const values = [
    {
        name: 'Compassion',
        description: 'We prioritize empathy, ensuring every patient feels cared for.',
        image: '/images/Hero3.jpg',
    },
    {
        name: 'Affordability',
        description: 'We believe in giving accessible healthcare with quality.',
        image: '/images/Hero1.jpg',
    },
    {
        name: 'Reliability',
        description: 'We ensure consistent and dependable care for all our patients.',
        image: '/images/Hero2.jpg',
    },
    {
        name: 'Innovation',
        description: 'We use technology to enhance patient care.',
        image: '/images/Hero3.jpg',
    },
];
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
const page = () => {
    const features = [
        {
            icon: <IconCalendarEvent size={20} />,
            title: "Quick Appointment Scheduling",
            description:
                "Manage your calendar effortlessly and book patient visits in seconds. See open time slots instantly and avoid double-booking.",
        },
        {
            icon: <IconVideo size={20} />,
            title: "Instant Telehealth",
            description:
                "Conduct video consultations anytime, anywhere, reducing no shows and optimizing your schedule.",
        },
        {
            icon: <IconFileDescription size={20} />,
            title: "Your Records, Anytime",
            description:
                "Access and update patient histories, lab results, and prescriptions instantly, from anywhere.",
        },
        {
            icon: <IconLock size={20} />,
            title: "Private & Protected",
            description:
                "HIPAA compliant security keeps patient records safe, with full control over data access.",
        },
        {
            icon: <IconLayoutDashboard size={20} />,
            title: "Customizable Dashboard",
            description:
                "Personalize your dashboard to see appointments, patient updates, and key metrics at a glance.",
        },
    ];

    return (
        <div className="bg-gray-50">
            <HeroSection />

            <section className="max-w-6xl mx-auto py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    All Your Practice Simplified.
                </h2>
                <p className="text-gray-600 my-8 text-base md:text-lg">
                    Smart practice management designed for efficiency, security, and seamless <br/> patient care.
                </p>

                {/* Cards Grid with Image in Middle and One Card Below It */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* First Column */}
                    <div className="flex flex-col space-y-8">
                        <FeatureCard {...features[0]} />
                        <FeatureCard {...features[2]} />
                    </div>

                    <div className="flex flex-col items-center space-y-8">
                        <img
                            src="/images/Hero2.jpg"
                            alt="Practice Management"
                            className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm"
                        />
                        <FeatureCard {...features[4]} />
                    </div>

                    {/* Third Column */}
                    <div className="flex flex-col space-y-8">
                        <FeatureCard {...features[1]} />
                        <FeatureCard {...features[3]} />
                    </div>
                </div>

                {/* Explore Button */}
                <button className="mt-10 bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-xl shadow-md font-semibold justify-center mx-auto flex items-center gap-2">
                    Explore
                    <IconCircleArrowRightFilled
                        size={22}
                        className="transform -rotate-30 transition-transform duration-200"
                    />
                </button>
            </section>
            <section className="mx-4 sm:mx-8 md:mx-16 my-16 md:my-32">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-full md:max-w-[38%] mb-8 md:mb-12"
                >
                    <p className="text-[#0b0ba2] text-lg mb-4">Testimonials</p>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-primary-800">
                        What Our Customers Say About Us
                    </h2>
                </motion.div>

                <div className="flex gap-6 overflow-x-auto p-4 md:p-10 lg:grid lg:grid-cols-4 lg:overflow-visible">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="flex-shrink-0 w-[80%] sm:w-[60%] lg:w-auto"
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="px-4 sm:px-8 md:px-20 my-16 md:my-32">
                <div className="flex flex-col items-center text-center space-y-6 sm:space-y-12">
                    <h5 className="text-xl sm:text-2xl text-primary-800 font-medium">Driven by Purpose</h5>
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-800"
                    >
                        {' '}
                        The Values That Define Us
                    </motion.h2>
                    <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
                        At MavenMD, we are committed to delivering exceptional in-house care through
                        appointment booking and telehealth, ensuring every Patient in Pain and Doctor Hustler
                        experiences affordable, compassionate, and reliable healthcare.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mt-12 px-10 sm:px-0">
                    {values.map(value => (
                        <motion.div
                            key={value.name}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="relative bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row group "
                        >
                            <div className="absolute inset-0 z-0">
                                <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary-800 rounded-full opacity-30 blur-3xl"></div>
                            </div>

                            <div className="p-4 z-10 flex-1">
                                <h3 className="text-lg sm:text-xl font-semibold text-primary-800">
                                    {value.name}
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">{value.description}</p>
                            </div>

                            <div className="relative w-full sm:w-[150px]  h-28 sm:h-auto  flex-shrink-0 z-10">
                                <Image
                                    src={value.image}
                                    alt={value.name}
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <div className="px-4 md:px-8 lg:px-16 py-20 mb-20">
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
    );
};

export default page;
