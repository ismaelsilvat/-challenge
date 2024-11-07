import React from 'react';
import Button from "@/components/Button";
import { Character } from "@/features/character/types/character";
import CharacterMediaList from "@/features/character/components/CharacterMediaList";
import { strings } from "@/const/strings";

type CharacterDetailsProps = {
  character: Character;
  onBack: () => void;
};

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character, onBack }) => (
  <div className={`container mx-auto bg-[#F1F2F3] p-10 md:p-20`}>
    <Button onClick={onBack}>{strings.back}</Button>
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 mt-5">
      <img
        src={character.imageUrl}
        alt={character.name}
        className="w-full md:w-2/5 h-full rounded-lg shadow-md object-cover"
      />
      <div className="mt-4 w-full md:w-3/5 md:mt-0">
        <h1 className="text-xl text-defaultText">{character.name}</h1>
        <div className="mt-6 space-y-4">
          <CharacterMediaList title={strings.featuredFilms} items={character.films} />
          <CharacterMediaList title={strings.shortFilms} items={character.shortFilms} />
          <CharacterMediaList title={strings.tvShows} items={character.tvShows} />
        </div>
      </div>
    </div>
    <div className="mt-6 flex space-x-4 md:ml-[40%]">
      <Button onClick={() => window.open(character.sourceUrl, '_blank')}>
        {strings.exploreMoreCharacterDetails}
      </Button>
    </div>
  </div>
);

export default CharacterDetails;
