import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Dashboard | NyayaAI',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Dashboard" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Dashboard'}]} />
      <div className="mt-8">
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </div>
  );
}

