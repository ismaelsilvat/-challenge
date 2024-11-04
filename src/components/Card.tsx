import React from 'react';

type CardProps = {
  imageSrc: string;
  title: string;
  description?: string;
  actionLabel: string;
  onActionClick: () => void;
};

const Card: React.FC<CardProps> = ({ imageSrc, title, description, actionLabel, onActionClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        <button
          onClick={onActionClick}
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
