import DashboardCard from './components/DashboardCard';

export default function DashboardPage() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <DashboardCard
        totalVisits={10}
        percentageChange="+2.5%"
        changeDirection="up"
        changeText="8% vs yesterday"
      />
    </div>
  );
}
