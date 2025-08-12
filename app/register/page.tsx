'use client';
import React, { useState } from 'react';

const RegisterPage = () => {
  const [userType, setUserType] = useState<'patient' | 'doctor'>('patient');
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (userType === 'doctor' && step === 1) {
      setStep(2);
    }
  };

  const renderPatientForm = () => (
    <>
      <div className="self-stretch flex flex-col sm:flex-row gap-4 ">
        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <label
            htmlFor="firstName"
            className="justify-start text-zinc-800 text-sm font-normal leading-tight"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <label
            htmlFor="lastName"
            className="justify-start text-zinc-800 text-sm font-normal leading-tight"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
          />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1 w-full">
        <label
          htmlFor="email"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="phone"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="password"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="confirmPassword"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>
    </>
  );

  const renderDoctorForm = () => (
    <>
      <div className="self-stretch flex flex-col sm:flex-row gap-2 ">
        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <label
            htmlFor="firstName"
            className="justify-start text-zinc-800 text-sm font-normal leading-tight"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <label
            htmlFor="lastName"
            className="justify-start text-zinc-800 text-sm font-normal leading-tight"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
          />
        </div>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1 w-full">
        <label
          htmlFor="email"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="phone"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="password"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-1">
        <label
          htmlFor="confirmPassword"
          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
        />
      </div>
    </>
  );

  return (
    <main className="lg:h-screen lg:w-screen overflow-hidden lg:p-6">
      <div className="relative flex flex-col h-full w-full">
        <div className="flex flex-col lg:flex-row flex-1 min-h-0">
          {/* Left side  */}
          <aside className="w-full lg:w-1/2 h-[350px] lg:h-full lg:pl-8 mb-2 lg:mb-0 relative">
            <img
              className="w-full h-full object-cover rounded-[20px] lg:rounded-[32px] shadow-lg"
              src={userType === 'patient' ? '/loginImage.png' : '/registerImage.png'}
              alt={userType === 'patient' ? 'Patient consultation' : 'Doctor registration'}
            />

            <div className="absolute w-40 sm:w-40 lg:w-48 h-16 lg:h-20 bg-black/20 rounded-xl left-[55%] top-[10%] lg:top-[8%] shadow-md" />
            <div className="absolute w-40 sm:w-40 lg:w-48 h-16 lg:h-20 bg-white/80 rounded-xl left-[45%] top-[4%] shadow-md" />
            <p className="absolute w-28 sm:w-32 lg:w-40 text-xs sm:text-sm font-normal text-primary-800 left-[47%] top-[5.5%]">
              Real Doctors
            </p>
            <p className="absolute w-28 sm:w-32 lg:w-40 text-xs sm:text-sm font-bold text-primary-800 left-[50%] top-[9%]">
              Real Visits
            </p>
            <p className="absolute w-28 sm:w-32 lg:w-40 text-xs sm:text-sm font-normal text-primary-800 left-[53%] top-[12.5%]">
              Real Peace of Mind
            </p>

            {/* Dots */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-500 left-[76%] top-[19%]" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 left-[79%] top-[19%]" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-700 left-[82%] top-[19%]" />

            <div className="absolute w-60 sm:w-72 lg:w-80 h-24 sm:h-28 lg:h-28 bg-zinc-200/70 rounded-3xl left-[7%] top-[75%] shadow-xl" />

            {[
              '/loginEllipse1.png',
              '/loginEllipse2.png',
              '/loginEllipse3.png',
              '/loginEllipse4.png',
              '/loginEllipse1.png',
              '/loginEllipse2.png',
            ].map((src, index) => (
              <img
                key={index}
                className={`absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full`}
                style={{ left: `${12 + index * 6}%`, top: '82%' }}
                src={src}
                alt={`Ellipse ${index + 1}`}
              />
            ))}

            <p className="absolute w-48 sm:w-56 lg:w-64 text-xs font-bold text-primary-800 left-[12%] top-[77%] leading-none">
              Board-certified care at your door
            </p>
          </aside>

          {/* Right side  */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:gap-4 p-4 lg:p-6 h-full">
            <section className="flex flex-col justify-center items-center gap-3 lg:gap-4 w-full max-w-sm lg:max-w-md h-full">
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <div className="self-stretch flex flex-col justify-start items-center gap-1">
                  <h1 className="self-stretch text-center justify-start">
                    <span className="text-primary-800 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
                      Create Account
                      <br />
                    </span>
                    <span className="text-zinc-800 text-sm lg:text-md font-normal leading-snug">
                      Fill in the details below to get started
                    </span>
                  </h1>
                </div>
              </div>

              <form className="w-full flex flex-col justify-start items-start gap-2 lg:gap-3 flex-1">
                {/* User Type Toggle */}
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <label className="justify-start text-zinc-800 text-sm font-normal leading-tight">
                    I am a:
                  </label>
                  <div className="self-stretch flex gap-3">
                    <button
                      type="button"
                      onClick={() => setUserType('patient')}
                      className={`flex-1 h-12 px-3 py-2 flex items-center gap-2 ${
                        userType === 'patient'
                          ? 'bg-primary-800/10 text-primary-800 shadow-lg rounded-sm'
                          : 'bg-white text-primary-800'
                      }`}
                    >
                      <div className="w-5 h-5 bg-current rounded-full flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold">Patient</span>
                        <span className="text-xs opacity-80">Looking for medical care</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType('doctor')}
                      className={`flex-1 h-12 px-3 py-2 flex items-center gap-2 ${
                        userType === 'doctor'
                          ? 'bg-primary-800/10 text-primary-800 shadow-lg rounded-b-sm'
                          : 'bg-white text-primary-800'
                      }`}
                    >
                      <div className="w-5 h-5 bg-current rounded-full flex items-center justify-center">
                        <span className="text-xs">👨‍⚕️</span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-semibold">Doctor</span>
                        <span className="text-xs opacity-80">Providing medical service</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="flex-1 flex flex-col gap-2 lg:gap-3 w-full ">
                  {userType === 'patient' ? (
                    renderPatientForm()
                  ) : step === 1 ? (
                    renderDoctorForm()
                  ) : (
                    <>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <label
                          htmlFor="nplNumber"
                          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
                        >
                          NPL Number
                        </label>
                        <input
                          type="text"
                          id="nplNumber"
                          placeholder="Enter your NPL number"
                          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
                        />
                      </div>

                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <label
                          htmlFor="licenseNumber"
                          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
                        >
                          License Number
                        </label>
                        <input
                          type="text"
                          id="licenseNumber"
                          placeholder="Enter your license number"
                          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
                        />
                      </div>

                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <label
                          htmlFor="licenseState"
                          className="justify-start text-zinc-800 text-sm font-normal leading-tight"
                        >
                          License State
                        </label>
                        <input
                          type="text"
                          id="licenseState"
                          placeholder="Enter your license state"
                          className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
                        />
                      </div>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="self-stretch h-12 px-3 py-2 bg-primary-800 rounded-[20px] outline-2 outline-offset-[-2px] outline-white inline-flex justify-center items-center"
                >
                  <div className="px-4 flex justify-center items-center gap-2.5">
                    <span className="justify-start text-white text-sm font-medium leading-none tracking-wide">
                      {userType === 'patient' ? 'Sign up' : step === 1 ? 'Next' : 'Sign up'}
                    </span>
                  </div>
                </button>
                {/* <p className="w-full text-center justify-start">
                                    <span className="text-sm font-normal  leading-tight">Already have an account? </span>
                                    <a href="#" className="text-Primary-700 text-sm font-normal  leading-tight">Log in</a>
                                </p> */}
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
