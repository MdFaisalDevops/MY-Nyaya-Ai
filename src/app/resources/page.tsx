import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Resources | NyayaAI',
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Resources" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Resources'}]} />
      <div className="mt-8">
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </div>
  );
}

