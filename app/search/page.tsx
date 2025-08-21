'use client';
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchHeader from './components/SearchHeader';
import DoctorCard from '../../components/DoctorCard';
import Footer from '../../components/Footer';
import AvailableDoctorsCard from './components/AvailableDoctorsCard';
import { IconMapPinFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useGetServiceProvideQuery } from '@/services/profile/api';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  price: number;
  distance: string;
  availability: string;
  imageUrl: string;
  services: string[];
  location: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Samuel Endale',
    specialty: 'General Practice',
    rating: 4.8,
    reviewCount: 22,
    price: 100,
    distance: '2.3 miles',
    availability: 'today',
    imageUrl: 'https://placehold.co/60x60',
    services: ['HOUSE CALLS', 'INSURANCE ACCEPTED'],
    location: 'New York',
  },
  {
    id: 2,
    name: 'Dr. Mark Lee',
    specialty: 'Cardiology',
    rating: 4.9,
    reviewCount: 18,
    price: 200,
    distance: '5 miles',
    availability: 'tomorrow',
    imageUrl: 'https://placehold.co/60x60',
    services: ['SAME DAY', 'INSURANCE ACCEPTED'],
    location: 'Boston',
  },
  {
    id: 3,
    name: 'Dr. Emily Carter',
    specialty: 'Dermatology',
    rating: 4.7,
    reviewCount: 30,
    price: 150,
    distance: '1.5 miles',
    availability: 'this week',
    imageUrl: 'https://placehold.co/60x60',
    services: ['HOUSE CALLS'],
    location: 'Chicago',
  },
  {
    id: 4,
    name: 'Dr. James Anderson',
    specialty: 'Pediatrics',
    rating: 5.0,
    reviewCount: 40,
    price: 80,
    distance: '3 miles',
    availability: 'weekend',
    imageUrl: 'https://placehold.co/60x60',
    services: ['HOUSE CALLS', 'INSURANCE ACCEPTED'],
    location: 'New York',
  },
  {
    id: 5,
    name: 'Dr. Rachel Kim',
    specialty: 'Cardiology',
    rating: 4.5,
    reviewCount: 12,
    price: 250,
    distance: '4.2 miles',
    availability: 'today',
    imageUrl: 'https://placehold.co/60x60',
    services: ['SAME DAY'],
    location: 'Los Angeles',
  },
  {
    id: 6,
    name: 'Dr. John Smith',
    specialty: 'General Practice',
    rating: 4.0,
    reviewCount: 8,
    price: 120,
    distance: '6 miles',
    availability: 'this week',
    imageUrl: 'https://placehold.co/60x60',
    services: ['HOUSE CALLS'],
    location: 'Boston',
  },
  {
    id: 7,
    name: 'Dr. Olivia Brown',
    specialty: 'Dermatology',
    rating: 4.6,
    reviewCount: 20,
    price: 180,
    distance: '2 miles',
    availability: 'tomorrow',
    imageUrl: 'https://placehold.co/60x60',
    services: ['SAME DAY', 'INSURANCE ACCEPTED'],
    location: 'Chicago',
  },
  {
    id: 8,
    name: 'Dr. Daniel White',
    specialty: 'Pediatrics',
    rating: 4.9,
    reviewCount: 15,
    price: 90,
    distance: '7 miles',
    availability: 'weekend',
    imageUrl: 'https://placehold.co/60x60',
    services: ['HOUSE CALLS'],
    location: 'Los Angeles',
  },
];
const Page = () => {
  const route = useRouter();
  const { data: userData } = useGetServiceProvideQuery({});
  console.log('User Data:', userData);
  const [selectedAvailability, setSelectedAvailability] = useState<string | undefined>();
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [, setSearchQuery] = useState('');
  const filteredDoctors = doctors.filter(doc => {
    let matches = true;

    if (selectedAvailability && doc.availability !== selectedAvailability) {
      matches = false;
    }

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      if (selectedPriceRange === '200+' && doc.price < 200) {
        matches = false;
      } else if (max && (doc.price < min || doc.price > max)) {
        matches = false;
      }
    }

    if (selectedRating && doc.rating < parseFloat(selectedRating)) {
      matches = false;
    }

    if (
      selectedSpecialty &&
      selectedSpecialty !== 'All Specialties' &&
      doc.specialty !== selectedSpecialty
    ) {
      matches = false;
    }

    if (location && !doc.location.toLowerCase().includes(location.toLowerCase())) {
      matches = false;
    }

    return matches;
  });
  const handleHeroSearch = (loc: string, query: string) => {
    setLocation(loc);
    setSearchQuery(query);
  };
  return (
    <>
      <SearchHeader />
      <div className="min-h-screen bg-gray-50">
        <HeroSection onSearch={handleHeroSearch} />
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 hidden lg:block">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <IconMapPinFilled
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Know your address"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specialties
                  </label>
                  <select
                    value={selectedSpecialty}
                    onChange={e => setSelectedSpecialty(e.target.value)}
                    className="w-full py-1 px-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option>All Specialties</option>
                    <option>General Practice</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Pediatrics</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Availability
                  </label>
                  <div className="space-y-2">
                    {['today', 'tomorrow', 'this week', 'weekend'].map(option => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          name="availability"
                          value={option}
                          checked={selectedAvailability === option}
                          onChange={e => setSelectedAvailability(e.target.value)}
                          className="mr-2 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700 capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    {['50-100', '100-200', '200+'].map(range => (
                      <label key={range} className="flex items-center">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range}
                          checked={selectedPriceRange === range}
                          onChange={e => setSelectedPriceRange(e.target.value)}
                          className="mr-2 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">${range}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-12">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Rating</label>
                  <div className="space-y-2">
                    {['4.5', '4.0'].map(rating => (
                      <label key={rating} className="flex items-center">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={selectedRating === rating}
                          onChange={e => setSelectedRating(e.target.value)}
                          className="mr-2 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-700">{rating}+ stars</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-800 text-white py-2 rounded-xl font-medium hover:bg-violet-900 transition-colors">
                  Apply Filter
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <p className="text-gray-600 mb-4 sm:mb-0">
                  Showing {filteredDoctors.length} doctors available for house calls.
                </p>
                <div className="flex items-center gap-4">
                  <select className="p-2 border border-gray-300 rounded-lg text-sm">
                    <option>Sort by distance</option>
                    <option>Sort by rating</option>
                    <option>Sort by price</option>
                  </select>
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-r-none rounded ${viewMode === 'grid' ? 'bg-primary-800 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-l-none rounded ${viewMode === 'list' ? 'bg-primary-800 text-white' : 'bg-white text-gray-600'}`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDoctors.map(doc => (
                  <AvailableDoctorsCard
                    key={doc.id}
                    name={doc.name}
                    specialty={doc.specialty}
                    rating={doc.rating}
                    reviewCount={doc.reviewCount}
                    price={doc.price}
                    distance={doc.distance}
                    availability={doc.availability}
                    imageUrl={doc.imageUrl}
                    services={doc.services}
                    onBookNow={() => route.push(`/doctor-profile/${doc.id}`)}
                    onFavorite={() => console.log('Toggle favorite')}
                    isFavorited={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-20">
        <div className="py-4">
          <p className="text-sm  text-gray-900 mb-2 px-8">Highly rated by patients like you</p>
          <h2 className="text-4xl font-semibold text-gray-900 mb-6 px-8">Top Rated Doctors</h2>
        </div>
        <div className="flex flex-row gap-x-6 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="min-w-[200px] max-w-xs flex-shrink-0">
              <DoctorCard
                name={`Dr. Emily Rodriguez ${i}`}
                specialty="Internal medicine"
                rating={5}
                reviewCount={12}
                description="Over 10 years of experience in personalized home care."
                imageUrl="https://placehold.co/600x400/000000/FFF"
                nextAvailable="Thu, Jul 10"
                date="Thu, Jul 10"
                timeSlots={['00:00', '00:00', '00:00', '00:00', '00:00', '00:00']}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
