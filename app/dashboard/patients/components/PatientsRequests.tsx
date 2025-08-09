'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IconClock, IconMapPin } from '@tabler/icons-react';

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

    const handleCardClick = () => {
        router.push(`/dashboard/patients/patient-detail`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="cursor-pointer bg-white shadow-md rounded-xl flex items-center justify-between px-6 py-4 w-full hover:bg-gray-50 transition"
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
                                className="text-xs text-white px-2 py-0.5 rounded-full"
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
            <div
                className="flex items-center gap-3"
                onClick={(e) => e.stopPropagation()} // Prevent routing when buttons are clicked
            >
                <button className="text-xs py-2 px-4 rounded-lg font-medium bg-green-600 text-white hover:opacity-90 transition">
                    Accept
                </button>
                <button className="text-xs py-2 px-4 rounded-lg font-medium border border-red-500 text-red-500 hover:bg-red-100 transition">
                    Decline
                </button>
            </div>
        </div>
    );
};

export default AppointmentsCard;
