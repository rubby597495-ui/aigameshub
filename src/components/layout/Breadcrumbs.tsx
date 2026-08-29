import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="mb-4 flex items-center space-x-1.5 text-xs text-stone-400 overflow-x-auto whitespace-nowrap no-scrollbar py-1"
    >
      <Link 
        href="/" 
        className="flex items-center gap-1 hover:text-emerald-300 transition shrink-0"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.url}>
            <ChevronRight className="h-3 w-3 text-stone-600 shrink-0" />
            {isLast ? (
              <span className="font-medium text-stone-200 truncate max-w-[220px] sm:max-w-none">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.url} 
                className="hover:text-emerald-300 transition shrink-0"
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
