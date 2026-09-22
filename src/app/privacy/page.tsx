import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Privacy | NyayaAI',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <PageHeader title="Privacy" breadcrumb={[{label: 'Home', href: '/'}, {label: 'Privacy'}]} />
      <div className="mt-8 max-w-3xl mx-auto bg-card p-8 rounded-xl border shadow-sm prose prose-neutral dark:prose-invert">
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          At NyayaAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our legal AI services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the platform, such as your IP address, browser type, and access times.</li>
          <li><strong>Query Data:</strong> The legal queries and questions you submit to our AI platform to provide you with relevant answers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Your Information</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to generate personalized legal insights, improve our AI models, and notify you of updates.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>

        <div className="mt-12 p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium">Contact Us</p>
          <p className="text-sm text-muted-foreground mt-1">If you have questions or comments about this Privacy Policy, please contact us at privacy@nyaya-ai.com.</p>
        </div>
      </div>
    </div>
  );
}

