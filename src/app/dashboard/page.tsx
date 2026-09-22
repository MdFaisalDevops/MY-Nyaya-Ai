import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Dashboard | NyayaAI',
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Dashboard" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Dashboard'}]} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 bg-card rounded-xl border shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
            <p className="text-muted-foreground mb-6">Here is an overview of your recent legal queries and saved resources.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg border">
                <p className="text-sm font-medium text-muted-foreground">Recent Queries</p>
                <p className="text-2xl font-bold mt-2">12</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg border">
                <p className="text-sm font-medium text-muted-foreground">Saved Documents</p>
                <p className="text-2xl font-bold mt-2">4</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-card rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors border border-transparent hover:border-border">
                  <div>
                    <p className="font-medium">Property Dispute Query</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <button className="text-sm text-primary hover:underline">View details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">Need Legal Help?</h3>
            <p className="text-sm text-muted-foreground mb-4">Start a new query with our AI assistant to get instant guidance.</p>
            <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              New Query
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

