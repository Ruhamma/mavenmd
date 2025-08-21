import React from 'react';
import Footer from '../../../components/Footer';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="bg-primary-50">
        <div
          className="relative w-full bg-primary-800/60 py-48 px-4 "
          style={{
            backgroundImage: 'url(/images/about.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 z-10">
            <div className="w-full h-full bg-primary-800/50" />
          </div>
          <div className="relative z-40 flex flex-col items-center justify-center gap-10 text-center">
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
              We make health accessible to everyone
            </h1>

            <p className="text-white text-base sm:text-lg font-bold leading-normal max-w-2xl">
              No long waits. No hidden costs. Just quality care delivered where and when you need
              it.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <button className="px-6 py-3 bg-primary-800  rounded-2xl shadow text-white text-sm font-medium  tracking-wide">
                Book now
              </button>
              <button className="px-6 py-3 rounded-2xl  outline-2 outline-white text-white text-sm font-medium  tracking-wide">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-8 py-8 w-full">
          <div className="flex-1 text-primary-800  text-3xl md:text-4xl font-bold  leading-snug lg:ml-6">
            Our Medical <br />
            Specialties
          </div>

          <div className="flex-1 text-right">
            <p className="text-black text-base font-normal leading-normal">
              Our platform offers a wide range of medical specialties designed to meet the diverse
              needs of our patients.
            </p>
            <p className="text-Primary-700 text-base font-medium underline leading-normal mt-2">
              See all services
            </p>
          </div>
        </div>
        <div className="w-full px-12 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="absolute w-16 h-16 bg-primary-800/60 rounded-2xl blur-[50px] rotate-[-108.37deg] top-12 right-4" />
            <div className="text-primary-800  text-6xl font-semibold  leading-none">01</div>
            <div className="text-black text-xl font-semibold ">Orthopedics</div>
            <p className="text-sm text-black leading-tight">
              Care for bones, joints, and muscles injuries, arthritis, and mobility problems.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="text-primary-800  text-6xl font-semibold  leading-none">02</div>
            <div className="text-black text-xl font-semibold ">Pediatrics</div>
            <p className="text-sm text-black leading-tight">
              Health services for infants, children, and teens, including checkups and vaccinations.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="absolute w-16 h-16 bg-primary-800/60 rounded-2xl blur-[50px] rotate-[-108.37deg] top-12 right-4" />
            <div className="text-primary-800  text-6xl font-semibold  leading-none">03</div>
            <div className="text-black text-xl font-semibold ">Psychiatry</div>
            <p className="text-sm text-black leading-tight">
              Mental health care for conditions like anxiety, depression, and bipolar disorder.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="text-primary-800  text-6xl font-semibold  leading-none">04</div>
            <div className="text-black text-xl font-semibold ">Dermatology</div>
            <p className="text-sm text-black leading-tight">
              Treatment for skin, hair, and nail issues like acne, rashes, and eczema.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="absolute w-16 h-16 bg-primary-800/60 rounded-2xl blur-[50px] rotate-[-108.37deg] top-12 right-4" />
            <div className="text-primary-800  text-6xl font-semibold  leading-none">05</div>
            <div className="text-black text-xl font-semibold ">Endocrinology</div>
            <p className="text-sm text-black leading-tight">
              Hormone-related care for diabetes, thyroid issues, and metabolism disorders.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
            <div className="text-primary-800  text-6xl font-semibold  leading-none">06</div>
            <div className="text-black text-xl font-semibold ">Geriatrics</div>
            <p className="text-sm text-black leading-tight">
              Specialized care for older adults focusing on aging, memory, and chronic conditions.
              <br />
              <br />
              <span className="underline font-medium">Explore</span>
            </p>
          </div>

          <div className="col-span-full sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <Image
              src="/Specialities.png"
              alt="Medical Illustration"
              width={800}
              height={400}
              className="w-full h-auto rounded-2xl shadow"
            />
          </div>
        </div>
        <div className="w-full px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6 lg:ml-12 w-4/5 lg:pt-20">
            <div className="text-primary-800  text-4xl font-semibold  leading-10 ">
              What We Stand For
            </div>
            <div className="text-zinc-800 text-base font-normal leading-snug">
              At MavenMD, we are driven by the belief that healthcare should be accessible,
              compassionate, and reliable for everyone. Whether it’s an in-person visit or a virtual
              consultation, we’re committed to making high-quality care available at your
              fingertips. We understand the urgency of every patient in pain and the dedication of
              every doctor which is why we focus on creating a platform that supports both through
              affordable services, seamless appointment booking, and meaningful human connection.
              Our mission is to simplify care, empower providers, and ensure no one falls through
              the cracks of the healthcare system.
            </div>
          </div>

          <div className="relative">
            <Image
              src="/WWSF.png"
              alt="Healthcare Team"
              className="w-full max-w-sm h-auto rounded-[31.03px] shadow absolute -top-8 -right-2 z-10"
              width={400}
              height={400}
            />
            <Image
              src="/WWSF2.png"
              alt="Patient Care"
              width={400}
              height={400}
              className="w-full max-w-sm h-auto rounded-[31.03px] shadow relative z-0 -bottom-32"
            />
          </div>
        </div>

        <div className="w-full px-4 py-32 flex flex-col items-center gap-12">
          <div className="max-w-xl text-center flex flex-col gap-3">
            <h2 className="text-primary-800  text-4xl font-semibold  leading-[52px]">
              Insurance we support
            </h2>
            <p className="text-primary-800  text-base font-normal leading-normal">
              We partner with a variety of trusted insurance providers to make quality healthcare
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/BlueCrossBlueSheild.png"
                  alt="Insurance 1"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/Aetna.png"
                  alt="Insurance 2"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/Cigna.png"
                  alt="Insurance 3"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/UnitedHealthCare.png"
                  alt="Insurance 4"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/KaiserPermanente.png"
                  alt="Insurance 5"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/Humana.png"
                  alt="Insurance 6"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/MolinaHealthCare.png"
                  alt="Insurance 7"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-Primary-50 rounded-[20px] shadow outline-1 outline-zinc-200 p-4 flex justify-center items-center w-full max-w-[288px] h-36">
                <Image
                  src="/Medicare.png"
                  alt="Insurance 8"
                  width={288}
                  height={144}
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="flex flex-col gap-16 py-12 px-6 md:px-32">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/mission.png"
                alt="Mission Image"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-start pt-16 px-4">
              <h2 className="text-primary-800  text-4xl font-semibold leading-10 mb-4">
                Our Mission
              </h2>
              <p className="text-zinc-800 text-base font-normal leading-relaxed">
                To connect patients and providers through a seamless, affordable, and compassionate
                healthcare experience both in person and online. We’re here to ensure that every
                patient receives timely care and every provider is empowered to deliver it with
                ease.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2 flex flex-col justify-start pt-16 px-4">
              <h2 className="text-primary-800  text-4xl font-semibold leading-10 mb-4">
                Our Vision
              </h2>
              <p className="text-zinc-800 text-base font-normal leading-relaxed">
                To redefine access to healthcare by becoming the leading platform where technology,
                trust, and human care come together bridging gaps, breaking barriers, and building
                healthier communities.{' '}
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <Image
                src="/vision.png"
                alt="Vision Image"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <div className="px-4 md:px-8 lg:px-16 py-20">
          <div className="relative w-full bg-primary-800 rounded-3xl px-12 py-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-72 bg-white/20 rounded-2xl blur-[116px] transform rotate-[-108deg]"></div>

            <div className="absolute bottom-0 left-0 w-80 h-72 bg-white/20 rounded-2xl blur-[116px] transform rotate-[-108deg]"></div>
            <div>
              <h2 className="text-Primary-50 text-3xl md:text-4xl font-semibold  leading-loose px-6 py-4">
                Book Your Appointment Now!
              </h2>

              <p className=" text-base font-normal leading-relaxed max-w-3xl">
                Take the first step towards personalized in-house care with MavenMD. Book your
                appointment today and experience expert healthcare tailored to your needs, right at
                home.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-4 mt-4 pr-4">
              <button className="bg-white rounded-2xl shadow-[6px_6px_10px_0px_rgba(0,0,0,0.25)] px-6 py-3 text-sm font-medium text-primary-800   tracking-wide">
                Book now
              </button>

              <button className="rounded-2xl o outline-[1] outline-white px-6 py-3 text-sm font-medium   tracking-wide">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
