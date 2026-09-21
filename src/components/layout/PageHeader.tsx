import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="space-y-4">
      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.href ? (
                <Link href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <ChevronRight className="h-4 w-4 mx-1" />
              )}
            </div>
          ))}
        </nav>
      )}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-2 text-lg">{description}</p>
        )}
      </div>
    </div>
  );
}
