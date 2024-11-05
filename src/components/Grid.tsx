import React from 'react';

type GridProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  columns?: number;
  className?: string;
  title?: string;
};

const Grid = <T,>({ title, items, renderItem, columns = 4, className}: GridProps<T>) => (
  <div className={`flex flex-col gap-8 ${className}`}>
    {title && <h1 className="font-medium text-gray-800 text-4xl text-center">{title}</h1>}
    {
      items.length > 1 ? <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-4 gap-y-8 gap-x-1`}
      >
        {items.map((item) => (renderItem(item)))}
      </div> : <h1 className="text-gray-800 font-bold text-2xl text-center">Any data found</h1>
    }
  </div>
);

export default Grid;
