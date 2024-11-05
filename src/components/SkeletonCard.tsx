import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="w-[248px] h-[416px] bg-gray-300 animate-pulse rounded-lg p-4 flex flex-col gap-4">
      <div className="w-full h-[248px] bg-gray-400 rounded-md"></div>
      <div className="w-3/4 mx-auto h-4 bg-gray-400 rounded"></div>
      <div className="w-3/4 mx-auto h-4 bg-gray-400 rounded"></div>
      <div className="w-3/4 mx-auto h-4 bg-gray-400 rounded"></div>
    </div>
  );
};
export default SkeletonCard;