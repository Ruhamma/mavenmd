'use client';
import React from 'react';
import Image from 'next/image';
import { IconBrandGoogle, IconBrandApple } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../../services/auth/api';
import z from 'zod';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

type LoginFormData = z.infer<typeof loginSchema>;
const Login = () => {
  const route = useRouter();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap();
      route.push('/');
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <main className="lg:h-screen lg:w-screen overflow-hidden lg:p-6">
      <div className="relative flex flex-col h-full w-full overflow-hidden">
        <header className="hidden lg:flex w-full h-24 relative overflow-hidden justify-center lg:justify-start lg:pl-8 pt-4">
          <div className="w-28 h-10 left-[20px] top-[30px] absolute rounded-[32px] border border-primary-800" />
          <div className="w-22 h-8 left-[40px] top-[32px] absolute justify-start">
            <span className="text-primary-800 text-md font-normal  leading-[32px]">Maven</span>
            <span className="text-primary-800 text-md font-bold  leading-[32px]">MD</span>
          </div>
        </header>

        <div className="flex flex-col-reverse lg:flex-row flex-1 min-h-0">
          <div className="w-full lg:w-[47%] flex flex-col justify-center items-center gap-4 p-2 h-full">
            <section className="flex flex-col justify-center items-center gap-3 w-full max-w-sm lg:max-w-md flex-1">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <h1 className="self-stretch text-center justify-start">
                    <span className="block text-primary-800 text-2xl sm:text-3xl lg:text-3xl font-semibold  leading-snug">
                      Welcome Back
                    </span>
                    <span className="text-zinc-800 text-md font-normal  leading-snug">
                      Sign in to your Maven
                    </span>
                    <span className="text-primary-800 text-md font-bold  leading-snug">MD</span>
                    <span className="text-zinc-800 text-md font-normal  leading-snug">account</span>
                  </h1>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col justify-start items-start lg:mb-4 gap-6 lg:gap-4"
              >
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <label
                      htmlFor="email"
                      className="justify-start text-zinc-800 text-sm font-normal  leading-tight"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...registerField('email')}
                      placeholder="Enter your email address"
                      className="self-stretch h-10 px-4 py-5 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal  leading-tight"
                    />
                    <p className="text-red-500 text-xs mt-1"> {errors.email?.message}</p>
                  </div>
                </div>

                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <label
                      htmlFor="password"
                      className="justify-start text-zinc-800 text-sm font-normal  leading-tight"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="self-stretch h-02 px-4 py-3 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal  leading-tight"
                      {...registerField('password')}
                    />
                    <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
                  </div>
                  <p className="self-stretch text-center justify-start text-zinc-500 text-sm font-normal  leading-tight">
                    It must be a combination of minimum 8 letters, numbers, and symbols.
                  </p>
                </div>

                <div className="self-stretch inline-flex justify-start items-center gap-4">
                  <label className="flex justify-start items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 flex justify-center items-center gap-2.5"
                    />
                    <span className="justify-start text-zinc-800 text-sm font-normal  leading-tight">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="flex-1 text-right justify-start text-Miscellaneous-Floating-Tab---Text-Unselected text-sm font-normal  leading-tight"
                  >
                    Forgot Password?
                  </a>
                </div>

                <Button
                  disabled={isLoginLoading}
                  type="submit"
                  className="self-stretch h-12 px-3 py-4 bg-primary-800 hover:bg-primary-600 rounded-[20px] outline-2 outline-offset-[-2px] outline-white inline-flex justify-center items-center"
                >
                  <div className="px-4 flex justify-center items-center gap-2.5">
                    <span className="justify-start text-white text-base font-medium  leading-none tracking-wide">
                      Log In
                    </span>
                  </div>
                </Button>
              </form>

              <div className="w-full h-12 outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-start gap-4">
                <button className="flex-1 h-10 px-3 py-4 rounded-[20px] outline-2 outline-offset-[-2px] outline-Primary-600 flex justify-center items-center">
                  <IconBrandGoogle className="w-5 h-5 text-primary-800 fill-current" />
                  <div className="px-4 flex justify-center items-center gap-2.5">
                    <span className="justify-start text-black/75 text-sm font-normal  leading-tight">
                      Google
                    </span>
                  </div>
                </button>
                <button className="flex-1 h-10 px-3 py-4 rounded-[20px] outline-2 outline-offset-[-2px] outline-Primary-600 flex justify-center items-center">
                  <IconBrandApple className="w-5 h-5 text-primary-800 fill-current" />
                  <div className="px-4 flex justify-center items-center gap-2.5">
                    <span className="justify-start text-black/75 text-sm font-normal  leading-tight">
                      Apple
                    </span>
                  </div>
                </button>
              </div>

              <p className="w-full text-center justify-start">
                <span className="text-Miscellaneous-Floating-Tab---Text-Unselected text-sm font-normal  leading-tight">
                  No account yet?{' '}
                </span>
                <a href="/register" className="text-primary-700 text-sm font-normal  leading-tight">
                  Sign Up
                </a>
              </p>
            </section>
          </div>

          <aside className="w-full lg:w-[55%] lg:-mt-14 relative flex justify-center  items-center lg:px-2">
            <div className="relative w-full max-w-[100vw]  md:max-w-[560px] lg:max-w-[640px] lg:max-h-[85vh]">
              <Image
                className="w-full h-auto object-cover rounded-[20px] lg:rounded-[32px] shadow max-h-[85vh]"
                src="/loginImage.png"
                alt="Medical consultation"
                width={640}
                height={480}
                priority
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

              {/* Bottom section */}
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
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Login;
