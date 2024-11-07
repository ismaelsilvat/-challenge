import React from 'react';

type CharacterMediaListProps = {
  title: string;
  items: string[];
};

const CharacterMediaList: React.FC<CharacterMediaListProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-defaultText">{title}</h2>
      <ul className="list-disc list-inside text-defaultText mt-2 font-medium text-base">
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
