'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowRight, IconEye, IconMapPin, IconStethoscope } from '@tabler/icons-react';
import Image from 'next/image';
import DoctorCard from '../../components/DoctorCard';
import { TestimonialCard } from '../../components/TestimonialCard';
import FAQSection from '../../components/FaqSection';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const specialties = [
  { name: 'Dermatology', image: '/images/Hero3.jpg' },
  { name: 'Cardiology', image: '/images/Hero1.jpg' },
  { name: 'Neurology', image: '/images/Hero2.jpg' },
  { name: 'Pediatrics', image: '/images/Hero3.jpg' },
  { name: 'Orthopedics', image: '/images/Hero1.jpg' },
  { name: 'Psychiatry', image: '/images/Hero2.jpg' },
  { name: 'Geriatrics', image: '/images/Hero3.jpg' },
];
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
const options = [
  {
    title: 'In Person Visit',
    points: [
      'Consult with a licensed provider at a nearby clinic.',
      'Ideal for physical exams and hands-on treatment.',
      'Same day and next day appointments available.',
      'Check availability in your area',
    ],
    button: 'Book In-Person',
    style: 'bg-primary-800 text-white hover:bg-[#02156a]',
  },
  {
    title: 'Telehealth Appointment',
    points: [
      'See a doctor from the comfort of your home.',
      'Great for follow-ups and prescription refills.',
      'Secure video consultations with trusted providers.',
      'Available nationwide, 24/7.',
    ],
    button: 'Start a Virtual Visit',
    style: 'border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white',
    cardStyle: 'mt-20',
  },
  {
    title: 'At Home Care',
    points: [
      'A provider comes to you for care at home.',
      'Best for elderly, pediatrics or mobility limited patients.',
      'Available in select locations with flexible scheduling.',
      'Covered by most insurance plans.',
    ],
    button: 'Request House Call',
    style: 'bg-primary-800 text-white hover:bg-[#02156a]',
  },
];
export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              {/* Left */}
              <motion.div variants={fadeInUp} className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-4 md:mb-6 leading-tight">
                  Trusted Doctors At Your <br /> Doorstep
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">
                  Skip the waiting rooms and impersonal clinics. Our trusted network of verified
                  doctors brings personalized care to the comfort of your home.
                </p>
                <div className="flex flex-row gap-3 mb-8 md:mb-12 justify-center lg:justify-start">
                  <button className="flex items-center text-primary-800 font-medium hover:underline transition">
                    <IconStethoscope className="mr-2" size={20} />
                    Find a Doctor
                  </button>
                  <button className="flex items-center text-primary-800 font-medium hover:underline transition">
                    <IconEye className="mr-2" size={20} />
                    See How It Works
                  </button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(11, 11, 162, 0.4)'],
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="bg-primary-800 shadow-md text-white py-3 px-6 rounded-3xl font-medium hover:bg-white hover:text-primary-800 transition flex items-center justify-center mx-auto lg:mx-0"
                >
                  Book Now
                  <IconArrowRight className="ml-2" size={20} />
                </motion.button>
              </motion.div>

              {/* Right */}
              <motion.div variants={fadeIn} className="hidden lg:block w-full lg:w-1/2 relative">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full max-w-lg aspect-[5/6] rounded-xl overflow-hidden"
                >
                  <Image
                    src="/images/Hero3.jpg"
                    alt="Doctor with patient"
                    fill
                    className="object-cover rounded-xl"
                  />
                </motion.div>
                <div className="absolute -top-8 right-8 bg-white/40 rounded-xl shadow-lg p-4">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <Image
                      src="/images/Hero1.jpg"
                      alt="Doctor"
                      width={120}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute -bottom-28 -left-62 bg-white/40 rounded-xl shadow-lg p-4">
                  <div className="bg-white rounded-xl overflow-hidden flex">
                    {/* Image */}
                    <div className="relative w-[200px] aspect-square rounded-xl overflow-hidden">
                      <Image
                        src="/images/Hero2.jpg"
                        alt="Doctor results"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Stats */}
                    <div className="p-8">
                      <h3 className="text-base font-bold mb-4">Results we are proud of</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-800">10+</div>
                          <p className="text-gray-600 text-sm">
                            <span className="font-bold">Years</span>
                            <br />
                            experience
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-800">20+</div>
                          <p className="text-gray-600 text-sm">
                            Highly
                            <br />
                            <span className="font-bold">skilled</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-800">100%</div>
                          <p className="text-gray-600 text-sm">
                            Digital
                            <br />
                            <span className="font-bold">Diagnostics</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Layout - Stacked */}
              <div className="block lg:hidden w-full">
                {/* Main Image */}
                <div className="w-full rounded-xl overflow-hidden mb-6 mx-auto">
                  <Image
                    src="/images/Hero3.jpg"
                    alt="Doctor with patient"
                    width={600}
                    height={700}
                    className="object-cover rounded-xl"
                  />
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-sm font-bold mb-4">Results we are proud of</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-800">10+</div>
                        <p className="text-gray-600 text-xs">
                          <span className="font-bold">Years</span>
                          <br />
                          experience
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-800">20+</div>
                        <p className="text-gray-600 text-xs">
                          Highly
                          <br />
                          <span className="font-bold">skilled</span>
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-800">100%</div>
                        <p className="text-gray-600 text-xs">
                          Digital
                          <br />
                          <span className="font-bold">Diagnostics</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="my-10">
          <div className="bg-primary-800  md:rounded-t-[400px] relative overflow-hidden">
            {/* Top blurry white blob */}
            <div
              className="absolute left-60 bottom-20 w-36 h-36 bg-white rounded-full opacity-20 blur-3xl -translate-x-1/2 mix-blend-screen pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="flex flex-col text-center px-4 pt-10 pb-20 relative z-10">
              {/* Heading */}
              <div className="mb-8 md:mb-16">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  We make health accessible to everyone
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#A0B4FF] mt-2 italic">
                  Care that comes to you — no lines, no limits
                </p>
              </div>

              {/* Responsive Search Bar */}
              <form
                className="
          mx-auto w-full max-w-4xl bg-white shadow-lg 
          flex flex-col sm:flex-row items-stretch sm:items-center 
          gap-4 sm:gap-3 px-4 py-4 sm:py-3 
          rounded-2xl sm:rounded-full
        "
              >
                {/* Location Input */}
                <div className="flex items-center flex-1 min-w-[150px] px-3 border-b sm:border-b-0 sm:border-r border-gray-300">
                  <IconMapPin className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Texas"
                    className="w-full focus:outline-none text-sm sm:text-base text-gray-800"
                  />
                </div>

                {/* Doctor Input */}
                <div className="flex items-center flex-1 min-w-[150px] px-3 border-b sm:border-b-0 sm:border-r border-gray-300">
                  <IconStethoscope className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Dr. John Smith"
                    className="w-full focus:outline-none text-sm sm:text-base text-gray-800"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-primary-800 text-white font-semibold px-6 py-3 sm:py-2 rounded-full hover:bg-[#02156a] transition text-sm sm:text-base"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Bottom blurry white blob */}
            <div
              className="absolute bottom-20 right-60 w-36 h-36 bg-white rounded-full opacity-20 blur-3xl mix-blend-screen pointer-events-none"
              aria-hidden="true"
            ></div>
          </div>
        </section>

        <section className="relative bg-white overflow-hidden px-6 md:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Mobile & Tablet layout */}
            <div className="block md:hidden text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-primary-800 mb-4 leading-tight">
                Built on trust Focused on Care
              </h1>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                We’re building a platform that makes it easy to connect with licensed, verified
                doctors for in-person visits anytime, anywhere. Learn how it works and why patients
                trust us.
              </p>
              <button className="bg-primary-800 shadow-md text-white py-2 px-6 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-primary-800 transition">
                About us
              </button>

              {/* Image fan effect */}
              <div className="flex justify-center mt-8 space-x-[-40px]">
                <div className="relative w-48 h-80 rounded-2xl overflow-hidden shadow-md mt-10">
                  <Image
                    src="/images/hero1.jpg"
                    alt="Doctor with child"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-48 h-100 rounded-2xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Doctor with elderly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-48 h-80 rounded-2xl overflow-hidden shadow-md mt-10">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Family consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-y-10 gap-6 md:gap-12">
                <div className="relative w-80 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Doctor with elderly"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-70 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Family consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-80 h-70 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero1.jpg"
                    alt="Doctor with child"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-100 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Doctor listening"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-100 row-span-2 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Doctor with child"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative -right-20 w-80 h-70 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Doctor listening"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <h1 className="text-xl md:text-4xl font-bold text-primary-800 mb-6 leading-tight">
                Built on trust Focused on <br /> Care
              </h1>
              <p className="text-gray-600 mb-8">
                We’re building a platform that makes it easy to connect with licensed, verified
                doctors for in-person visits anytime, anywhere. Learn how it works and why patients
                trust us.
              </p>
              <div className="flex justify-end">
                <button className="bg-primary-800 shadow-md text-white py-2 px-4 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-primary-800 transition flex items-center justify-center">
                  About us
                  <IconArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="m-4 md:m-10 my-16 md:my-32">
          <div className="mb-8 max-w-full md:max-w-none">
            <p className="text-[#0b0ba2] mb-2 text-sm md:text-base">
              Highly Rated by Patients Like You
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-800">
              Top Rated Doctors
            </h2>
          </div>

          {/* Container for scrollable on mobile, grid on md+ */}
          <div
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6"
            style={{ scrollPaddingLeft: '1rem' }}
          >
            {[
              {
                name: 'Dr. John Doe',
                specialty: 'Cardiology',
                rating: 4.8,
                reviewCount: 120,
                description: 'Expert in heart health with over 10 years of experience.',
                imageUrl: '/images/Doc1.jpg',
                nextAvailable: 'Tomorrow',
                date: '2023-10-15',
                timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM'],
              },
              {
                name: 'Dr. Jane Smith',
                specialty: 'Dermatology',
                rating: 4.9,
                reviewCount: 95,
                description: 'Specializes in skin conditions and cosmetic procedures.',
                imageUrl: '/images/Doc2.jpg',
                nextAvailable: 'Next Week',
                date: '2023-10-20',
                timeSlots: ['9:00 AM', '12:00 PM', '3:00 PM'],
              },
              {
                name: 'Dr. Emily Johnson',
                specialty: 'Pediatrics',
                rating: 4.7,
                reviewCount: 80,
                description: 'Caring pediatrician with a focus on child health and wellness.',
                imageUrl: '/images/Doc3.jpg',
                nextAvailable: 'Today',
                date: '2023-10-14',
                timeSlots: ['2:00 PM', '4:00 PM'],
              },
              {
                name: 'Dr. Michael Brown',
                specialty: 'Neurology',
                rating: 4.6,
                reviewCount: 75,
                description: 'Experienced neurologist specializing in brain and nerve disorders.',
                imageUrl: '/images/Doc4.jpg',
                nextAvailable: 'Next Month',
                date: '2023-11-01',
                timeSlots: ['10:30 AM', '1:30 PM'],
              },
            ].map((doctor, idx) => (
              <div key={idx} className="snap-start flex-shrink-0 w-72 md:w-auto">
                <DoctorCard {...doctor} />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-4 sm:mx-8 md:mx-16 my-12 md:my-50">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-[38%] max-w-full">
              <p className="text-[#0b0ba2] mb-4 text-sm sm:text-base">
                Our specialties cover a wide range of medical needs.
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-800 mb-6 md:mb-8">
                Our Specialties
              </h2>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 w-full md:w-auto">
              {specialties.map((specialty, index) => (
                <div key={index} className="flex gap-3 items-center min-w-[140px]">
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden sm:w-[70px] sm:h-[70px]">
                    <Image
                      src={specialty.image}
                      alt={specialty.name}
                      className="object-cover rounded-full"
                      fill
                      sizes="(max-width: 768px) 60px, 70px"
                    />
                  </div>
                  <p className="text-black font-semibold text-sm sm:text-base whitespace-nowrap">
                    {specialty.name}
                  </p>
                </div>
              ))}

              <div className="flex gap-3 items-center min-w-[140px]">
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden sm:w-[60px] sm:h-[60px]">
                  <Image
                    src="/images/Hero3.jpg"
                    alt="Dermatology"
                    className="object-cover rounded-full"
                    fill
                    sizes="(max-width: 768px) 50px, 60px"
                  />
                </div>
                <p className="text-black font-semibold text-sm sm:text-base whitespace-nowrap">
                  Dermatology
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-8 md:px-20 my-16 md:my-32">
          {/* Heading */}
          <div className="flex flex-col items-center text-center space-y-3">
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
            <p className="text-gray-600 max-w-2xl text-sm sm:text-base">
              At MavenMD, we are committed to delivering exceptional in-house care through
              appointment booking and telehealth, ensuring every Patient in Pain and Doctor Hustler
              experiences affordable, compassionate, and reliable healthcare.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative bg-white rounded-xl overflow-hidden shadow-md flex flex-col sm:flex-row group"
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
        <section className="px-4 sm:px-8 md:px-20 my-16 md:my-32">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 text-white space-y-4 p-6 sm:p-8 md:p-12 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Text Section */}
            <div className="space-y-3 md:max-w-[60%]">
              <p className="text-2xl sm:text-3xl font-semibold">Book Your Appointment Now!</p>
              <p className="text-sm sm:text-base leading-relaxed">
                Take the first step towards personalized in-house care with MavenMD. Book your
                appointment today and experience expert healthcare tailored to your needs, right at
                home.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:justify-end">
              <button className="bg-white text-primary-800 py-2 px-6 rounded-3xl font-medium shadow-md hover:opacity-90 transition">
                Book Now
              </button>
              <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-3xl font-medium shadow-md hover:bg-white hover:text-primary-800 transition">
                Get Started
              </button>
            </div>
          </div>
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
        <section className="mt-32 mb-2 bg-primary-800/60 flex flex-col sm:flex-row items-center justify-between py-4 px-4 sm:px-8">
          <p className="text-center sm:text-left text-lg font-semibold text-white">
            Your health doesn’t wait, neither should you
          </p>
          <button className="mt-3 sm:mt-0 flex items-center text-white font-medium hover:underline transition cursor-pointer">
            Act Now
            <IconArrowRight className="ml-2" size={24} stroke={2} />
          </button>
        </section>
        <section>
          <div className="py-16 px-4 sm:px-6 md:px-10 bg-white text-center">
            <p className="text-primary-800 font-medium mb-2 text-sm sm:text-base">
              Choose what is right for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 max-w-3xl mx-auto">
              Care options
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2 sm:px-0">
              {options.map((opt, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition space-y-4 ${opt.cardStyle} w-full`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                      {opt.title}
                    </h3>
                    <ul className="text-xs sm:text-sm text-gray-700 space-y-2 text-left">
                      {opt.points.map((point, i) => (
                        <li
                          key={i}
                          className="relative pl-5 before:content-['|'] before:absolute before:left-0 before:text-primary-800 before:text-lg before:-translate-y-1/2 before:top-1/2"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm sm:text-base transition ${opt.style}`}
                  >
                    {opt.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <FAQSection />
        </section>
      </motion.div>
    </AnimatePresence>
  );
}
