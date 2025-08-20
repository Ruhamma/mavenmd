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
  status: string;
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
    router.push('/dashboard/appointments/appointments-detail');
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between 
                 px-4 py-3 sm:px-6 sm:py-4 w-full cursor-pointer hover:bg-gray-50 transition-colors"
    >
      {/* Left side: Image and patient info */}
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 sm:gap-2">
            <h3 className="font-medium text-[13px] sm:text-base truncate flex items-center">
              {name}
              {/* urgency dot next to name on mobile */}
              {urgency && (
                <span
                  className="inline-block sm:hidden ml-1 align-middle h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: urgency.bgColor }}
                />
              )}
            </h3>
            {/* urgency label on desktop */}
            {urgency && (
              <span
                className="hidden sm:inline-block text-xs text-white px-2 py-0.5 rounded-full"
                style={{ backgroundColor: urgency.bgColor }}
              >
                {urgency.label}
              </span>
            )}
          </div>
          <p className="text-[11px] sm:text-sm text-gray-500 break-words">
            {genderAge}. {symptoms}
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-800 mt-0.5 sm:mt-1">
            <span className="flex items-center gap-1">
              <IconClock size={11} className="sm:w-[14px] sm:h-[14px]" /> {requestedAgo}
            </span>
            <span className="flex items-center gap-1">
              <IconMapPin size={11} className="sm:w-[14px] sm:h-[14px]" /> {distance}
            </span>
          </div>

          {/* Actions on mobile (below request/distance) */}
          <div className="flex sm:hidden items-center gap-2 mt-2">
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
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
              className="border border-primary-800 text-primary-800 rounded-md p-1"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <IconPhone size={15} />
            </button>
            <button
              className="text-gray-500 hover:text-black"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <IconDotsVertical size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Actions (desktop only) */}
      <div className="hidden sm:flex items-center gap-3">
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
          className="border border-primary-800 text-primary-800 rounded-lg p-1"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <IconPhone size={18} />
        </button>
        <button
          className="text-gray-500 hover:text-black"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <IconDotsVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default AppointmentsCard;
