import React from 'react';
import { IconStar, IconMapPin, IconClock, IconHeart } from '@tabler/icons-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type AvailableDoctorsCardProps = {
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  price: number;
  distance: string;
  availability: string;
  imageUrl?: string;
  services: string[];
  onBookNow: () => void;
  onFavorite: () => void;
  isFavorited?: boolean;
};

const AvailableDoctorsCard: React.FC<AvailableDoctorsCardProps> = ({
  name,
  specialty,
  rating,
  reviewCount,
  price,
  distance,
  availability,
  services,
  onBookNow,
  onFavorite,
  isFavorited = false,
}) => {
  const getServiceTagColor = (service: string) => {
    switch (service.toUpperCase()) {
      case 'HOUSE CALLS':
        return 'bg-blue-100 text-blue-800';
      case 'SAME DAY':
        return 'bg-green-100 text-green-800';
      case 'INSURANCE ACCEPTED':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Avatar className="w-16 h-16">
            <AvatarImage src={''} className="rounded-full w-20 object-cover" />
            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-bold text-primary-800">{name}</h3>
          <p className="text-xs text-gray-600">{specialty}</p>

          <div className="flex items-center gap-1 mt-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <IconStar key={i} size={16} className="text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-primary-800 text-xs font-medium ml-1">
              {rating.toFixed(1)} ({reviewCount})
            </span>
          </div>
        </div>

        {/* Price Section */}
        <div className="text-right">
          <div className="text-xl font-bold text-primary-800">${price}</div>
          <div className="text-xs text-gray-600">Per visit</div>
        </div>
      </div>

      {/* Location and Availability */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center gap-1">
          <IconMapPin size={16} className="text-primary-800" />
          <span className="text-primary-800 text-xs font-medium">{distance}</span>
        </div>
        <div className="flex items-center gap-1">
          <IconClock size={16} className="text-primary-800" />
          <span className="text-primary-800 text-xs font-medium">{availability}</span>
        </div>
      </div>

      {/* Service Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {services.map((service, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-[10px] font-medium ${getServiceTagColor(service)}`}
          >
            {service}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={onBookNow}
          className="flex-1 bg-primary-800 text-white py-0.5 px-4 rounded-2xl font-semibold hover:bg-[#06065a] transition-colors"
        >
          Book Now
        </button>
        <button
          onClick={onFavorite}
          className={`h-10 px-4 rounded-2xl border-2 flex items-center justify-center transition-colors ${
            isFavorited
              ? 'bg-white border-primary-800 text-primary-800'
              : 'bg-primary-800 text-white border-primary-800 hover:bg-white hover:text-primary-800'
          }`}
        >
          <IconHeart size={20} className={isFavorited ? 'fill-primary-800' : 'none'} />
        </button>
      </div>
    </div>
  );
};

export default AvailableDoctorsCard;
