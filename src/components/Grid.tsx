import React from 'react';
import { strings } from "@/const/strings";
import SkeletonCard from "@/components/SkeletonCard";

type GridProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: number;
  className?: string;
  title?: string;
  isLoading?: boolean
  elements?: number
};

const Grid = <T,>({ title, items, renderItem, className, isLoading = false, elements = 8 }: GridProps<T>) => {
  const isItemVoidAndNotLoading = items.length === 0 && !isLoading

  const renderContent = isLoading ?
    Array.from({ length: elements }).map((e, index) => <SkeletonCard key={index} /> ) :
    items.length > 0 && items.map((item, index) => (renderItem(item, index)))

  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {title && <h1 className="font-medium text-defaultText text-xl text-center">{title}</h1>}
      {isItemVoidAndNotLoading && <h1 className="font-medium text-defaultText text-lg text-center">{strings.noResults}</h1>}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4`}>
        {renderContent}
      </div>
    </div>
  )
};

export default Grid;
