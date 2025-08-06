import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Image
          src="/images/logo.png"
          alt="MavenMD Logo"
          width={150}
          height={150}
          className="mb-4"
        />
        <DoctorCard
          name="Dr. Emily Rodriguez"
          specialty="Internal medicine"
          rating={5}
          reviewCount={12}
          description="Over 10 years of experience in personalized home care."
          imageUrl="https://placehold.co/600x400/000000/FFF"
          nextAvailable="Thu, Jul 10"
          date="Thu, Jul 10"
          timeSlots={['00:00', '00:00', '00:00', '00:00', '00:00', '00:00']}
        />
      </div>
      <Footer />
    </div>
  );
}
