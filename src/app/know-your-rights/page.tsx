import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Know Your Rights | NyayaAI',
};

export default function KnowYourRightsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Know Your Rights" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Know Your Rights'}]} />
      <div className="mt-8">
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </div>
  );
}

