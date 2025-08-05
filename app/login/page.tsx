import React from 'react'
import { IconBrandGoogle, IconBrandApple } from '@tabler/icons-react'

const page = () => {
  return (
        <main className="min-h-screen">
            <div className="relative flex flex-col min-h-screen">
                <header className="hidden lg:flex w-full h-36 relative overflow-hidden justify-center lg:justify-start lg:pl-8 pt-6">
                    <div className="w-40 h-14 left-[35px] top-[54px] absolute rounded-[48px] border border-violet-950" />
                    <div className="w-28 h-12 left-[73px] top-[58px] absolute justify-start">
                        <span className="text-violet-950 text-xl font-normal font-['DM_Sans'] leading-[52px]">Maven</span>
                        <span className="text-violet-950 text-xl font-bold font-['DM_Sans'] leading-[52px]">MD</span>
                    </div>
                </header>
                
                <div className="flex flex-col-reverse lg:flex-row flex-1">
                    {/* Left side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-8 lg:gap-14 p-6 lg:p-8">
                    
                    <section className="flex flex-col justify-center items-center gap-8 lg:gap-14 w-full max-w-sm lg:max-w-md">
                        <div data-alignment="Left" data-caption="false" data-headline-1="false" data-headline-2="true" data-text="false" className="w-full flex flex-col justify-start items-start gap-2">
                            <div className="self-stretch flex flex-col justify-start items-center gap-2">
                                <h1 className="self-stretch text-center justify-start">
                                    <span className="text-violet-950 text-2xl sm:text-3xl lg:text-4xl font-semibold font-['DM_Sans'] leading-loose">Welcome Back<br /></span>
                                    <span className="text-zinc-800 text-lg sm:text-xl font-normal font-['DM_Sans'] leading-loose">Sign in to your Maven</span>
                                    <span className="text-violet-950 text-lg sm:text-xl font-bold font-['DM_Sans'] leading-loose">MD</span>
                                    <span className="text-zinc-800 text-lg sm:text-xl font-normal font-['DM_Sans'] leading-loose"> account</span>
                                </h1>
                            </div>
                        </div>
                        
                        <form className="w-full flex flex-col justify-start items-start gap-6 lg:gap-7">
                            <div data-description="false" data-error="False" data-label="true" data-textarea="False" className="self-stretch flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <label htmlFor="email" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        placeholder="Enter your email address"
                                        className="self-stretch h-12 px-4 py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                                    />
                                </div>
                            </div>
                            
                            <div data-description="true" data-error="False" data-label="true" data-textarea="False" className="self-stretch flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <label htmlFor="password" className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Password</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        placeholder="Enter your password"
                                        className="self-stretch h-12 px-4 py-3 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal font-['Inter'] leading-tight"
                                    />
                                </div>
                                <p className="self-stretch text-center justify-start text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
                            </div>
                            
                            <div className="self-stretch inline-flex justify-start items-center gap-4">
                                <label className="flex justify-start items-center gap-2">
                                    <input 
                                        type="checkbox" 
                                        className="w-5 h-5 flex justify-center items-center gap-2.5"
                                    />
                                    <span className="justify-start text-zinc-800 text-sm font-normal font-['Inter'] leading-tight">Remember me</span>
                                </label>
                                <a href="#" className="flex-1 text-right justify-start text-Miscellaneous-Floating-Tab---Text-Unselected text-sm font-normal font-['Inter'] leading-tight">Forgot Password?</a>
                            </div>
                            
                            <button 
                                type="submit"
                                className="self-stretch h-12 px-3 py-4 bg-violet-950 rounded-[20px] outline-2 outline-offset-[-2px] outline-white inline-flex justify-center items-center"
                            >
                                <div className="px-4 flex justify-center items-center gap-2.5">
                                    <span className="justify-start text-white text-base font-medium font-['Roboto'] leading-none tracking-wide">Log In</span>
                                </div>
                            </button>
                        </form>
                        
                        <div className="w-full h-12 outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-start gap-4">
                            <button className="flex-1 h-12 px-3 py-4 rounded-[20px] outline-2 outline-offset-[-2px] outline-Primary-600 flex justify-center items-center">
                                <IconBrandGoogle className="w-5 h-5 text-violet-950 fill-current" />
                                <div className="px-4 flex justify-center items-center gap-2.5">
                                    <span className="justify-start text-black/75 text-sm font-normal font-['Inter'] leading-tight">Google</span>
                                </div>
                            </button>
                            <button className="flex-1 h-12 px-3 py-4 rounded-[20px] outline-2 outline-offset-[-2px] outline-Primary-600 flex justify-center items-center">
                                <IconBrandApple className="w-5 h-5 text-violet-950 fill-current" />
                                <div className="px-4 flex justify-center items-center gap-2.5">
                                    <span className="justify-start text-black/75 text-sm font-normal font-['Inter'] leading-tight">Apple</span>
                                </div>
                            </button>
                        </div>
                        
                        <p className="w-full text-center justify-start">
                            <span className="text-Miscellaneous-Floating-Tab---Text-Unselected text-sm font-normal font-['Inter'] leading-tight">No account yet? </span>
                            <a href="#" className="text-Primary-700 text-sm font-normal font-['Inter'] leading-tight">Sign Up</a>
                        </p>
                    </section>
                </div>
                
                {/* Right side */}
                <aside className="w-full lg:w-1/2 h-[400px] lg:h-[780px] lg:pr-8 lg:-mt-14 mb-3 relative">
                    <img className="w-full h-full object-cover rounded-[20px] lg:rounded-[56.85px] shadow-[0px_5.684999942779541px_3.7899999618530273px_0px_rgba(0,0,0,0.25)]" src="https://placehold.co/758x866" alt="Medical consultation" />
                    
                    {/* Overlay elements */}
                    <div className="w-40 sm:w-40 lg:w-48 h-16 sm:h-18 lg:h-20 left-[55%] top-[10%] lg:top-[8%] absolute bg-black/20 rounded-xl shadow-[6px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                    <div className="w-40 sm:w-40 lg:w-48 h-16 sm:h-18 lg:h-20 left-[45%] top-[4%] absolute bg-white/80 rounded-xl shadow-[6px_6px_8px_0px_rgba(0,0,0,0.25)]" />
                    <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[47%] top-[5.5%] absolute justify-start text-violet-950 text-xs sm:text-sm font-normal font-['Inter'] leading-normal">Real Doctors</p>
                    <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[52%] lg:left-[50%] top-[9.7%] lg:top-[8.3%] absolute justify-start text-violet-950 text-xs sm:text-sm font-bold font-['Inter'] leading-normal">Real Visits</p>
                    <p className="w-28 sm:w-32 lg:w-40 h-5 sm:h-6 left-[55%] lg:left-[53%] top-[13.7%] lg:top-[11%] absolute justify-start text-violet-950 text-xs sm:text-sm font-normal font-['Inter'] leading-normal">Real Peace of Mind</p>
                    
                    {/* Dots - positioned at right bottom of the black overlay */}
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[85%] lg:left-[76%] top-[22%] lg:top-[16%] absolute bg-blue-500 rounded-full" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[88%] lg:left-[79%] top-[22%] lg:top-[16%] absolute bg-blue-600 rounded-full" />
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 left-[91%] lg:left-[82%] top-[22%] lg:top-[16%] absolute bg-blue-700 rounded-full" />
                    
                    {/* Bottom section */}
                    <div className="w-60 sm:w-72 lg:w-80 h-24 sm:h-28 lg:h-32 left-[7%] top-[79%] absolute bg-zinc-200/70 rounded-3xl" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[12%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 1" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[18%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 2" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[24%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 3" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[30%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 4" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[36%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 5" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 left-[42%] top-[82%] absolute rounded-full" src="https://placehold.co/56x56" alt="Doctor 6" />
                    <p className="w-48 sm:w-56 lg:w-64 h-4 sm:h-5 left-[12%] top-[81.5%] absolute justify-start text-violet-950 text-xs font-bold font-['Inter'] leading-none">Board-certified care at your door</p>
                </aside>
                </div>
            </div>
        </main>
    )
}

export default page
