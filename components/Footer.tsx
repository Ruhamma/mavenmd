import React from 'react';
import {
  IconPhone,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-[#08087D] text-white pt-12 pb-8 px-4 md:px-2 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly mb-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-xl font-bold mb-4">
              Maven <span className="font-semibold">MD</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Bringing healthcare to your doorstep.
              <br /> Connect with qualified doctors for professional <br /> house calls, making
              healthcare accessible and convenient.
            </p>
            <hr className="opacity-30 w-[90%]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 w-full md:w-2/3">
            <div>
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-2">Follow us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#08087D] bg-white p-1 rounded-full ">
                    <IconBrandFacebook size={20} />
                  </a>
                  <a href="#" className="text-[#08087D] bg-white p-1 rounded-full ">
                    <IconBrandX size={20} />
                  </a>
                  <a href="#" className="text-[#08087D] bg-white p-1 rounded-full">
                    <IconBrandInstagram size={20} />
                  </a>
                  <a href="#" className="text-[#08087D] bg-white p-1 rounded-full">
                    <IconBrandLinkedin size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call us</h3>
                <div className="flex items-center mb-2">
                  <IconPhone size={16} className="mr-2" />
                  <span>+1 800 854-36-80</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">For Patient</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Find a doctor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Book appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Medical Records
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    24/7 Options
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">For Doctors</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Join Our Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Earning Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Insurance Coverage
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Teams
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 text-white rounded-3xl p-10 py-16 mb-12 mx-auto w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-center">Ready to get started?</h2>
          <p className="mb-6 text-center">
            Join thousands of patients and doctors who trust MavenMD <br /> for convenient,
            professional healthcare at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="bg-[#08087D] text-white py-3 px-6 rounded-lg font-medium hover:text-[#08087D] hover:bg-white transition cursor-pointer">
              Find a doctor
            </button>
            <button className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-[#08087D] hover:text-white transition cursor-pointer">
              Join as a doctor
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <div className="text-gray-400 mb-4 md:mb-0">© 2025 MavenMD. All Rights Reserved</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Legal
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
