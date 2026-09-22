import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Know Your Rights | NyayaAI',
};

export default function KnowYourRightsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Know Your Rights" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Know Your Rights'}]} />
      <div className="mt-8 max-w-5xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          Empower yourself with knowledge. Understanding your basic legal rights is the first step towards justice.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-primary text-xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Constitutional Rights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Fundamental rights guaranteed by the constitution, including freedom of speech, equality before the law, and protection of life and personal liberty.
            </p>
            <button className="text-primary text-sm font-medium hover:underline">Learn more →</button>
          </div>

          <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-primary text-xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Workplace Rights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your rights as an employee, including fair wages, safe working conditions, protection against discrimination, and maternity benefits.
            </p>
            <button className="text-primary text-sm font-medium hover:underline">Learn more →</button>
          </div>

          <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-primary text-xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Consumer Rights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Protection against unfair trade practices, right to information about products, and avenues for consumer dispute redressal.
            </p>
            <button className="text-primary text-sm font-medium hover:underline">Learn more →</button>
          </div>

          <div className="p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-primary text-xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Rights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Understanding ownership, inheritance laws, tenancy rights, and protection against illegal eviction or property disputes.
            </p>
            <button className="text-primary text-sm font-medium hover:underline">Learn more →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

