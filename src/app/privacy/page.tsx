import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Privacy | NyayaAI',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Privacy" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Privacy'}]} />
      <div className="mt-8">
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </div>
  );
}

