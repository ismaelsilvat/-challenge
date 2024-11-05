import React from 'react';
import Button from "@/components/Button";
import { Character } from "@/types/character";
import CharacterMediaList from "@/features/character/components/CharacterMediaList";

type characterProps = {
  character: Character;
  onBack: () => void;
};

const CharacterDetails: React.FC<characterProps> = ({ character, onBack }) => (
  <div className={`container mx-auto bg-[#F1F2F3] p-10 md:p-20`}>
    <Button onClick={onBack}>Back</Button>
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mt-5">
      <img
        src={character.imageUrl}
        alt={character.name}
        className="w-full md:w-2/5 h-full rounded-lg shadow-md object-cover"
      />
      <div className="mt-4 w-full md:w-3/5 md:mt-0">
        <h1 className="text-4xl text-gray-800">{character.name}</h1>
        <div className="mt-6 space-y-4">
          <CharacterMediaList title="Featured Films" items={character.films} />
          <CharacterMediaList title="Short Films" items={character.shortFilms} />
          <CharacterMediaList title="TV Shows" items={character.tvShows} />
        </div>
      </div>
    </div>
    <div className="mt-6 flex space-x-4 md:ml-[40%]">
      <Button onClick={() => window.open(character.sourceUrl, '_blank')}>
        Explore More Character Details
      </Button>
    </div>
  </div>
);

export default CharacterDetails;
