import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Resources | NyayaAI',
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Resources" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Resources'}]} />
      <div className="mt-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Search legal resources, templates, or guides..." 
            className="flex-1 p-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Search
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Popular Legal Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Non-Disclosure Agreement', 'Rental Agreement', 'Employment Contract', 'Will & Testament', 'Power of Attorney', 'Service Agreement'].map((doc, i) => (
                <div key={i} className="p-4 bg-card rounded-xl border shadow-sm flex items-start justify-between group cursor-pointer hover:border-primary transition-colors">
                  <div>
                    <h3 className="font-medium group-hover:text-primary transition-colors">{doc}</h3>
                    <p className="text-xs text-muted-foreground mt-1">PDF & Word formats</p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary">↓</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Helpful Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">How to File an FIR</h3>
                <p className="text-sm text-muted-foreground mb-4">A step-by-step guide to filing a First Information Report with the police, including what to do if they refuse to register it.</p>
                <button className="text-primary text-sm font-medium hover:underline">Read Guide</button>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl border">
                <h3 className="font-semibold text-lg mb-2">Navigating Family Court</h3>
                <p className="text-sm text-muted-foreground mb-4">Understanding the procedures, required documents, and what to expect during family dispute proceedings.</p>
                <button className="text-primary text-sm font-medium hover:underline">Read Guide</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

