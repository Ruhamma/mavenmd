import { IconArrowRight, IconEye, IconMapPin, IconStethoscope } from '@tabler/icons-react';
import Image from 'next/image';
import DoctorCard from '../components/DoctorCard';
import { TestimonialCard } from '../components/TestimonialCard';
import FAQSection from '../components/FaqSection';

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
    bgColor: 'bg-[#08087D]/10',
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
    bgColor: 'bg-[#08087D]/10',
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
    style: 'bg-[#08087D] text-white hover:bg-[#02156a]',
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
    style: 'border border-[#08087D] text-[#08087D] hover:bg-[#08087D] hover:text-white',
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
    style: 'bg-[#08087D] text-white hover:bg-[#02156a]',
  },
];
export default function Home() {
  return (
    <div>
      <section className=" py-24 px-4 md:px-8 lg:px-16 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl md:text-4xl font-bold text-[#08087D] mb-6 leading-tight">
                Trusted Doctors At Your
                <br /> Doorstep
              </h1>
              <p className="text text-gray-600 mb-8">
                Skip the waiting rooms and impersonal clinics. Our trusted network of verified
                doctors brings personalized care to the comfort of your home. From general checkups
                to follow-ups, we make healthcare human again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="flex items-center text-[#08087D] font-medium hover:underline transition cursor-pointer">
                  <IconStethoscope className="mr-2 " size={20} />
                  Find a doctor
                </button>
                <button className="flex items-center text-[#08087D] font-medium hover:underline transition cursor-pointer">
                  <IconEye className="mr-2 " size={20} />
                  See How It Works
                </button>
              </div>
              <button className="bg-[#08087D] shadow-md text-white py-3 px-6 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-[#08087D] transition flex items-center justify-center">
                Book now
                <IconArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <section className="w-full lg:w-1/2 relative">
              <div className="relative w-[500px] h-[550px] rounded-xl overflow-hidden">
                <Image
                  src="/images/Hero3.jpg"
                  alt="Dr Logo"
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
              <div className="absolute  bg-white/40 rounded-xl shadow-lg p-4 right-0 -top-18">
                <div className="bg-white/90 flex flex-row rounded-xl">
                  <Image src="/images/Hero1.jpg" alt="Dr Logo" width={150} height={200} />
                </div>
              </div>
              <div className="absolute bg-white/40 rounded-xl shadow-lg p-4 -left-80 -bottom-40 ">
                <div className="bg-white/90 flex flex-row rounded-xl">
                  <div className="relative w-[200px] h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/Hero2.jpg"
                      alt="Dr Logo"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text font-bold mb-8">Results we are proud of</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#08087D] mb-2">10+</div>
                        <p className="text-gray-600 text-sm">
                          <span className="font-bold">Years</span> of <br /> experience
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#08087D] mb-2">20+</div>
                        <p className="text-gray-600 text-sm">
                          Highly <span className="font-bold">skilled</span> <br />
                          doctors
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#08087D] mb-2">100%</div>
                        <p className="text-gray-600 text-sm">
                          Digital
                          <br /> <span className="font-bold">Diagnostics</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="bg-gradient-to-b  bg-[#08087D] rounded-t-[400px] pb-40 pt-10 px-4 text-center">
          <div className="mx-auto w-full max-w-4xl bg-white shadow-lg rounded-full flex flex-wrap items-center justify-between px-4 py-2 mb-20">
            <div className="flex items-center flex-1 min-w-[150px] px-3 border-r border-gray-300">
              <IconMapPin className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Texas"
                className="w-full focus:outline-none text-sm text-gray-800"
              />
            </div>

            <div className="flex items-center flex-1 min-w-[150px] px-3 border-r border-gray-300">
              <IconStethoscope className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Dr. John Smith"
                className="w-full focus:outline-none text-sm text-gray-800"
              />
            </div>

            <button className="bg-[#08087D] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#02156a] transition">
              Search
            </button>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white">
            We make health accessible to everyone
          </h1>
          <p className="text-[#A0B4FF] mt-2 italic text-sm md:text-base">
            Care that comes to you no lines, no limits
          </p>
        </div>
      </section>
      <section>
        <section className="relative bg-white overflow-hidden  px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 i z-10 items-center ">
            <div className="relative">
              <div className="grid grid-cols-2 gap-y-10 gap-6 md:gap-12 ">
                <div className="relative w-80 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Doctor with elderly"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative  w-80 h-70 rounded-xl overflow-hidden ">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Family consultation"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative  w-80 h-70 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero1.jpg"
                    alt="Doctor with child"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative w-100 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Doctor listening"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative w-100 row-span-2 h-70 rounded-xl overflow-hidden opacity-0">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Doctor with child"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="relative -right-20 w-80 h-70 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Doctor listening"
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-xl md:text-4xl font-bold text-[#08087D] mb-6 leading-tight">
                Built on trust Focused on <br /> Care
              </h1>
              <p className="text text-gray-600 mb-8">
                We’re building a platform that makes it easy to connect with licensed, verified
                doctors for in-person visits anytime, anywhere. Learn how it works and why patients
                trust us.
              </p>
              <div className="flex justify-end">
                <button className="bg-[#08087D] shadow-md text-white py-2 px-4 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-[#08087D] transition flex items-center justify-center">
                  About us
                  <IconArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="m-10 my-32">
        <div>
          <p className="text-[#0b0ba2] mb-4">Highly Rated by Patients Like You</p>
          <h2 className="text-4xl font-semibold text-[#08087D] mb-8">Top Rated Doctors</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <DoctorCard
            name="Dr. John Doe"
            specialty="Cardiology"
            rating={4.8}
            reviewCount={120}
            description="Expert in heart health with over 10 years of experience."
            imageUrl="/images/Doc1.jpg"
            nextAvailable="Tomorrow"
            date="2023-10-15"
            timeSlots={['10:00 AM', '11:00 AM', '1:00 PM']}
          />
          <DoctorCard
            name="Dr. Jane Smith"
            specialty="Dermatology"
            rating={4.9}
            reviewCount={95}
            description="Specializes in skin conditions and cosmetic procedures."
            imageUrl="/images/Doc2.jpg"
            nextAvailable="Next Week"
            date="2023-10-20"
            timeSlots={['9:00 AM', '12:00 PM', '3:00 PM']}
          />
          <DoctorCard
            name="Dr. Emily Johnson"
            specialty="Pediatrics"
            rating={4.7}
            reviewCount={80}
            description="Caring pediatrician with a focus on child health and wellness."
            imageUrl="/images/Doc3.jpg"
            nextAvailable="Today"
            date="2023-10-14"
            timeSlots={['2:00 PM', '4:00 PM']}
          />
          <DoctorCard
            name="Dr. Michael Brown"
            specialty="Neurology"
            rating={4.6}
            reviewCount={75}
            description="Experienced neurologist specializing in brain and nerve disorders."
            imageUrl="/images/Doc4.jpg"
            nextAvailable="Next Month"
            date="2023-11-01"
            timeSlots={['10:30 AM', '1:30 PM']}
          />
        </div>
      </section>
      <section className="m-10 my-50">
        <div className="flex gap-4 ">
          <div className="w-[38%]">
            <p className="text-[#0b0ba2] mb-4">
              Our specialties cover a wide range of medical needs.
            </p>
            <h2 className="text-4xl font-semibold text-[#08087D] mb-8">Our Specialties</h2>
          </div>
          <div className="flex w-fit items-center justify-center gap-12 flex-wrap">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    className="object-cover rounded-xl"
                    fill
                  />
                </div>
                <p className="text-black font-semibold">{specialty.name}</p>
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image
                  src="/images/Hero3.jpg"
                  alt="Dr Logo"
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
              <p className="text-black font-semibold">Dermatology</p>
            </div>
          </div>
        </div>
      </section>
      <section className="m-10 my-32">
        <div className="flex flex-col gap-4 items-center space-y-2">
          <h5 className="text-2xl text-[#08087D] ">Driven by purpose</h5>
          <h2 className="text-3xl font-semibold text-[#08087D] ">The Values That Define Us</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            At MavenMD, we are committed to delivering exceptional in-house care through appointment
            booking and health, ensuring every Patient in Pain and Doctor Hustler experiences
            affordable, compassionate, and reliable healthcare.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap mx-auto">
          {values.map((value, index) => (
            <div className="shadow-md flex w-1/5 rounded-xl" key={value.name}>
              <div className="p-4 shadow-md">
                <h3 className="text-xl font-semibold text-[#08087D]">{value.name}</h3>
                <p className="text-gray-500 max-w-[85%] text-xs">{value.description}</p>
              </div>
              <div className=" relative w-[250px] overflow-hidden">
                <Image
                  src={value.image}
                  alt={value.name}
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="bg-[#08087D] text-white space-y-4 p-8 py-16 rounded-xl shadow-md mx-20 my-32 m">
          <p className="text-3xl font-semibold">Book Your appointment now!</p>
          <p className="">
            Take the first step towards personalized in-house care with MavenMD. <br />
            Book your appointment today and experience expert healthcare tailored to your needs,
            right at home.
          </p>
          <div className="flex gap-2 justify-end">
            <button className="bg-white shadow-md text-[#08087D] py-1 px-6 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-[#08087D] transition flex items-center justify-center">
              Book now
            </button>
            <button className="bg-[#08087D] border-2 border-white shadow-md text-white py-1 px-6 rounded-3xl cursor-pointer font-medium hover:bg-white hover:text-[#08087D] transition flex items-center justify-center">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="m-16 my-32">
        <div className="w-[38%]">
          <p className="text-[#0b0ba2] text-lg mb-4">Testimonials</p>
          <h2 className="text-4xl font-semibold text-[#08087D] mb-8">
            What Our Customers Say About Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-10">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </section>
      <section className="mt-32 mb-2 bg-[#08087D]/60 flex items-center justify-between py-4 px-4">
        <p className="text-lg font-semibold text-white">
          Your health doesn’t wait, neither should you
        </p>
        <button className="flex items-center text-white font-medium hover:underline transition cursor-pointer">
          Act Now
          <IconArrowRight className="ml-2 " size={24} stroke={2} />
        </button>
      </section>
      <section>
        <div className="py-20 px-4 bg-white text-center">
          <p className="text-[#08087D] font-medium mb-2">Choose what is right for you</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Care options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {options.map((opt, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between hover:shadow-xl transition space-y-4 ${opt.cardStyle}`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{opt.title}</h3>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    {opt.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-5 before:content-['|'] before:absolute before:left-0 before:text-[#08087D]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`mt-6 w-full py-2 rounded-xl font-semibold text-sm transition ${opt.style}`}
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
    </div>
  );
}
