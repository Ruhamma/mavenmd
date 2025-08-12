import Image from 'next/image';

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  avatar: string;
  bgColor?: string;
}

export const TestimonialCard = ({
  text,
  name,
  role,
  avatar,
  bgColor = 'bg-white',
}: TestimonialCardProps) => {
  return (
    <div
      className={`rounded-3xl shadow-md p-6 sm:p-8 flex flex-col justify-between ${bgColor}  h-[400px]`}
    >
      <p className="italic font-light text-sm mb-8">{text}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={avatar || '/images/Doc1.jpg'}
            alt={`${name} avatar`}
            className="object-cover rounded-full"
            fill
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};
