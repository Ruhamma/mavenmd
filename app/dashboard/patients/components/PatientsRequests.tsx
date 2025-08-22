/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IconClock, IconMapPin } from '@tabler/icons-react';
import {
  useConfirmAppointmentMutation,
  useCancelAppointmentMutation,
} from '@/services/appointments/api';
import { toast } from 'sonner';

type Urgency = {
  label: string;
  bgColor: string;
};

type AppointmentsCardProps = {
  id: number;
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
  id,
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
  const [confirmAppointment, { isLoading }] = useConfirmAppointmentMutation();
  const [cancelAppointment, { isLoading: isCancelling }] = useCancelAppointmentMutation();

  const handleCardClick = () => {
    router.push(`/dashboard/patients/patient-detail/${id}`);
  };

  const handleAccept = async () => {
    try {
      const res = await confirmAppointment(id).unwrap();
      console.log('Appointment confirmed:', res);
      toast.success(res.message || 'Appointment confirmed successfully');
      // Optionally, refresh the page or trigger a refetch
      router.refresh();
    } catch (err: any) {
      console.error('Error confirming appointment:', err);
      toast.success(err?.data?.message || 'Failed to confirm appointment');
    }
  };

  const handleDecline = async () => {
    try {
      const res = await cancelAppointment(id).unwrap();
      console.log('Appointment cancelled:', res);
      toast.success(res.message || 'Appointment cancelled successfully');
      router.refresh();
    } catch (err: any) {
      console.error('Error cancelling appointment:', err);
      toast.success(err?.data?.message || 'Failed to cancel appointment');
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white shadow-sm rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-6 w-full hover:bg-gray-50 transition"
    >
      {/* Left side: Image and patient info */}
      <div className="flex items-start sm:items-center gap-2 sm:gap-4 w-full">
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover sm:w-12 sm:h-12"
          />
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center gap-1 sm:gap-2">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 flex items-center">
              {name}
              {urgency && (
                <span
                  className="inline-block sm:hidden ml-1 align-middle h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: urgency.bgColor }}
                />
              )}
            </h3>
            {urgency && (
              <span
                className="hidden sm:inline-block text-xs text-white px-2 py-0.5 rounded-full"
                style={{ backgroundColor: urgency.bgColor }}
              >
                {urgency.label}
              </span>
            )}
          </div>
          <p className="text-[10px] sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
            {genderAge}. {symptoms}
          </p>
          <div className="flex gap-2 sm:gap-4 items-center text-[9px] sm:text-xs text-gray-800 mt-1 sm:mt-2">
            <span className="flex items-center gap-1 sm:gap-2">
              <IconClock size={12} /> {requestedAgo}
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <IconMapPin size={12} /> {distance}
            </span>
          </div>
        </div>
      </div>

      {/* Right side: Actions */}
      <div
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-2 sm:mt-0 w-full sm:w-auto"
        onClick={e => e.stopPropagation()} // Prevent routing when buttons are clicked
      >
        <button
          onClick={handleAccept}
          disabled={isLoading || status === 'CONFIRMED'}
          className={`text-[10px] sm:text-xs py-1 sm:py-2 px-2 sm:px-4 rounded-lg font-medium text-white transition w-full sm:w-auto
            ${status === 'CONFIRMED' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:opacity-90'}
          `}
        >
          {status === 'CONFIRMED' ? 'Confirmed' : isLoading ? 'Confirming...' : 'Accept'}
        </button>
        <button
          onClick={handleDecline}
          disabled={isCancelling}
          className="text-[10px] sm:text-xs py-1 sm:py-2 px-2 sm:px-4 rounded-lg font-medium border border-red-500 text-red-500 hover:bg-red-100 transition w-full sm:w-auto"
        >
          {isCancelling ? 'Declining...' : 'Decline'}
        </button>
      </div>
    </div>
  );
};

export default AppointmentsCard;
