'use client';
import TypeFilter from '@/enum/enums';
import { createContext, useMemo, useState } from 'react';

export const PaginationContext = createContext({
  currentPage: 0,
  totalPages: 0,
  typeFilter: TypeFilter.NOFILTER,
  setCurrentPage: (value: number) => {},
  setTypeFilter: (value: TypeFilter) => {},
  setTotalPages: (value: number) => {},
});

interface ProviderProps {
  readonly children: React.ReactNode;
}

export function PaginationContextProvider({ children }: ProviderProps) {
  const [currentPage, setCurrentPage] = useState(15);
  const [typeFilter, setTypeFilter] = useState(TypeFilter.NOFILTER);
  const [totalPages, setTotalPages] = useState(0);

  const value = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      typeFilter,
      setTypeFilter,
      totalPages,
      setTotalPages,
    }),
    [currentPage, typeFilter, totalPages],
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}