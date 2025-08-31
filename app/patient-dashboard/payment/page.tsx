'use client';

import Header from '@/components/Header';
import {
  IconCreditCard,
  IconBrandPaypal,
  IconPlus,
} from '@tabler/icons-react';

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start mt-8">
        <div className="w-full max-w-2xl p-6">
          {/* Header */}
          <h2 className="text-primary-800 text-sm font-semibold mb-6">Appointments/Invoice</h2>
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

          {/* Contact Dropdown */}
          <div className="p-2 mb-6">
            <button className="w-full flex justify-between items-center border rounded-md px-4 py-3  bg-white">
              Contact
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Payment Section */}
          <div className="mb-6 bg-white p-6" >
            <h4 className="text-md font-semibold mb-3">Payment</h4>

            {/* Payment Methods */}
            <div className="flex gap-4 mb-10">
              <div className="flex items-center border-2 border-primary-600 rounded-md px-4 py-2 gap-4 cursor-pointer">
                <input type="radio" name="payment" checked readOnly />
                <div className='flex flex-col mr-6 '>
                  <span className="text-sm font-medium">347809</span>
                  <span className="text-xs text-gray-500">VISA</span>
                </div>
                <IconCreditCard className="text-primary-800" />
              </div>
              <div className="flex items-center border rounded-md px-4 py-2 gap-4 cursor-pointer">
                <input type="radio" name="payment" />
                <div className='flex flex-col mr-6'>
                  <span className="text-sm font-medium">347809</span>
                  <span className="text-xs text-gray-500">PayPal</span>
                </div>
                <IconBrandPaypal className="text-gray-600" />

              </div>
              <div className="flex flex-col items-center border rounded-md px-3 py-2 gap-2 cursor-pointer">
                <IconPlus className="text-primary-800" />
                <span className="text-sm font-medium text-primary-800">New user</span>
              </div>
            </div>

            {/* Card Information */}
            <div className="mb-8">
              <label className="text-sm text-gray-700  mb-1 block">Card holder name</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-primary-50"
                placeholder="John Doe"
                disabled
              />
            </div>

            {/* Billing Address */}
            <div className="mb-8">
              <label className="text-sm text-gray-700 mb-1 block">Billing address</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2 bg-primary-50 "
                placeholder="Ethiopia"
                disabled
              />
            </div>

            {/* Zip + City */}
            <div className="flex gap-4 mb-8">
              <div className="w-1/2">
                <label className="text-sm text-gray-700 mb-1 block">Zip code</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 bg-primary-50"
                  placeholder="6789123"
                  disabled
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm text-gray-700 mb-1 block">City</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 bg-primary-50"
                  placeholder="Addis Ababa"
                  disabled
                />
              </div>
            </div>

            {/* Invoice checkbox */}
            <div className="flex items-center mb-10">
              <input type="checkbox" id="invoice" className="mr-2" defaultChecked />
              <label htmlFor="invoice" className="text-sm text-gray-700">
                Invoice Address
              </label>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-primary-800 text-white font-semibold py-3 rounded-md">
              Pay $67.00
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
