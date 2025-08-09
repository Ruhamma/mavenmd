'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IconPhone, IconDotsVertical, IconClock, IconMapPin } from '@tabler/icons-react';

type Urgency = {
  label: string;
  bgColor: string;
};

type AppointmentsCardProps = {
  name: string;
  genderAge: string;
  symptoms: string;
  imageUrl: string;
  urgency: Urgency | null;
  requestedAgo: string;
  distance: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
};

const AppointmentsCard: React.FC<AppointmentsCardProps> = ({
  name,
  genderAge,
  symptoms,
  imageUrl,
  urgency,
  requestedAgo,
  distance,
  status,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard/appointments/appointments-detail'); // Navigate to the appointment details page
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-xl flex items-center justify-between px-6 py-4 w-full cursor-pointer hover:bg-gray-50 transition-colors"
    >
      {/* Left side: Image and patient info */}
      <div className="flex items-center gap-4">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{name}</h3>
            {urgency && (
              <span
                className={`text-xs text-white px-2 py-0.5 rounded-full`}
                style={{ backgroundColor: urgency.bgColor }}
              >
                {urgency.label}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">
            {genderAge}. {symptoms}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-800 mt-1">
            <span className="flex items-center gap-1">
              <IconClock size={14} /> {requestedAgo}
            </span>
            <span className="flex items-center gap-1">
              <IconMapPin size={14} /> {distance}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${
            status === 'Confirmed'
              ? 'bg-green-600 text-white'
              : status === 'Pending'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-400 text-white'
          }`}
        >
          {status}
        </span>
        <button
          className="border border-[#08087D] text-[#08087D] rounded-lg p-1"
          onClick={(e) => {
            e.stopPropagation(); // Prevent routing when clicking phone button
          }}
        >
          <IconPhone size={18} />
        </button>
        <button
          className="text-gray-500 hover:text-black"
          onClick={(e) => {
            e.stopPropagation(); // Prevent routing when clicking dots button
          }}
        >
          <IconDotsVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default AppointmentsCard;
