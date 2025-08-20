'use client';
import { IconStethoscope, IconUser } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterUserMutation, useRegisterProviderMutation } from '@/services/api'; // <- adjust import path

// ✅ Strict schemas
const patientSchema = z
  .object({
    firstName: z.string().min(1, 'First name required'),
    lastName: z.string().min(1, 'Last name required'),
    email: z.string().email(),
    phone: z.string().min(5, 'Invalid phone'),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const doctorSchemaStep1 = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(5),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const doctorSchemaStep2 = z.object({
  npiNumber: z.string().min(1),
  licenseNumber: z.string().min(1),
  licenseState: z.string().min(1),
  caqhNumber: z.string().min(1),
});

// ✅ Type inference
type PatientForm = z.infer<typeof patientSchema>;
type DoctorFormStep1 = z.infer<typeof doctorSchemaStep1>;
type DoctorFormStep2 = z.infer<typeof doctorSchemaStep2>;

const RegisterPage = () => {
  const [userType, setUserType] = useState<'patient' | 'doctor'>('patient');
  const [step, setStep] = useState(1);

  const [registerUser] = useRegisterUserMutation();
  const [registerProvider] = useRegisterProviderMutation();

  // ✅ Hook forms
  const patientForm = useForm<PatientForm>({
    resolver: zodResolver(patientSchema),
  });

  const doctorFormStep1 = useForm<DoctorFormStep1>({
    resolver: zodResolver(doctorSchemaStep1),
  });

  const doctorFormStep2 = useForm<DoctorFormStep2>({
    resolver: zodResolver(doctorSchemaStep2),
  });

  const handleNext = async () => {
    if (userType === 'doctor' && step === 1) {
      const valid = await doctorFormStep1.trigger();
      if (valid) setStep(2);
    }
  };

  // ✅ Submit handlers
  const onSubmitPatient: SubmitHandler<PatientForm> = async data => {
    await registerUser({
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phoneNumber: data.phone,
      password: data.password,
    });
  };

  const onSubmitDoctor: SubmitHandler<DoctorFormStep2> = async data => {
    const step1Data = doctorFormStep1.getValues();
    await registerProvider({
      fullName: `Dr. ${step1Data.firstName} ${step1Data.lastName}`,
      email: step1Data.email,
      phoneNumber: step1Data.phone,
      npiNumber: Number(data.npiNumber),
      licenseNumber: data.licenseNumber,
      licenseState: data.licenseState,
      caqhNumber: data.caqhNumber,
      isPhoneNumberVerified: false,
    });
  };

  return (
    <main className="lg:h-screen lg:w-screen overflow-hidden lg:p-6">
      {/* ... keep your existing UI above this */}

      <form
        className="w-full flex flex-col justify-start items-start gap-2 lg:gap-3 flex-1"
        onSubmit={
          userType === 'patient'
            ? patientForm.handleSubmit(onSubmitPatient)
            : step === 1
              ? doctorFormStep1.handleSubmit(handleNext)
              : doctorFormStep2.handleSubmit(onSubmitDoctor)
        }
      >
        {userType === 'patient'
          ? renderPatientForm(patientForm.register, patientForm.formState.errors)
          : step === 1
            ? renderDoctorForm(doctorFormStep1.register, doctorFormStep1.formState.errors)
            : renderDoctorStep2(doctorFormStep2.register, doctorFormStep2.formState.errors)}

        <button
          type="submit"
          className="self-stretch h-12 px-3 py-2 bg-primary-800 rounded-[20px] inline-flex justify-center items-center"
        >
          <span className="text-white text-sm font-medium">
            {userType === 'patient' ? 'Sign up' : step === 1 ? 'Next' : 'Sign up'}
          </span>
        </button>
      </form>
    </main>
  );
};

// ✅ Typed renderers
const renderPatientForm = (
  register: UseFormRegister<PatientForm>,
  errors: FieldErrors<PatientForm>,
) => (
  <>
    <div className="self-stretch flex flex-col sm:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-1">
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} placeholder="Enter your first name" />
        {errors.firstName && (
          <span className="text-red-500 text-xs">{errors.firstName.message}</span>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName')} placeholder="Enter your last name" />
        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
      </div>
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="email">Email Address</label>
      <input type="email" {...register('email')} placeholder="Enter your email" />
      {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" {...register('phone')} placeholder="Enter your phone number" />
      {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="password">Password</label>
      <input type="password" {...register('password')} placeholder="Enter your password" />
      {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" {...register('confirmPassword')} placeholder="Confirm your password" />
      {errors.confirmPassword && (
        <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
      )}
    </div>
  </>
);

const renderDoctorForm = (
  register: UseFormRegister<DoctorFormStep1>,
  errors: FieldErrors<DoctorFormStep1>,
) => (
  <>
    <div className="self-stretch flex flex-col sm:flex-row gap-4">
      <div className="flex-1 flex flex-col gap-1">
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} placeholder="Enter your first name" />
        {errors.firstName && (
          <span className="text-red-500 text-xs">{errors.firstName.message}</span>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName')} placeholder="Enter your last name" />
        {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
      </div>
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="email">Email Address</label>
      <input type="email" {...register('email')} placeholder="Enter your email" />
      {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" {...register('phone')} placeholder="Enter your phone number" />
      {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="password">Password</label>
      <input type="password" {...register('password')} placeholder="Enter your password" />
      {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
    </div>

    <div className="flex flex-col gap-1 w-full">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" {...register('confirmPassword')} placeholder="Confirm your password" />
      {errors.confirmPassword && (
        <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>
      )}
    </div>
  </>
);

const renderDoctorStep2 = (
  register: UseFormRegister<DoctorFormStep2>,
  errors: FieldErrors<DoctorFormStep2>,
) => (
  <>
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor="npiNumber"
        className="justify-start text-zinc-800 text-sm font-normal leading-tight"
      >
        NPI Number
      </label>
      <input
        {...register('npiNumber')}
        placeholder="Enter your NPI number"
        className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
      />
      {errors.npiNumber && <span className="text-red-500 text-xs">{errors.npiNumber.message}</span>}
    </div>
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor="licenseNumber"
        className="justify-start text-zinc-800 text-sm font-normal leading-tight"
      >
        License Number
      </label>
      <input
        {...register('licenseNumber')}
        placeholder="Enter your license number"
        className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
      />
      {errors.licenseNumber && (
        <span className="text-red-500 text-xs">{errors.licenseNumber.message}</span>
      )}
    </div>
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor="licenseState"
        className="justify-start text-zinc-800 text-sm font-normal leading-tight"
      >
        License State
      </label>
      <input
        {...register('licenseState')}
        placeholder="Enter your license state"
        className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
      />
      {errors.licenseState && (
        <span className="text-red-500 text-xs">{errors.licenseState.message}</span>
      )}
    </div>
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor="caqhNumber"
        className="justify-start text-zinc-800 text-sm font-normal leading-tight"
      >
        CAQH Number
      </label>
      <input
        {...register('caqhNumber')}
        placeholder="Enter your CAQH number"
        className="self-stretch h-8 px-3 py-2 bg-slate-100 rounded-[20px] border-b border-neutral-300 inline-flex justify-start items-center gap-2 text-zinc-500 text-sm font-normal leading-tight"
      />
      {errors.caqhNumber && (
        <span className="text-red-500 text-xs">{errors.caqhNumber.message}</span>
      )}
    </div>
  </>
);

export default RegisterPage;
