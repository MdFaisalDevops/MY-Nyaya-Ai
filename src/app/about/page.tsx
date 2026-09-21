import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'About | NyayaAI',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="About" breadcrumb={[{label: 'Home', href: '/'}, {label: 'About'}]} />
      <div className="mt-8">
        <p className="text-muted-foreground">This page is under construction.</p>
      </div>
    </div>
  );
}

