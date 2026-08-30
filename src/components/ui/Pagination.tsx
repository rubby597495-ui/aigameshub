'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems?: number;
  pageSize?: number;
  baseUrl?: string;
  searchParams?: Record<string, string | undefined>;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  baseUrl,
  searchParams,
  onPageChange,
  className
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    if (!baseUrl) return '#';
    const params = new URLSearchParams();
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, val]) => {
        if (val && key !== 'page') {
          params.set(key, val);
        }
      });
    }
    params.set('page', page.toString());
    const query = params.toString();
    return query ? `${baseUrl}?${query}` : baseUrl;
  };

  const handlePageClick = (e: React.MouseEvent, page: number) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(page);
    }
  };

  // Generate page numbers with ellipses
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // Number of pages to show around current

    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    pages.push(1);

    if (left > 2) {
      pages.push('...');
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  const startItem = totalItems !== undefined && pageSize !== undefined
    ? (currentPage - 1) * pageSize + 1
    : undefined;
  const endItem = totalItems !== undefined && pageSize !== undefined
    ? Math.min(currentPage * pageSize, totalItems)
    : undefined;

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs", className)}>
      {/* Item Range Info */}
      {totalItems !== undefined && startItem !== undefined && endItem !== undefined ? (
        <div className="text-stone-400 font-medium text-center sm:text-left">
          Showing <span className="text-stone-200 font-bold">{startItem}–{endItem}</span> of{' '}
          <span className="text-emerald-400 font-bold">{totalItems}</span> items
        </div>
      ) : (
        <div className="text-stone-400 font-medium text-center sm:text-left">
          Page <span className="text-stone-200 font-bold">{currentPage}</span> of{' '}
          <span className="text-stone-200 font-bold">{totalPages}</span>
        </div>
      )}

      {/* Pagination Controls */}
      <nav aria-label="Pagination Navigation" className="flex items-center gap-1.5 select-none">
        {/* First Page */}
        {baseUrl ? (
          <Link
            href={createPageUrl(1)}
            onClick={(e) => handlePageClick(e, 1)}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-xl border transition",
              currentPage === 1
                ? "border-white/5 bg-white/[0.01] text-stone-600 pointer-events-none opacity-40"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white"
            )}
            title="First Page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={(e) => handlePageClick(e, 1)}
            className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition disabled:opacity-40 disabled:pointer-events-none"
            title="First Page"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
        )}

        {/* Previous Page */}
        {baseUrl ? (
          <Link
            href={createPageUrl(Math.max(1, currentPage - 1))}
            onClick={(e) => handlePageClick(e, Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-xl border transition",
              currentPage === 1
                ? "border-white/5 bg-white/[0.01] text-stone-600 pointer-events-none opacity-40"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white"
            )}
            title="Previous Page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={(e) => handlePageClick(e, Math.max(1, currentPage - 1))}
            className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition disabled:opacity-40 disabled:pointer-events-none"
            title="Previous Page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pages.map((p, idx) => {
            if (typeof p === 'string') {
              return (
                <span key={`dots-${idx}`} className="px-1.5 text-stone-500 font-bold select-none">
                  …
                </span>
              );
            }

            const isCurrent = p === currentPage;

            if (baseUrl) {
              return (
                <Link
                  key={`page-${p}`}
                  href={createPageUrl(p)}
                  onClick={(e) => handlePageClick(e, p)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={cn(
                    "grid h-8 min-w-[32px] px-2.5 place-items-center rounded-xl border font-bold transition shadow-sm",
                    isCurrent
                      ? "border-emerald-400/50 bg-[#8FAFA3] text-[#101715] shadow-emerald-950/40"
                      : "border-white/10 bg-white/[0.03] text-stone-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {p}
                </Link>
              );
            }

            return (
              <button
                key={`page-${p}`}
                type="button"
                onClick={(e) => handlePageClick(e, p)}
                aria-current={isCurrent ? 'page' : undefined}
                className={cn(
                  "grid h-8 min-w-[32px] px-2.5 place-items-center rounded-xl border font-bold transition shadow-sm",
                  isCurrent
                    ? "border-emerald-400/50 bg-[#8FAFA3] text-[#101715] shadow-emerald-950/40"
                    : "border-white/10 bg-white/[0.03] text-stone-300 hover:bg-white/10 hover:text-white"
                )}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Next Page */}
        {baseUrl ? (
          <Link
            href={createPageUrl(Math.min(totalPages, currentPage + 1))}
            onClick={(e) => handlePageClick(e, Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-xl border transition",
              currentPage === totalPages
                ? "border-white/5 bg-white/[0.01] text-stone-600 pointer-events-none opacity-40"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white"
            )}
            title="Next Page"
          >
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={(e) => handlePageClick(e, Math.min(totalPages, currentPage + 1))}
            className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition disabled:opacity-40 disabled:pointer-events-none"
            title="Next Page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        {/* Last Page */}
        {baseUrl ? (
          <Link
            href={createPageUrl(totalPages)}
            onClick={(e) => handlePageClick(e, totalPages)}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
            className={cn(
              "grid h-8 w-8 place-items-center rounded-xl border transition",
              currentPage === totalPages
                ? "border-white/5 bg-white/[0.01] text-stone-600 pointer-events-none opacity-40"
                : "border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white"
            )}
            title="Last Page"
          >
            <ChevronsRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={(e) => handlePageClick(e, totalPages)}
            className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 hover:bg-white/10 hover:text-white transition disabled:opacity-40 disabled:pointer-events-none"
            title="Last Page"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        )}
      </nav>
    </div>
  );
}
