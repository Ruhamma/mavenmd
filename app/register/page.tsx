"use client"
import React, { useState } from 'react'

const RegisterPage = () => {
    const [userType, setUserType] = useState<'patient' | 'doctor'>('patient')
    const [step, setStep] = useState(1)

    const handleNext = () => {
        if (userType === 'doctor' && step === 1) {
            setStep(2)
        }
        // For patients, this will be handled as sign up directly
    }

    const renderPatientForm = () => (
        <>
            <div className="self-stretch flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <label htmlFor="firstName" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">First Name</label>
                    <input 
                        type="text" 
                        id="firstName"
                        placeholder="Enter your first name"
                        className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                    />
                </div>
                
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                    <label htmlFor="lastName" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName"
                        placeholder="Enter your last name"
                        className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                    />
                </div>
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="email" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Email Address</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email address"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="phone" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Phone Number</label>
                <input 
                    type="tel" 
                    id="phone"
                    placeholder="Enter your phone number"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="password" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Password</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Enter your password"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="confirmPassword" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Confirm Password</label>
                <input 
                    type="password" 
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
        </>
    )

    const renderDoctorForm = () => (
        <>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="nplNumber" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">NPL Number</label>
                <input 
                    type="text" 
                    id="nplNumber"
                    placeholder="Enter your NPL number"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="licenseNumber" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">License Number</label>
                <input 
                    type="text" 
                    id="licenseNumber"
                    placeholder="Enter your license number"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
            
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <label htmlFor="licenseState" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">License State</label>
                <input 
                    type="text" 
                    id="licenseState"
                    placeholder="Enter your license state"
                    className="self-stretch h-10 sm:h-12 px-4 py-3 sm:py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                />
            </div>
        </>
    )

    return (
        <main className="min-h-screen lg:mt-10">
            <div className="relative flex flex-col min-h-screen">
                
                <div className="flex flex-col lg:flex-row flex-1">
                    {/* Left side  */}
                    <aside className="w-full lg:w-1/2 h-[400px] lg:h-[780px] lg:pl-8 mb-3 relative">
                        <img className="w-full h-full object-cover rounded-[20px] lg:rounded-[56.85px] shadow-[0px_5.684999942779541px_3.7899999618530273px_0px_rgba(0,0,0,0.25)]" src="https://placehold.co/758x866" alt="Medical consultation" />
                        
                        <div className="w-40 sm:w-40 lg:w-48 h-16 sm:h-18 lg:h-20 left-[55%] top-[10%] lg:top-[8%] absolute bg-black/20 rounded-xl shadow-[6px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                        <div className="w-40 sm:w-40 lg:w-48 h-16 sm:h-18 lg:h-20 left-[45%] top-[4%] absolute bg-white/80 rounded-xl shadow-[6px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                        <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[47%] top-[5.5%] absolute justify-start text-violet-950 text-xs sm:text-sm font-normal font-['Inter'] leading-normal">Real Doctors</p>
                        <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[52%] lg:left-[50%] top-[9.7%] lg:top-[8.3%] absolute justify-start text-violet-950 text-xs sm:text-sm font-bold font-['Inter'] leading-normal">Real Visits</p>
                        <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[55%] lg:left-[53%] top-[13.7%] lg:top-[11%] absolute justify-start text-violet-950 text-xs sm:text-sm font-normal font-['Inter'] leading-normal">Real Peace of Mind</p>
                        
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[85%] lg:left-[76%] top-[22%] lg:top-[16%] absolute bg-blue-500 rounded-full" />
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[88%] lg:left-[79%] top-[22%] lg:top-[16%] absolute bg-blue-600 rounded-full" />
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[91%] lg:left-[82%] top-[22%] lg:top-[16%] absolute bg-blue-700 rounded-full" />
                        
                        <div className="w-60 sm:w-72 lg:w-80 h-24 sm:h-28 lg:h-32 left-[7%] top-[79%] absolute bg-zinc-200/70 rounded-3xl" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[12%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 1" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[18%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 2" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[24%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 3" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[30%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 4" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[36%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 5" />
                        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[42%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 6" />
                        <p className="w-48 sm:w-56 lg:w-64 h-4 sm:h-5 left-[12%] top-[81.5%] absolute justify-start text-violet-950 text-xs font-bold font-['Inter'] leading-none">Board-certified care at your door</p>
                    </aside>
                    
                    {/* Right side  */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-6 lg:gap-10 p-6 lg:p-8">
                    
                    <section className="flex flex-col justify-center items-center gap-4 lg:gap-8 w-full max-w-sm lg:max-w-md">
                        <div data-alignment="Left" data-caption="false" data-headline-1="false" data-headline-2="true" data-text="false" className="w-full flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch flex flex-col justify-start items-center gap-1">
                                <h1 className="self-stretch text-center justify-start">
                                    <span className="text-violet-950 text-2xl sm:text-3xl lg:text-4xl font-semibold font-['DM_Sans'] leading-loose">Create Account<br /></span>
                                    <span className="text-zinc-800 text-lg sm:text-xl font-normal font-['DM_Sans'] leading-loose">Fill in the details below to get started</span>
                                </h1>
                            </div>
                        </div>
                        
                        <form className="w-full flex flex-col justify-start items-start gap-4 lg:gap-5">
                            {/* User Type Toggle */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                <label className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">I am a:</label>
                                <div className="self-stretch flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setUserType('patient')}
                                        className={`flex-1 h-16 px-4 py-3 rounded-[20px] border-2 flex items-center gap-3 ${
                                            userType === 'patient' 
                                                ? 'bg-violet-950 border-violet-950 text-white' 
                                                : 'bg-white border-gray-300 text-violet-950'
                                        }`}
                                    >
                                        <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
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
                                        className={`flex-1 h-16 px-4 py-3 rounded-[20px] border-2 flex items-center gap-3 ${
                                            userType === 'doctor' 
                                                ? 'bg-violet-950 border-violet-950 text-white' 
                                                : 'bg-white border-gray-300 text-violet-950'
                                        }`}
                                    >
                                        <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
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
                            {userType === 'patient' ? (
                                renderPatientForm()
                            ) : step === 1 ? (
                                renderDoctorForm()
                            ) : (
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <label htmlFor="additionalInfo" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Additional Information</label>
                                    <textarea 
                                        id="additionalInfo"
                                        placeholder="Enter any additional information"
                                        rows={4}
                                        className="self-stretch px-4 py-3 bg-slate-100 rounded-[20px] border-b border-neutral-300 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight resize-none"
                                    />
                                </div>
                            )}
                            
                            <button 
                                type="button"
                                onClick={handleNext}
                                className="self-stretch h-10 sm:h-12 px-3 py-3 sm:py-4 bg-violet-950 rounded-[20px] outline-2 outline-offset-[-2px] outline-white inline-flex justify-center items-center"
                            >
                                <div className="px-4 flex justify-center items-center gap-2.5">
                                    <span className="justify-start text-white text-base font-medium font-['Roboto'] leading-none tracking-wide">
                                        {userType === 'patient' ? 'Sign up' : (step === 1 ? 'Next' : 'Sign up')}
                                    </span>
                                </div>
                            </button>
                        </form>
                        
                    </section>
                </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage
