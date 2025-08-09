import { IconCalendar, IconMapPin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DoctorProfile() {
  const timeSlots = [
    { time: '7:00 AM', status: 'booked' },
    { time: '8:00 AM', status: 'selected' },
    { time: '9:00 AM', status: 'available' },
    { time: '10:00 AM', status: 'available' },
    { time: '12:00 AM', status: 'available' },
    { time: '1:00 PM', status: 'available' },
    { time: '2:00 PM', status: 'available' },
    { time: '3:00 PM', status: 'available' },
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#08087D] to-[#08087D] rounded-2xl text-white p-6 md:p-10 relative overflow-hidden">
        <div className="flex items-center gap-6">
          <div className="rounded-full border-4 border-white w-[80px] h-[80px] relative">
            <Image
              src="/images/doc1.jpg"
              alt="Doctor Avatar"
              className="overflow-hidden object-cover rounded-full"
              fill
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Dr. Sarah Johnson</h1>
            <p className="text-sm md:text-base">Cardiologist • Internal Medicine</p>
            <p className="text-xs md:text-sm flex items-center gap-1">
              <IconMapPin size={14} /> New York, NY
            </p>
          </div>
          <div className="ml-auto">
            <button className="bg-white text-[#08087D] font-medium px-4 py-2 rounded-xl shadow">
              Book Now
            </button>
          </div>
        </div>
        <p className="mt-6 text-sm md:text-base max-w-4xl">
          Dr. Sarah Johnson is a board-certified physician specialized in Cardiology and Internal
          Medicine. She has over 15 years of experience in diagnosing and managing cardiovascular
          conditions. Her approach is patient-centered and evidence-based, ensuring every patient
          receives the highest level of care.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Calendar */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Pick a Date</h2>
              <IconCalendar size={20} />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`py-2 rounded-xl cursor-pointer text-sm font-medium ${i === 9 ? 'bg-[#08087D] text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Available Time Slots</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeSlots.map(({ time, status }) => (
                <div
                  key={time}
                  className={`flex flex-col items-center justify-center px-4 py-3 rounded-xl shadow-sm text-sm font-medium
                    ${
                      status === 'booked'
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : status === 'selected'
                          ? 'bg-indigo-700 text-white border-2 border-indigo-800'
                          : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 cursor-pointer'
                    }`}
                >
                  <span>{time}</span>
                  <span className="text-xs mt-1">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full bg-[#08087D] text-white py-3 rounded-xl font-semibold">
              Book Appointment
            </button>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Patient Reviews</h2>
            <div className="space-y-6">
              {[
                {
                  name: 'Esther Howard',
                  review:
                    'Dr. Sarah is extremely thorough and takes the time to listen to all of my concerns. Highly recommend her!',
                },
                {
                  name: 'Frank Esteban',
                  review:
                    'She explained everything to me in detail and made me feel very comfortable.',
                },
                {
                  name: 'Maria Lopez',
                  review:
                    'Very professional and kind doctor. One of the best experiences I’ve had in years.',
                },
              ].map((r, i) => (
                <div key={i} className="border-l-4 border-[#08087D] pl-4">
                  <p className="text-sm italic">“{r.review}”</p>
                  <p className="mt-2 font-semibold text-sm">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-3">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {['Cardiology', 'Internal Medicine', 'Heart Health'].map(tag => (
                <span
                  key={tag}
                  className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-3">Education & Certifications</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Doctor of Osteopathic Medicine - NYU</li>
              <li>Board Certified in Cardiology</li>
              <li>15+ Years Experience</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-3">Quick Stats</h2>
            <div className="text-sm space-y-1">
              <p>
                Response Time: <span className="font-medium">~12 hours</span>
              </p>
              <p>
                Patients Served: <span className="font-medium">1.2k+</span>
              </p>
              <p>
                Experience: <span className="font-medium">15+ years</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-3">Accepted Insurance</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                {
                  name: 'Blue Cross Blue',
                  url: 'https://www.bcbs.com/',
                  logo: '',
                },
                {
                  name: 'Aetna',
                  url: 'https://www.aetna.com/',
                  logo: '',
                },
                {
                  name: 'Cigna',
                  url: 'https://www.cigna.com/',
                  logo: '',
                },
                {
                  name: 'UnitedHealthcare',
                  url: 'https://www.uhc.com/',
                  logo: '',
                },
                {
                  name: 'Kaiser Permanente',
                  url: 'https://healthy.kaiserpermanente.org/',
                  logo: '',
                },
                {
                  name: 'Humana',
                  url: 'https://www.humana.com/',
                  logo: '',
                },
                {
                  name: 'Molina Healthcare',
                  url: 'https://www.molinahealthcare.com/',
                  logo: '',
                },
                {
                  name: 'Medicaid / Medicare',
                  url: 'https://www.medicare.gov/',
                  logo: '',
                },
              ].map(insurance => (
                <Link
                  key={insurance.name}
                  href={insurance.url}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-indigo-50"
                >
                  <Image src={insurance.logo} alt={insurance.name} width={24} height={24} />
                  <span>{insurance.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
