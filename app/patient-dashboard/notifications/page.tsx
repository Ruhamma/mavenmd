'use client';

import Header from '@/components/Header';
import { IconX, IconFilter, IconSearch } from '@tabler/icons-react';
import Image from 'next/image';

export default function Page() {
  const notifications = [
    {
      id: 1,
      name: 'Brian Griffin',
      message: 'wants to collaborate',
      time: '5 days ago',
      avatar: '/images/avatar1.png',
    },
    {
      id: 2,
      name: 'Adam from The Mayor’s Office',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '1 month ago',
      avatar: '/images/avatar2.png',
    },
    {
      id: 3,
      name: 'Neil',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '1 month ago',
      avatar: '/images/avatar3.png',
    },
    {
      id: 4,
      name: 'Quagmire from Giggity Co.',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '1 month ago',
      avatar: '/images/avatar4.png',
    },
    {
      id: 5,
      name: 'Herbert from Children’s Program',
      message: 'Hey Peter, we’ve got a new side project opportunity for you.',
      time: '1 month ago',
      avatar: '/images/avatar5.png',
    },
    {
      id: 6,
      name: 'Cleveland from The Post Office',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '1 month ago',
      avatar: '/images/avatar6.png',
    },
    {
      id: 7,
      name: 'Joe',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '2 months ago',
      avatar: '/images/avatar7.png',
    },
    {
      id: 8,
      name: 'Stewie from World Takeover',
      message: 'Hey Peter, we’ve got a new user research opportunity for you.',
      time: '2 months ago',
      avatar: '/images/avatar8.png',
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-16 py-10">
        {/* Push Notification Banner */}
        <div className="bg-[#6161f120] text-gray-700 rounded-lg p-4 mx-20 flex items-center justify-between mb-16">
          <span className="text-sm">
            <strong>Turn on push notifications</strong> to know when your idea has
            been watched and interacted with.
          </span>
          <div className="flex items-center gap-3">
            <button className="border border-gray-500 text-small-semibold px-4 py-2 rounded-4xl">
              Allow push notifications
            </button>
            <button className="text-small-semibold text-gray-500 hover:text-gray-700">
              Dismiss
            </button>
          </div>
        </div>

        {/* Header */}
        <div className='ml-6'>
          <h1 className="text-2xl font-semibold mb-2">Notifications</h1>
          <p className="text-gray-500 mb-6">
            Stay updated with your latest activities and messages
          </p>
        </div>

        {/* Search and Filters */}

        <div className="flex items-center mb-6 gap-4">
          {/* Search Input with Icon */}
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconSearch size={18} />
            </span>
            <input
              type="text"
              placeholder="Search Patients"
              className="w-full pl-10 pr-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="text-gray-600 text-sm font-medium hover:bg-gray-100 bg-white px-4 py-2 rounded-lg">
              All Requests
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 bg-white">
              <IconFilter size={18} /> Filters
            </button>
          </div>
        </div>


        {/* Notifications List */}
        <div className="bg-white w-4xl border rounded-lg">
          {notifications.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 ${index !== notifications.length - 1 ? 'border-b' : ''
                }`}
            >
              <div className="flex items-start gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">{item.name}</span>{' '}
                    {item.message}
                  </p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
              <IconX size={20} className="text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
