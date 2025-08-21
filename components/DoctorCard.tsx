import React from 'react';
import { IconStar } from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type DoctorCardProps = {
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  description: string;
  imageUrl?: string;
  nextAvailable: string;
  date: string;
  timeSlots: string[];
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialty,
  rating,
  reviewCount,
  description,
  date,
  timeSlots,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src={''} className="rounded-full w-20 object-cover" />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-md font-semibold text-primary-800">{name}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
          <div className="flex items-center gap-1 text-yellow-500 mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <IconStar key={i} size={14} fill="currentColor" stroke={1} />
            ))}
            <span className="text-black text-sm ml-1">
              {rating.toFixed(1)} <span className="text-gray-500">({reviewCount})</span>
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 italic mt-4">{description}</p>

      <div className="flex justify-between items-center text-sm mt-6 font-medium">
        <span className="text-primary-800">Next Available</span>
        <span>{date}</span>
      </div>
      <hr className="my-4 opacity-20" />

      <div className="grid grid-cols-3 gap-2 mt-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className="bg-primary-800 text-white py-1 text-xs rounded-full w-full"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
