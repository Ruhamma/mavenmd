/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import {
  useBookAppointmentMutation,
  useGetServiceProviderDetailQuery,
} from '@/services/profile/api';
import { IconMapPin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { DatePicker } from '../component/DatePicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function DoctorProfile() {
  const { id } = useParams();
  const { data: serviceProvider } = useGetServiceProviderDetailQuery(id);

  const [bookAppointment, { isLoading }] = useBookAppointmentMutation();

  // track selected date & time slot
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [complaints, setComplaints] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [appointmentType, setAppointmentType] = useState('ROUTINE');
  const [newSymptom, setNewSymptom] = useState(''); // input for adding pills

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
  function combineDateAndTime(date: Date, time: string): string {
    const [rawHour, rawMinute, modifier] = time.match(/(\d+):(\d+)\s?(AM|PM)/i)!.slice(1);
    let hour = parseInt(rawHour, 10);
    const minute = parseInt(rawMinute, 10);

    if (modifier.toUpperCase() === 'PM' && hour < 12) hour += 12;
    if (modifier.toUpperCase() === 'AM' && hour === 12) hour = 0;

    const combined = new Date(date);
    combined.setHours(hour, minute, 0, 0);

    return combined.toISOString();
  }

  const handleBook = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time before booking.');
      return;
    }

    try {
      await bookAppointment({
        serviceProviderId: Number(id),
        appointmentDate: combineDateAndTime(selectedDate, selectedTime),
        type: appointmentType,
        symptoms,
        complaints,
      }).unwrap();
      toast.success("Booking requested. We'll notify you when status is updated.");
    } catch (err: any) {
      toast.error(err?.data?.message || 'Failed to book appointment. Try again.');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <div className="bg-gradient-to-r from-primary-800 to-primary-800 rounded-2xl text-white p-4 sm:p-6 md:p-10 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          <div className="rounded-full border-4 border-white w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] relative flex-shrink-0">
            <Image
              src="/images/doc1.jpg"
              alt="Doctor Avatar"
              className="overflow-hidden object-cover rounded-full"
              fill
              sizes="(max-width: 640px) 72px, 80px"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              {serviceProvider?.result?.fullName}
            </h1>
            <p className="text-xs sm:text-sm md:text-base">Cardiologist • Internal Medicine</p>
            <p className="text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1 mt-1 sm:mt-2">
              <IconMapPin size={14} /> New York, NY
            </p>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-auto w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-primary-800 font-medium px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>
        </div>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base max-w-4xl mx-auto sm:mx-0">
          Dr. Sarah Johnson is a board-certified physician specialized in Cardiology and Internal
          Medicine. She has over 15 years of experience in diagnosing and managing cardiovascular
          conditions. Her approach is patient-centered and evidence-based, ensuring every patient
          receives the highest level of care.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 md:mt-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <DatePicker value={selectedDate} onChange={date => setSelectedDate(date ?? null)} />
          </div>

          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Available Time Slots</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
              {timeSlots.map(({ time, status }) => (
                <div
                  key={time}
                  onClick={() => status === 'available' && setSelectedTime(time)}
                  className={`flex flex-col items-center justify-center px-3 py-2 rounded-xl shadow-sm font-medium
                ${
                  status === 'booked'
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : selectedTime === time
                      ? 'bg-primary-700 text-white border-2 border-primary-800'
                      : 'bg-primary-50 text-primary-800 hover:bg-primary-100 cursor-pointer'
                }`}
                >
                  <span>{time}</span>
                  <span className="text-[10px] sm:text-xs mt-1">
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="text-md sm:text-lg font-semibold mb-3">Appointment Type</h2>
            <Select value={appointmentType} onValueChange={setAppointmentType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ROUTINE">Routine</SelectItem>
                <SelectItem value="EMERGENCY">Emergency</SelectItem>
                <SelectItem value="FOLLOWUP">Follow-up</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="text-md sm:text-lg font-semibold mb-3">Complaints</h2>
            <textarea
              value={complaints}
              onChange={e => setComplaints(e.target.value)}
              placeholder="Describe your issues..."
              className="w-full border rounded-xl p-2 text-sm"
            />
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="text-md sm:text-lg font-semibold mb-3">Symptoms</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {symptoms.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs flex items-center gap-1"
                >
                  {s}
                  <button
                    type="button"
                    onClick={() => setSymptoms(symptoms.filter((_, idx) => idx !== i))}
                    className="text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={newSymptom}
                onChange={e => setNewSymptom(e.target.value)}
                placeholder="Add symptom"
                className="flex-1 border rounded-xl p-2 text-sm"
              />
              <button
                type="button"
                onClick={() => {
                  if (newSymptom.trim()) {
                    setSymptoms([...symptoms, newSymptom.trim()]);
                    setNewSymptom('');
                  }
                }}
                className="bg-primary-800 text-white px-3 py-1 rounded-xl text-sm"
              >
                Add
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <button
              onClick={handleBook}
              disabled={isLoading}
              className="mt-4 sm:mt-6 w-full bg-primary-800 text-white py-2 sm:py-3 rounded-xl font-semibold hover:bg-primary-900 transition disabled:opacity-50"
            >
              {isLoading ? 'Booking...' : 'Book Appointment'}
            </button>
          </div>
          {/* Reviews */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="text-md sm:text-lg font-semibold mb-3 sm:mb-4">Patient Reviews</h2>
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
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
                <div key={i} className="border-l-4 border-primary-800 pl-3 sm:pl-4">
                  <p className="italic">“{r.review}”</p>
                  <p className="mt-1 font-semibold">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Specialties */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Specialties</h2>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {['Cardiology', 'Internal Medicine', 'Heart Health'].map(tag => (
                <span key={tag} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
              Education & Certifications
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
              <li>Doctor of Osteopathic Medicine - NYU</li>
              <li>Board Certified in Cardiology</li>
              <li>15+ Years Experience</li>
            </ul>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Quick Stats</h2>
            <div className="text-xs sm:text-sm space-y-1">
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

          {/* Insurance */}
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <h2 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Accepted Insurance</h2>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {[
                {
                  name: 'Blue Cross Blue ',
                  url: '/BlueCrossBlueShield.png',
                  logo: '',
                },
                {
                  name: 'Aetna',
                  url: '/Aetna.png',
                  logo: '',
                },
                {
                  name: 'Cigna',
                  url: '/Cigna.png',
                  logo: '',
                },
                {
                  name: 'UnitedHealthcare',
                  url: '/UnitedHealthcare.png',
                  logo: '',
                },
                {
                  name: 'Kaiser Permanente',
                  url: '/KaiserPermanente.png',
                  logo: '',
                },
                {
                  name: 'Humana',
                  url: '/Humana.png',
                  logo: '',
                },
                {
                  name: 'Molina Healthcare',
                  url: '/MolinaHealthcare.png',
                  logo: '',
                },
                {
                  name: 'Medicaid / Medicare',
                  url: '/Medicare.png',
                  logo: '',
                },
              ].map(insurance => (
                <Link
                  key={insurance.name}
                  href={insurance.url}
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg hover:bg-indigo-50"
                >
                  {/* <Image src={insurance.logo} alt={insurance.name} width={20} height={20} /> */}
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
