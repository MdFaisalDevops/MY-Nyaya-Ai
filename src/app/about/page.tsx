import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'About | NyayaAI',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="About" breadcrumb={[{label: 'Home', href: '/'}, {label: 'About'}]} />
      <div className="mt-12 max-w-4xl mx-auto space-y-12">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Democratizing Legal Access</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NyayaAI is an advanced legal artificial intelligence platform designed to make legal knowledge accessible, understandable, and actionable for everyone. We believe that access to justice is a fundamental right, not a privilege.
          </p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to bridge the gap between complex legal jargon and the everyday citizen. By leveraging cutting-edge generative AI, we provide instant, accurate, and easy-to-understand legal information, empowering individuals to make informed decisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-card rounded-xl border shadow-sm transition-all hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-primary">1. Ask a Question</h3>
              <p className="text-sm text-muted-foreground">Describe your legal issue or ask a question in plain English.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border shadow-sm transition-all hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-primary">2. AI Analysis</h3>
              <p className="text-sm text-muted-foreground">Our AI instantly analyzes vast legal databases to find relevant laws and precedents.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border shadow-sm transition-all hover:shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-primary">3. Get Guidance</h3>
              <p className="text-sm text-muted-foreground">Receive clear, actionable legal information to help you understand your options.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

