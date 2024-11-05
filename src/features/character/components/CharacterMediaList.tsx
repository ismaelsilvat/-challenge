import React from 'react';

type CharacterMediaListProps = {
  title: string;
  items: string[];
};

const CharacterMediaList: React.FC<CharacterMediaListProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2 font-semibold text-sm">
        {items.length === 0 ? <li>No {title} available.</li> :
          items.map((item) => (
           <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default CharacterMediaList;
