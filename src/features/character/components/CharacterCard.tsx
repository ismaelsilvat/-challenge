import React from 'react';
import { Character } from "@/features/character/types/character";
import Button from "@/components/Button";

type CharacterCardProps = {
  character: Character;
  onViewProfile: () => void;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onViewProfile }) => {
  const featuredFilms = character?.films.slice(0, 3).join(', ') + (character?.films.length > 3 ? '...' : '');
  return (
    <div className="w-full md:w-[248px] md:min-h-[416px] flex flex-col items-center bg-background overflow-hidden">
      <img src={character?.imageUrl} alt={character?.name} onClick={onViewProfile} className="w-full md:w-[248px] min-h-[248px] max-h-[248px] object-cover cursor-pointer" />
      <div className="p-4 flex flex-col gap-2 justify-center text-center">
        <h3 className="font-lato text-lg font-bold text-defaultText">
          {character?.name}
        </h3>
        <p className="text-base font-semibold leading-[16px] text-defaultText mt-2">
          Featured Films
        </p>
        <p className="text-base leading-[16px] text-defaultText line-clamp-1">
          {featuredFilms.length > 0 ? featuredFilms : "None"}
        </p>
        <Button
          variant="text"
          onClick={onViewProfile}
          className="mt-4 text-link font-extrabold text-defaultText underline"
        >
          VIEW PROFILE
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
