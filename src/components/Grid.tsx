import React from 'react';

type GridProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: number;
  className?: string;
  title?: string;
};

const Grid = <T,>({ title, items, renderItem, className}: GridProps<T>) => (
  <div className={`flex flex-col gap-8 ${className}`}>
    {title && <h1 className="font-medium text-gray-800 text-4xl text-center">{title}</h1>}
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-4`}>
      {items.map((item, index) => (renderItem(item, index)))}
    </div>
  </div>
);

export default Grid;
